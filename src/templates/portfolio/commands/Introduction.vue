<template>
  <div class="intro" title="This terminal has easter-eggs!">
      <pre class="ascii-art big">

__  __   /¯¯/  _____  _____  _/ˉ/__  __  _____   _____
\ \/ /   / /  / .  / / .. / ˉ/ /ˉˉ  / / / .  /  / // /
/_/\_\ /¯__¯/ \__/.\ \___/  /__ˉ/  /_/  \__/.\ /_//_/</pre>
      <pre class="ascii-art small">
__  __   /¯¯/  _____  _____  _/ˉ/__  __  _____   _____
\ \/ /   / /  / .  / / .. / ˉ/ /ˉˉ  / / / .  /  / // /
/_/\_\ /¯__¯/ \__/.\ \___/  /__ˉ/  /_/  \__/.\ /_//_/</pre>
      <div class="links">
      <a
        v-for="(link, index) in resumeLinks"
        v-shortkey="[link.shortkey]"
        :key="index"
        class="link yellow-colored"
        :href="link.url"
        target="_blank"
        :title="resumeLinkTitleText(link.shortkey, link.name)"
        @shortkey="$navigateOutTo(link.url)">
        <Icon
          icon="download"
          :path="icons.download"
          is-inline/>
        <span>
            {{ link.name }}
          </span>
      </a>
<!--      <a-->
<!--        v-shortkey="['s']"-->
<!--        class="link yellow-colored"-->
<!--        :href="resumeRepoUrl"-->
<!--        target="_blank"-->
<!--        title="[S] See the LaTeX source code."-->
<!--        @shortkey="$navigateOutTo(resumeRepoUrl)">-->
<!--        <Icon-->
<!--          icon="code"-->
<!--          :path="icons.code"-->
<!--          is-inline/>-->
<!--        <span>-->
<!--            source LaTeX-->
<!--          </span>-->
<!--      </a>-->
    </div>
  </div>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import download from '@/assets/icons/download.svg'
  import code from '@/assets/icons/code.svg'

  /**
   * This command presents the introductory ASCII art.
   */
  export default {
    name: 'Introduction',
    components: {
      Icon
    },
    data () {
      return {
        resumeRepoUrl: 'https://github.com/dhruvkb/resume/',
        resumeLinks: [
          {
            name: 'résumé',
            url: 'https://www.dropbox.com/s/0a0e7ucdb9r3bmf/Resume_Xiaotian_0919.pdf?dl=0',
            shortkey: 'r' // 'r' for Résumé
          }
          // {
          //   name: 'résumé_MLE',
          //   url: `${resumeBaseUrl}/cover.pdf`,
          //   shortkey: 'c' // 'c' for Cover letter
          // },
          // {
          //   name: 'cover_letter',
          //   url: `${resumeBaseUrl}/cover.pdf`,
          //   shortkey: 'c' // 'c' for Cover letter
          // }
        ],
        icons: {
          download,
          code
        }
      }
    },
    methods: {
      resumeLinkTitleText (shortkey, name) {
        return `[${shortkey.toLocaleUpperCase()}] See my ${name} as a PDF file.`
      }
    }
  }
</script>

<style scoped lang="scss">
  @use '~@/styles/tokens/colors';
  @use '~@/styles/tokens/devices';
  @use '~@/styles/tokens/dimensions';
  @use '~@/styles/tokens/sizes';
  @use '~@/styles/tokens/weights';

  @use '~@/styles/utils/media';
  @use '~@/styles/utils/gradient-text';

  .intro {
    .ascii-art {
      @include gradient-text.gradient-text;

      display: inline-block;

      font-weight: weights.$bold;

      width: fit-content;

      margin: -#{dimensions.$line} 0 0 0;

      &.big {
        @include media.device-specific(devices.$phone) {
          display: none;
        }

        margin-right: 2ch;
      }

      &.small {
        @include media.device-specific(devices.$group-non-phone) {
          display: none;
        }
      }
    }

    .links {
      display: inline-block;

      margin-top: dimensions.$line;

      .link {
        display: inline-block;

        text-decoration: none;

        margin-right: 1ch;

        @include media.device-specific(devices.$group-non-phone) {
          display: block;

          margin-bottom: dimensions.$xs;
        }

        .icon {
          --stroke-width: 48px; // 24 / 16 * 32px
        }
      }
    }
  }
</style>
