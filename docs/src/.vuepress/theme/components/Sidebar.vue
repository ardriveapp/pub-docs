<template>
  <aside class="sidebar">
    <NavLinks />

    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  border-right 1px solid var(--BorderColor)
  color: var(--TextColor)
  ul
    padding 0
    margin 0
    list-style-type none
    color: var(--TextColor)
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    color: var(--TextColor)
    a
      font-weight 600
      color: var(--TextColor)
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
      color: var(--TextColor)
  & > .sidebar-links
    padding 1.5rem 0
    color: var(--TextColor)
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
      color: var(--TextColor)
    & > li:not(:first-child)
      margin-top .75rem
      color: var(--TextColor)

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      color var(--TextColor)
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
