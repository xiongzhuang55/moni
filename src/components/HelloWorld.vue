<template>
  <div class="bingli-wrapper">
    <div class="bingli-form" style="margin-right: 410px;overflow-y: auto;overflow-x: hidden" :style="{height: height}">
      <h3 class="text-center" style="margin: 20px 0">患者病历</h3>
      <Row class="width550">
        <Col span="8">
          <Row>
            <Col span="9">姓名：</Col>
            <Col span="12">
              <Input class="boder0" v-model="formLeft.name" clearable></Input>
            </Col>
          </Row>
        </Col>
        <Col span="8">
        <Row style="line-height: 32px">
          <Col span="6">性别：</Col>
          <Col span="12">
            <RadioGroup v-model="formLeft.sex">
              <Radio label="男"></Radio>
              <Radio label="女"></Radio>
            </RadioGroup>
          </Col>
        </Row>
        </Col>
        <Col span="8">
        <Row class="border1 age-select">
          <Col span="6" style="line-height: 32px;">年龄：</Col>
          <Col span="10">
            <i-input v-model="formLeft.age.number" @on-change="regDataAgeFn(formLeft.age.number,formLeft.age.type,regData.regAge.reg,regData.regAge.minNumber,regData.regAge.maxNumber,regData.regAge.errorInfo)">
              <i-select v-model="formLeft.age.type" slot="append" style="width: 40px">
                <i-option value="岁">岁</i-option>
                <i-option value="月">月</i-option>
                <i-option value="天">天</i-option>
              </i-select>
            </i-input>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row class="width550">
        <Col span="4">主诉：</Col>
        <Col span="20">
          <Input v-model="formLeft.zs" clearable></Input>
        </Col>
      </Row>
      <Row class="width550">
        <Col span="4">现病史：</Col>
        <Col span="20">
          <Input v-model="formLeft.xbs" type="textarea" :autosize="{ minRows: 2}" clearable></Input>
        </Col>
      </Row>
      <Row class="width550">
        <Col span="4">体检：</Col>
        <Col span="20">
          <Input v-model="formLeft.tj" type="textarea"  :autosize="{ minRows: 2}" clearable></Input>
        </Col>
      </Row>
      <Row class="width550">
        <Col span="4">辅助检查：</Col>
        <Col span="20">
          <Input v-model="formLeft.fzjc" clearable></Input>
        </Col>
      </Row>
      <Row :gutter="16" class="tizheng border1 width550" style="margin:0 auto">
        <Col span="6">
          <Input v-model="formLeft.tw" @on-change="regDataFn(formLeft.tw,regData.regTw.reg,regData.regTw.minNumber,regData.regTw.maxNumber,regData.regTw.errorInfo)">
            <span slot="prepend">体温</span>
            <span slot="append">°C</span>
          </Input>
        </Col>
        <Col span="6">
          <Input v-model="formLeft.hx" @on-change="regDataFn(formLeft.hx,regData.regHx.reg,regData.regHx.minNumber,regData.regHx.maxNumber,regData.regHx.errorInfo)">
            <span slot="prepend">呼吸</span>
            <span slot="append">次/分</span>
          </Input>
        </Col>
        <Col span="6">
          <Input v-model="formLeft.xl" @on-change="regDataFn(formLeft.xl,regData.regXl.reg,regData.regXl.minNumber,regData.regXl.maxNumber,regData.regXl.errorInfo)">
            <span slot="prepend">心率</span>
            <span slot="append">次/分</span>
          </Input>
        </Col>
        <Col span="9" class="xueya">
          <Row>
            <Col span="12">
              <Input v-model="formLeft.xy.ssy" @on-change="regDataFn(formLeft.xy.ssy,regData.regSsy.reg,regData.regSsy.minNumber,regData.regSsy.maxNumber,regData.regSsy.errorInfo)">
                <span slot="prepend">血压</span>
                <span slot="append">/</span>
              </Input>
            </Col>
            <Col span="12">
              <Input v-model="formLeft.xy.szy" @on-change="regDataFn(formLeft.xy.szy,regData.regSzy.reg,regData.regSzy.minNumber,regData.regSzy.maxNumber,regData.regSzy.errorInfo)">
                <span slot="append">mmHg</span>
              </Input>
            </Col>
          </Row>
        </Col>
        <Col span="7" style="margin-top: 5px;">
          <Input v-model="formLeft.xt" @on-change="regDataFn(formLeft.xt,regData.regAge.regXt,regData.regAge.minNumber,regData.regXt.maxNumber,regData.regXt.errorInfo)">
            <span slot="prepend">血糖</span>
            <span slot="append">mmol/L</span>
          </Input>
        </Col>
      </Row>
      <Row class="width550">
        <Col span="4">诊断：</Col>
        <Col span="20">
          <Input v-model="formLeft.zd" clearable class="boder0"></Input>
        </Col>
      </Row>
    </div>
    <div class="layout">
      <Sider :style="{position: 'absolute', top: '10px',right: '10px', height: sliderHiehgt, minWidth: '400px',backgroundColor: '#fff', boxShadow: '0 0 5px 2px #888',}">
        <b style="background-color:#ccc;display: block;padding-left: 5px">
          辅助诊疗
        </b>
        <h3 class="text-center title-wrapper">
            科凌力智能提示
          <i class="ivu-icon" :class="{'ivu-icon-arrow-up-b': !slideShow,'ivu-icon-arrow-down-b': slideShow}" @click="toggleResult()"></i>
        </h3>
        <v-result :ZDATA="formLeft"></v-result>
      </Sider>
    </div>
  </div>
