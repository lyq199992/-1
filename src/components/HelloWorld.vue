<template>
  <div class="hello">
    <!-- <product></product>
    <cart></cart>
    <info></info> -->
  </div>
</template>

<script>
import product from '../components/product'
import cart from '../components/cart'
import info from '../components/info'
export default {
  components: {
    product,info,cart
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [
        {
          id: 11,
          name: '鱼香肉丝',
          price: 12,
        },
        {
          id: 22,
          name: '宫保鸡丁',
          price: 14,
        },
        {
          id: 34,
          name: '土豆丝',
          price: 10,
        },
        {
          id: 47,
          name: '米饭',
          price: 2,
        },
      ],

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
