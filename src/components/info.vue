<template>
    <div style="padding-left:20px;">
        <div><span>总数{{sum}}</span><span>总价{{sumMoney}}</span>
        <span><el-button type="danger" @click="clearCart">清空购物车</el-button></span></div>
        <div></div>
        <div></div>
    </div>

</template>

<script>

import { mapGetters} from 'vuex'
export default {
    data(){
        return {
            shopNum: 13,
            shopSum: 20,
            num: 2
        }
    },
    methods: {
        clearCart(){
            this.$store.dispatch('clearCart');
        },
    },
    computed: {
        ...mapGetters({
            tableData: 'shopList',
            sum: 'sum',
            sumMoney: 'sumMoney'
        })
    },
}


</script>