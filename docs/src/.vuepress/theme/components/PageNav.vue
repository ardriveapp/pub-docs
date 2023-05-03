<template>
  <div v-if="prev || next" class="page-nav">
    <div class="inner">
      <router-link
        v-if="prev"
        :to="prev.path"
        class="nav-link prev"
        :style="prevStyle"
      >
        <i class="pointer last">←</i>
        <span>{{ prev.title || prev.path }}</span>
      </router-link>

      <div class="spacer"></div>

      <router-link
        v-if="next"
        :to="next.path"
        class="nav-link next"
        :style="nextStyle"
      >
        <span>{{ next.title || next.path }}</span>
        <i class="pointer forward">→</i>
      </router-link>
    </div>
  </div>
</template>


<script>
import { resolvePage } from "../util";
import isString from "lodash/isString";
import isNil from "lodash/isNil";

export default {
  name: "PageNav",

  props: ["sidebarItems", "isLight"],

  computed: {
    prev() {
      return resolvePageLink(LINK_TYPES.PREV, this);
    },

    next() {
      return resolvePageLink(LINK_TYPES.NEXT, this);
    },

    prevStyle() {
    return this.isLight
      ? { backgroundColor: `#f2f2f2` }
      : { backgroundColor: `#808080` };
  },
  nextStyle() {
    return this.isLight
      ? { backgroundColor: `#f2f2f2` }
      : { backgroundColor: `#808080` };
  },

  },
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next,
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev,
  },
};

function resolvePageLink(
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType;

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig);

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page);

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig;

  if (link === false) {
    return;
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path);
  } else {
    return resolveLink($page, sidebarItems);
  }
}

function find(page, items, offset) {
  const res = [];
  flatten(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flatten(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flatten(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    display flex
    justify-content space-between
    min-height 4rem
    margin-top 0
    border-top var(--LineThickness) solid var(--LineColor)
    padding-top 1rem

.spacer
  flext-grow 1

// .nav-link
//   display flex
//   align-items center
//   justify-content space-between
//   width 35%
//   padding 0.75rem
//   border 1px solid var(--AccentColor)
//   border-radius .5rem
//   text-decoration none
//   color inherit

.prev
    align-items center
    justify-content space-between
    width 35%
    padding 0.75rem
    border 1px solid var(--AccentColor)
    border-radius .5rem
    text-decoration none
    color inherit
  .pointer
    margin-right 1rem
    display flex
    

.next
  align-items center
  justify-content space-between
  width 35%
  padding 0.75rem
  border 1px solid var(--AccentColor)
  border-radius .5rem
  text-decoration none
  color inherit
  .pointer
    margin-left 1rem
    display flex
    

</style>
