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
      <i-input class="search-div" v-model="searchValue" placeholder="首拼搜索查询疾病或西药">
        <i-button slot="append" icon="ios-search"></i-button>
      </i-input>
      <div class="jb-list">
        <div v-if="!searchValue" v-show="ZDATA.zs">
          <ul class="jb-list-content" v-if="getSearchJbList.length!=0">
            <li v-show="index<searchJbListLength"  v-for="(item,index) in getSearchJbList" :key="index">
              <div class="flex-content">
                <Checkbox size="large">
                  <span class="title">{{index+1}}.{{item.name}}</span>
                </Checkbox>
                <i-circle :percent="item.score" :size="30">
                  <span class="demo-circle-inner" style="font-size:12px">{{item.score}}%</span>
                </i-circle>
                <span v-show="item.specialDiseaseType!=-1" class="special-disease" :class="classMap[item.specialDiseaseType]"></span>
                <i class="info" v-if="item.info.length!=0" @click="showInfo(item.name,item.info)"></i>
              </div>
              <div class="yy-content">
                <Icon type="plus"></Icon>：
                <span v-for="ite of item.yang"
                      :class="{changeColor: ZDATA.zs.indexOf(ite) == -1?false:true }">{{ite}}</span>
              </div>
              <div class="yy-content">
                <Icon type="minus"></Icon>：
                <span v-for="ite of item.yin"
                      :class="{changeColor: ZDATA.zs.indexOf(ite) == -1?false:true }">{{ite}}</span>
              </div>
            </li>
            <i-button @click="loadList" v-show="searchJbList.length > 3&&searchJbListLength == 4" type="primary">加载更多</i-button>
          </ul>
          <div v-else class="list-placeholder">没找到数据</div>
        </div>
        <div v-else>
          <ul v-if="getSearchYpList.length!=0" class="jb-list-content">
            <li v-for="(item, index) in getSearchYpList">
              <div class="flex-content">
                <Checkbox>
                  <span class="title">{{item.name}}</span>
                </Checkbox>
                <i class="info" v-if="item.info" @click="showInfo(item.name,item.info)"></i>
              </div>
            </li>
          </ul>
          <div v-else class="list-placeholder">没找到数据</div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="infoShow" class="info-content">
              <span class="close-info" @click="infoShow = false">
                <Icon type="close-round"></Icon>
              </span>
          <div class="info-text">
            <h3 class="text-center">{{infoContent.name}}</h3>
            <div class="info-textDiv">
              <Card :bordered="false" v-for="(item, index) in infoContent.content" :key="index">
                <p slot="title">{{item.title}}</p>
                <p>{{item.text}}</p>
              </Card>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
  import testData from '../axios/testData'
export default {
  data () {
    return {
      searchValue: "",
      infoShow: false,
      infoContent: {
        "name": "",
        "content": ""
      },
      classMap:["infect"],
      searchJbListLength: 4,
      searchJbList:testData.searchJbList,
      searchYpList:testData.searchYpList
    }
  },
  props: {
    ZDATA: {
      type: Object
    }
  },
  computed: {
    getSearchJbList () {
      let data = [];
      this.searchJbListLength = 4;
      this.searchJbList.map(obj => {
        if (obj.keyword.indexOf(this.ZDATA.zs) != -1){
          data.push(obj);
        }
      });
      return data;
    },
    getSearchYpList () {
      let data = [];
      this.searchYpList.map(obj => {
        if (obj.name.indexOf(this.searchValue) != -1){
          data.push(obj);
        }
      });
      return data;
    }
  },
  methods: {
    showInfo (name,info){
      this.infoShow = true;
      this.infoContent.name = name;
      this.infoContent.content = info;
    },
    loadList () {
      this.searchJbListLength = this.searchJbList.length
    }
  },
  created () {
//    this.$post(this.API.gethistorybydate,{'usertype':'患者用户'})
//      .then(data => {
//        console.log(data)
//      })
//      .catch(error => {
//        console.log(error)
//      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";
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
    .jb-list-content
      li
        position relative
        padding 5px
        border-bottom 1px solid #dddee1
        .flex-content
          display flex
          align-items center
          .title
            padding 5px 0px
            font-size 15px
            font-weight 600
          .ivu-chart-circle
            margin-left 10px
          .special-disease
            width 16px
            height 16px
            margin-left 10px
            &.infect
              bg-image('../assets/infect')
          i.info
            display block
            width 25px
            height 25px
            position absolute
            top 5px
            right 5px
            background url('../assets/BookBig@2x.png') no-repeat center
            background-size 100%
            cursor pointer
        .yy-content
          span
            display inline-block
            padding 5px 10px 5px 0
            &.changeColor
              color #2AB2FF
      .ivu-btn-primary
        display block
        margin 5px auto
    .list-placeholder
      margin 10px 0px;
      text-align center
      color #d0aee1
  .info-content
    position absolute
    top 0
    left 0
    bottom 0px
    right 0
    z-index 99999
    background-color #eee
    &.fade-enter-active, .fade-leave-active
      transition opacity .5s
    &fade-enter, .fade-leave-to
      opacity 0
    .info-text
      position relative
      height 100%
      padding 10px
      h3
        padding 5px 0
      .info-textDiv
        position absolute
        top 40px
        bottom 10px
        left 10px
        right 0
        overflow-y auto
        .ivu-card
          margin 10px 0
    .close-info
      position absolute
      top 5px
      right 5px
      z-index 99
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
