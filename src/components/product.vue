<template>
    <div>
                    Vuex 购物车demo
                    商品信息
                    <!-- {{shoplist}} -->
               <el-table :data="tableData"style="width: 100%">
                  <el-table-column prop="id" label="id" ></el-table-column>
                  <el-table-column prop="name" label="名称" ></el-table-column>
                  <el-table-column prop="price" label="价格" ></el-table-column>
                  <el-table-column prop="" label="操作" >
                    <template slot-scope="scope">
                      <el-button type="success" @click="addShopList(scope.row,scope.$index)">购物车</el-button>
                    </template>
                  </el-table-column>
               </el-table>

    </div>
</template>
<script>
import { mapGetters , mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
      ...mapGetters({
        tableData: 'shopList'
      })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    //   tableData: [],

    }
  },
  methods: {
    ...mapActions(['addShopList'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
