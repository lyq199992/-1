<template>
    <div>login

        <el-button type="primary" @click="goto">登录</el-button>
        <el-button type="primary" @click="goto1">注册</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        goto(){
            this.$router.push({ path: '/about' })
        },
        goto1(){
            this.$router.push({ path: '/detail' })
        }
    }
}
</script>