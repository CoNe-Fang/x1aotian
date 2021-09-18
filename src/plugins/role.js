/**
 * Ensures that the array of roles is accessible in every component.
 */
export default {
  install (Vue, options) {
    Vue.prototype.$roles = [
      'uw_student',
      's_d_e',
      'm_l_e'
    ]

    Vue.prototype.$works = [
      'uw_work',
      'sde_work',
      'mle_work'
    ]

    Vue.prototype.$getRole = function (index) {
      return this.$roles[this.$modulo(index, this.$roles.length)]
    }

    Vue.prototype.$getWork = function (index) {
      return this.$works[this.$modulo(index, this.$works.length)]
    }
  }
}
