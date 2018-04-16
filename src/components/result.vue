<template>
    <div id="result-wrapper">
      <!--<div v-show="ZDATA.name">-->
        <!--姓名：{{ZDATA.name}}-->
      <!--</div>-->
      <!--<div v-show="ZDATA.sex">-->
        <!--性别：{{ZDATA.sex}}-->
      <!--</div>-->
      <!--<div v-show="ZDATA.age">-->
        <!--年龄：{{ZDATA.age}}岁-->
      <!--</div>-->
      <!--<div v-show="ZDATA.zs">-->
        <!--主诉：{{ZDATA.zs}}-->
      <!--</div>-->
      <!--<div v-show="ZDATA.xbs">-->
        <!--现病史：{{ZDATA.xbs}}-->
      <!--</div>-->
      <!--<div v-show="ZDATA.tj">-->
        <!--体检：{{ZDATA.tj}}-->
      <!--</div>-->
      <!--<div v-show="ZDATA.fzjc">-->
        <!--辅助检查：{{ZDATA.fzjc}}-->
      <!--</div>-->
      <!--<div v-show="ZDATA.tw">体温：{{ZDATA.tw}}°C</div>-->
      <!--<div v-show="ZDATA.hx">呼吸：{{ZDATA.hx}}次/分</div>-->
      <!--<div v-show="ZDATA.xl">心率：{{ZDATA.xl}}次/分</div>-->
      <!--<div v-show="ZDATA.xy.ssy&&ZDATA.xy.szy">血压：{{ZDATA.xy.ssy}}/{{ZDATA.xy.szy}}mmHg</div>-->
      <!--<div v-show="ZDATA.xt">诊断：{{ZDATA.xy.xt}}mmol/L</div>-->
      <!--<div v-show="ZDATA.zd">-->
        <!--诊断：{{ZDATA.zd}}-->
      <!--</div>-->
      <i-input class="search-div" v-model="searchValue" placeholder="搜索">
        <i-button slot="append" icon="ios-search"></i-button>
      </i-input>
      <div class="jb-list">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aperiam, corporis culpa dicta dolorum ducimus eaque et eveniet impedit laboriosam minima omnis perspiciatis quasi, quidem quisquam sit tempore velit!
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur culpa deleniti deserunt eligendi, eos esse est et harum itaque iusto maiores officia, perspiciatis porro quam quod, repellendus tenetur veniam.
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur dicta distinctio ea, eligendi eum fugiat laborum magnam molestias mollitia non praesentium quibusdam reiciendis rem repellat suscipit vel velit vitae.
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur error esse explicabo fugit inventore ipsa maxime molestiae, quis rem sapiente sunt. Est facere iusto numquam repellat vitae? Labore, maiores!
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi assumenda atque aut earum eligendi expedita explicabo facilis impedit incidunt laboriosam nemo, officiis quibusdam quidem, quis reprehenderit ullam voluptatem. Aliquid!
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  props: {
    ZDATA: {
      type: Object
    }
  },
  created () {
    this.$post(this.API.gethistorybydate,{'usertype':'患者用户'})
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
#result-wrapper
  height calc(100% - 62px)
  height -webkit-calc(100% - 62px)
  height -moz-calc(100% - 62px)
  .jb-list
    height calc(100% - 62px)
    height -webkit-calc(100% - 62px)
    height -moz-calc(100% - 62px)
    padding 0px 10px
    margin-bottom 10px
    overflow-y auto
    word-wrap break-word
  .search-div
    padding 10px
    .ivu-input
      border 1px solid #dddee1
    .ivu-btn:focus
      box-shadow none
    .ivu-btn
      font-size 19px
      padding 2px 15px
</style>
