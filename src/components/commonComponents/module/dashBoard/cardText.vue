<template>
    <div :style="{display:'flex',height:'150px',backgroundColor:backgroundColor}" class="card-all" @click="clickToRoute">
        <div class="card-next">{{title}}</div>
        <div class="card-next" style="text-align:center"><li :class="cardIcon"></li></div>
    </div>
</template>
<script>
export default {
  name: 'cardText',
  props: {
    backgroundColor: {},
    title: {},
    routeTo: {
      default: ''
    },
    cardIcon: {
      default: 'el-icon-question'
    }
  },
  computed: {},

  mounted () {},

  data () {
    return {
      myChart: {}
    }
  },

  methods: {
    clickToRoute () {
      console.log(this.routeTo)
      if (this.routeTo !== '') {
        this.$router.push({ name: this.routeTo })
      }
    }
  }
}
</script>

<style scoped>
.card-all{
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-family: PingFang SC, Helvetica Neue, Hiragino Sans GB, Microsoft Yahei, WenQuanYi Micro Hei, Roboto, sans-serif;
    font-weight: 600;
    line-height: 1.33;
}
.card-all:hover{
  cursor: pointer;
}
.card-next{
    height: 100%;
    width: 50%
}
</style>
