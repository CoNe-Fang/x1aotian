<template>
  <div
    class="site-title"
    :class="siteTitleClasses">
    <h1
      v-if="isSmall"
      class="handle">
      <span class="text">@x1aotian</span>
    </h1>
    <template v-else>
      <h2 class="first name">
        <span class="text">Xiaotian Fang</span>
      </h2>
      <font size="3"><p/></font>
      <h3 class="last name">
        <span class="text">方 笑 天</span>
      </h3>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SiteTitle',
    props: {
      /**
       * _whether to render the smaller version of the title_
       *
       * The smaller version is meant to be used in the header.
       */
      isSmall: {
        type: Boolean
      }
    },
    computed: {
      /**
       * Get the classes to use on the site title.
       * @returns {Array} an array of all the classes to apply on the element
       */
      siteTitleClasses () {
        return [
          {
            small: this.isSmall
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./SiteTitle.scss"/>
