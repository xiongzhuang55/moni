<template>
  <div id="app">
    <div class="layout">
      <Header :style="{position: 'fixed', height: '100px', zIndex: '99', top: 0,width:'100%', overflow: 'auto',background: '#1c2438', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <h1 style="text-align: center;line-height: 100px;color: #fff">烟台市第一人民医院信息管理系统</h1>
      </Header>
      <Sider :style="{position: 'fixed',top: '100px', zIndex: '99', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu active-name="1-1" theme="dark" width="auto" :open-names="['0']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              医疗文书
            </template>
            <MenuItem name="1-1">病案首页</MenuItem>
            <MenuItem name="1-2">医嘱录入</MenuItem>
            <MenuItem name="1-3">入院记录</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              高拍图像
            </template>
            <!--<MenuItem name="2-1">Option 1</MenuItem>-->
            <!--<MenuItem name="2-2">Option 2</MenuItem>-->
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              临床路径
            </template>
            <!--<MenuItem name="3-1">Option 1</MenuItem>-->
            <!--<MenuItem name="3-2">Option 2</MenuItem>-->
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{marginLeft: '200px',marginTop:'100px',height: height}">
        <Content>
          <!--<Breadcrumb :style="{margin: '16px 0'}">-->
            <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
          <!--</Breadcrumb>-->
          <Card>
            <div>
              <router-view/>
            </div>
          </Card>
        </Content>
      </Layout>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      height:''
    }
  },
  created() {
    this.height = document.documentElement.clientHeight - 100 + 'px'
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html
    overflow hidden
#app
  overflow hidden
  font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
  min-width 1200px
.text-center
  text-align center
textarea
  resize none
</style>
