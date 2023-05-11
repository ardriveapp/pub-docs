<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink :to="$localePath" class="home-link">
      <img class="logo" :src="$site.themeConfig.logo" :alt="$siteTitle" />
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </RouterLink>

    <NavLinks class="can-hide" />
    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <a
        class="nav-link-right"
        href="https://ar-io.zendesk.com/hc/en-us"
        target="_blank"
        >Support</a
      >
      <a class="nav-link-right" href="https://discord.com/invite/ya4hf2H">
        <svg
        class="discord-logo"
          length="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            clip-rule="evenodd"
            d="M15.932 11.4C15.932 12.132 15.392 12.732 14.708 12.732C14.036 12.732 13.484 12.132 13.484 11.4C13.484 10.668 14.024 10.068 14.708 10.068C15.392 10.068 15.932 10.668 15.932 11.4ZM10.328 10.068C9.644 10.068 9.104 10.668 9.104 11.4C9.104 12.132 9.656 12.732 10.328 12.732C11.012 12.732 11.552 12.132 11.552 11.4C11.564 10.668 11.012 10.068 10.328 10.068ZM23 2.472V24C19.9768 21.3284 20.9437 22.2127 17.432 18.948L18.068 21.168H4.46C3.104 21.168 2 20.064 2 18.696V2.472C2 1.104 3.104 0 4.46 0H20.54C21.896 0 23 1.104 23 2.472ZM19.58 13.848C19.58 9.984 17.852 6.852 17.852 6.852C16.124 5.556 14.48 5.592 14.48 5.592L14.312 5.784C16.352 6.408 17.3 7.308 17.3 7.308C14.4495 5.7457 11.1011 5.74542 8.336 6.96C7.892 7.164 7.628 7.308 7.628 7.308C7.628 7.308 8.624 6.36 10.784 5.736L10.664 5.592C10.664 5.592 9.02 5.556 7.292 6.852C7.292 6.852 5.564 9.984 5.564 13.848C5.564 13.848 6.572 15.588 9.224 15.672C9.224 15.672 9.668 15.132 10.028 14.676C8.504 14.22 7.928 13.26 7.928 13.26C8.10453 13.3836 8.39563 13.5437 8.42 13.56C10.4455 14.6943 13.3226 15.0659 15.908 13.98C16.328 13.824 16.796 13.596 17.288 13.272C17.288 13.272 16.688 14.256 15.116 14.7C15.476 15.156 15.908 15.672 15.908 15.672C18.56 15.588 19.58 13.848 19.58 13.848Z"
          />
        </svg>
      </a>
      <a href="https://github.com/ardriveapp" target="_blank">
        <svg
          class="github-logo"
          length="current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            fill="currentColor"
            clip-rule="evenodd"
            d="M10 0C15.523 0 20 4.59 20 10.253C20 14.782 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.762 12.48 19.489C12.48 19.151 12.492 18.047 12.492 16.675C12.492 15.719 12.172 15.095 11.813 14.777C14.04 14.523 16.38 13.656 16.38 9.718C16.38 8.598 15.992 7.684 15.35 6.966C15.454 6.707 15.797 5.664 15.252 4.252C15.252 4.252 14.414 3.977 12.505 5.303C11.706 5.076 10.85 4.962 10 4.958C9.15 4.962 8.295 5.076 7.497 5.303C5.586 3.977 4.746 4.252 4.746 4.252C4.203 5.664 4.546 6.707 4.649 6.966C4.01 7.684 3.619 8.598 3.619 9.718C3.619 13.646 5.954 14.526 8.175 14.785C7.889 15.041 7.63 15.493 7.54 16.156C6.97 16.418 5.522 16.871 4.63 15.304C4.63 15.304 4.101 14.319 3.097 14.247C3.097 14.247 2.122 14.234 3.029 14.87C3.029 14.87 3.684 15.185 4.139 16.37C4.139 16.37 4.726 18.2 7.508 17.58C7.513 18.437 7.522 19.245 7.522 19.489C7.522 19.76 7.338 20.077 6.839 19.982C2.865 18.627 0 14.783 0 10.253C0 4.59 4.478 0 10 0"
          /></svg>
    </a>
      <svg
        @click="toggleLightMode"
        class="theme-toggle"
        length="current"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6C12.5523 6 13 5.55228 13 5V3C13 2.44771 12.5523 2 12 2C11.4477 2 11 2.44771 11 3V5C11 5.55229 11.4477 6 12 6ZM21 11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11ZM5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11H5ZM6.21828 4.99995C5.81235 4.61611 5.17212 4.63402 4.78828 5.03995C4.40444 5.44588 4.42235 6.08611 4.82828 6.46995L6.26828 7.85995C6.46353 8.04848 6.72703 8.14955 6.99828 8.13995C7.27047 8.13891 7.53047 8.02696 7.71828 7.82995C8.106 7.43991 8.106 6.80999 7.71828 6.41995L6.21828 4.99995ZM17.6916 7.85877C17.5062 8.03745 17.259 8.13774 17.0016 8.13877C16.7504 8.12219 16.5147 8.01149 16.3416 7.82877C15.9538 7.43873 15.9538 6.80881 16.3416 6.41877L17.7816 4.99877C18.1729 4.68338 18.7375 4.7074 19.1006 5.0549C19.4996 5.43676 19.5134 6.06977 19.1316 6.46877L17.6916 7.85877ZM12 18C11.4477 18 11 18.4477 11 19V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V19C13 18.4477 12.5523 18 12 18ZM16.315 16.165C16.6988 15.7674 17.3324 15.7562 17.73 16.14L19.19 17.56L19.1958 17.5658C19.5847 17.9579 19.5821 18.5911 19.19 18.98C19.0005 19.1733 18.7407 19.2816 18.47 19.28C18.2125 19.279 17.9654 19.1787 17.78 19L16.34 17.58C15.9424 17.1962 15.9312 16.5626 16.315 16.165ZM6.27001 16.1413L4.83001 17.5313C4.43789 17.9203 4.43529 18.5534 4.82421 18.9455L4.83001 18.9513C5.01951 19.1447 5.27929 19.2529 5.55001 19.2513C5.79652 19.2534 6.03513 19.1644 6.22001 19.0013L7.66001 17.6113C8.05765 17.2275 8.06885 16.594 7.68501 16.1963C7.30117 15.7987 6.66766 15.7875 6.27001 16.1713V16.1413ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
          fill="currentColor"
        />
      </svg>

      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />

      <SearchBox
        v-else-if="
          $site.themeConfig.search !== false &&
          $page.frontmatter.search !== false
        "
      />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@theme/components/SearchBox.vue";
import SidebarButton from "@theme/components/SidebarButton.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Navbar",

  // props: {
  //   logo: {
  //     type: String,
  //     default: "",
  //   },
  // },

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
      isLight: false,
    };
  },

  methods: {
    toggleLightMode() {
      this.$store.commit("toggleLightMode");
      if (this.$store.state.isLight) {
        console.log("Light mode activated.");
      } else if (!this.$store.state.isLight) {
        console.log("Light mode deactivated.");
      }
    },
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem


.theme-toggle
  // border: $themeToggleStyle
  color: var(--TextColor)
  background-color transparent
  padding-right 2em
  padding-left 1em
  // margin-top 5px
  display inline-block
  overflow hidden
  // text-indent -9999px
  white-space nowrap
  width 2em
  height auto
  cursor pointer

.github-logo
  color var(--TextColor)
  margin none
  width 2em
  height auto
  // border 2px solid red
  padding none

.discord-logo
  color var(--TextColor)
  width 2em
  height auto
  padding none

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color: var(--TextColor)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color: var(--BgColor2)
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    // border 2px solid green
    .search-box
      flex: 0 0 auto
      vertical-align top
.nav-link-right
    padding-right 1em
    color: var(--TextColor)
    // border 2px solid blue

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
