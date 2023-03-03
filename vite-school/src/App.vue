<template>
    <Header></Header>
    <div class="box">
        <router-view></router-view>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import('./components/Header.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
</script>

<style lang="less"> * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
     height: 100%;
 }

 #app {
     position: relative;
     width: 100%;
     height: 100%;
     display: flex;
     /* 容器为flex布局 */
     flex-direction: column;
     /* 方向为纵向，保持正常的从上到下文档流 */
 }

 .box {
     width: 80%;
     height: 100vh;
     margin: 60px auto;
     flex: 1
 }

 .footer {
     width: 100%;
     height: 100px;
     background-color: #a6a6a6;
     margin-top: auto;
     flex: 0 0 auto;
 }
</style>