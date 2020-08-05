<template>
  <div style="padding:24px;height:100%">
    <!-- <div class="notFoundclass" v-html="indexHtml"></div> -->
    <iframe class="notFoundclass"  frameborder="0"  src="../../../../static/404page/index.html"></iframe>
  </div>
</template>
<script>
export default {
  name: 'dashBaordIndex',
  props: {},
  components: {},
  computed: {},

  mounted () {},

  data () {
    return {}
  },

  methods: {}
}
</script>

<style scoped>
.notFoundclass{
  width: 100%;
  height: 100%;
  /* background-color: brown */
}
</style>
