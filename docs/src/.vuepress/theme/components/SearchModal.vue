<template>
  <div class="search-modal">
    <div class="search-modal-content">
      <input
        ref="input"
        aria-label="Search"
        :value="query"
        :class="{ focused: focused }"
        :placeholder="searchPlaceholder"
        autocomplete="off"
        spellcheck="false"
        @input="query = $event.target.value"
        @focus="focused = true"
        @blur="focused = false"
        @keydown.up.prevent="onUp"
        @keydown.down.prevent="onDown"
        @keydown.enter.prevent="go(focusIndex)"
      />
      <ul
        v-if="showSuggestions"
        class="suggestions"
        :class="{ 'align-right': alignRight }"
        @mouseleave="unfocus"
      >
        <li
          v-for="(s, i) in suggestions"
          :key="i"
          class="suggestion"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent>
            <span class="page-title">{{ s.title || s.path }}</span>
            <span v-if="s.header" class="header"
              >&gt; {{ s.header.title }}</span
            >
          </a>
        </li>
      </ul>
      <button @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<script>
import matchQuery from "./search-dependencies/match-query";

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default {
  name: "SearchModal",

  data() {
    return {
      query: "",
      focused: false,
      focusIndex: 0,
    };
  },

  computed: {
    searchPlaceholder() {
      return this.$site.themeConfig.searchPlaceholder || "";
    },

    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },

    suggestions() {
      const query = this.query.trim().toLowerCase();
      if (!query) {
        return;
      }

      const { pages } = this.$site;
      const max =
        this.$site.themeConfig.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS;
      const localePath = this.$localePath;
      const res = [];
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        const p = pages[i];
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue;
        }

        if (matchQuery(query, p)) {
          res.push(p);
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            const h = p.headers[j];
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(
                Object.assign({}, p, {
                  path: p.path + "#" + h.slug,
                  header: h,
                })
              );
            }
          }
        }
      }
      return res;
    },

    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length;
      const repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    },
  },

  mounted() {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
    document.addEventListener("keydown", this.onHotkey);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.onHotkey);
  },

  methods: {
    openModal() {
      this.$emit("open-search-modal");
    },

    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== "/" && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }
      return "/";
    },

    isSearchable(page) {
      let searchPaths = SEARCH_PATHS;

      // all paths searchables
      if (searchPaths === null) {
        return true;
      }

      searchPaths = Array.isArray(searchPaths)
        ? searchPaths
        : new Array(searchPaths);

      return (
        searchPaths.filter((path) => {
          return page.path.match(path);
        }).length > 0
      );
    },

    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(event.key)
      ) {
        this.$refs.input.focus();
        event.preventDefault();
      }
    },

    onUp() {
      if (this.focusIndex > 0) {
        this.focusIndex--;
      } else {
        this.focusIndex = this.suggestions.length - 1;
      }
    },

    onDown() {
      this.focusIndex = (this.focusIndex + 1) % this.suggestions.length;
    },

    go(i) {
      if (!this.showSuggestions) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.query = "";
      this.focusIndex = 0;
      this.$emit("close-modal");
    },

    focus(i) {
      this.focusIndex = i;
    },

    unfocus() {
      this.focusIndex = -1;
    },
  },
};
</script>

<style lang="stylus" scoped>
.search-modal
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center
  z-index 100
  background-color rgba(0, 0, 0, 0.5)

.search-modal-content
  width 60vw
  height 60vh
  background-color white
  border-radius 10px
  box-shadow 0 2px 10px rgba(0, 0, 0, 0.1)
  padding 20px
  overflow auto
  display flex
  flex-direction column
  align-items center

.search-modal-content input
  width 100%
  padding 10px
  border-radius 5px
  border 1px solid #ddd
  margin-bottom 20px

.search-modal-content ul
  list-style-type none
  padding 0

.search-modal-content li
  padding 10px
  border-bottom 1px solid #ddd

.search-modal-content li:last-child
  border-bottom none

.search-modal-content button
  align-self flex-end
  margin-top 20px
  padding 10px 20px
  background-color #3eaf7c
  color white
  border none
  border-radius 5px
  cursor pointer
</style>
