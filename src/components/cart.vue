<template>
    <div style="margin-top: 50px" class='all'>
         <span class='shop'>已选商品</span>
               <el-table :data="added"style="width: 100%">
                  <el-table-column prop="id" label="id" ></el-table-column>
                  <el-table-column prop="name" label="名称" ></el-table-column>
                  <el-table-column prop="price" label="价格" ></el-table-column>
                  <el-table-column prop="" label="操作" >
                    <template slot-scope="scope">
                      <el-button type="success">购物车</el-button>
                    </template>
                  </el-table-column>
               </el-table>
    </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // data: [],
      // added: []
    }
  },
   computed: {
        ...mapGetters({
            added: 'added'
        })
    },
}
</script>

<style lang='scss' scoped>
  
</style>