</template>

<script>
  import Result from './result.vue'
  const documentHeight = document.documentElement.clientHeight - 120 + 'px';
export default {
  name: 'HelloWorld',
  components:{"v-result":Result},
  data () {
    return {
      height: documentHeight,
      sliderHiehgt: documentHeight,
      slideShow: false,
      formLeft: {
        name: '',
        sex: '',
        age: {
          number: '',
          type: '岁'
        },
        zs: '',
        xbs: '',
        tj: '',
        fzjc: '',
        tw: '',
        hx: '',
        xl: '',
        xy: {
          ssy:'',
          szy:''
        },
        xt: '',
        zd: ''
      },
      regData: {
        regAge: {
          reg: /^\+?[1-9][0-9]*$/,
          minNumber: 1,
          maxNumber: 120,
          errorInfo: '年龄为整数1-120岁'
        },
        regTw: {
          reg: /^[3-4][0-9](\.?\d{0,1})$/,
          minNumber: 30,
          maxNumber: 42,
          errorInfo: '体温输入值必须在30-42之间的数值，保留至1位小数位'
        },
        regHx: {
          reg: /^\d{1,2}$/,
          minNumber: 1,
          maxNumber: 50,
          errorInfo: '呼吸输入值必须在1-50之间的整数'
        },
        regXl: {
          reg: /^\d{1,3}$/,
          minNumber: 1,
          maxNumber: 200,
          errorInfo: '心率输入值必须在1-200之间的整数'
        },
        regSsy: {
          reg: /^\d{0,3}$/,
          minNumber: 1,
          maxNumber: 250,
          errorInfo: '收缩压输入值必须在1-250之间的整数'
        },
        regSzy: {
          reg: /^\d{0,3}$/,
          minNumber: 1,
          maxNumber: 200,
          errorInfo: '舒张压输入值必须在1-200之间的整数'
        },
        regXt: {
          reg: /^(\d|([1-9]\d{1}))(\.\d{0,1})?$/,
          minNumber: 1,
          maxNumber: 99,
          errorInfo: '血糖输入值必须在1-99之间的数，保留至小数点一位'
        }
      }
    }
  },
  created() {

  },
  methods: {
    regDataFn (_data, _reg, _minNumber, _maxNumber, _errorInfo) {
      let reg = _reg;
      if(_data < _minNumber || _data > _maxNumber || !reg.test(_data)){
        this.$Message.error(_errorInfo);
      }
    },
    regDataAgeFn (_data, dataType, _reg, _minNumber, _maxNumber, _errorInfo) {
      let reg = _reg;
      if (dataType === '岁'){
        if(_data < _minNumber || _data > _maxNumber || !reg.test(_data)){
          this.$Message.error(_errorInfo);
        }
      }else if (dataType === '月'){
        if(_data < 0 || _data > 12 || !reg.test(_data)){
          this.$Message.error('年龄为整数1-12月');
        }
      }else{
        if(_data < 1 || _data > 30 || !reg.test(_data)){
          this.$Message.error('年龄为整数1-30天');
        }
      }

    },
    toggleResult () {
      this.slideShow = !this.slideShow;
      this.sliderHiehgt = this.sliderHiehgt === 'auto'?document.documentElement.clientHeight - 120 + 'px':'auto'
      $('#result-wrapper').slideToggle()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.bingli-wrapper
  .ivu-row
    margin-bottom 10px
    .ivu-col-span-4
    .ivu-col-span-9
      width 80px
      line-height 32px
    &.width550
      width 550px
      margin 10px auto
    .border1
      .ivu-input
        border 1px solid #dddee1 !important
        border-top-left-radius 6px
        border-bottom-left-radius 6px
        text-align center
      &.age-select
        .ivu-select-item
          padding 7px 12px
  .tizheng
    .ivu-input
      border 1px solid #dddee1
      border-top-left-radius 0px
      border-bottom-left-radius 0px
      text-align center
    .xueya
      margin-top  5px
    .ivu-col-span-9
      width 37.5%
      .ivu-row
        .ivu-col
          padding 0px !important
        .ivu-col:first-child
          .ivu-input-wrapper
            .ivu-input-group-append
              border-radius 0 !important
        .ivu-col:last-child
          .ivu-input-wrapper
            .ivu-input
              border-radius 0 !important
.ivu-input
  border 0px
  border-bottom 1px solid #dddee1
  border-radius 0
  &:focus
    box-shadow none
.title-wrapper
  position relative
  height 40px
  line-height 40px
  background-color #F2F3F5
  i
    position absolute
    right 10px
    top 13px
    cursor default
</style>
