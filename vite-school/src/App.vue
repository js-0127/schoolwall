<template>
    <div class="box">
        <Header></Header>
        <Main></Main>
        <Banner></Banner>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import('./components/Header.vue'))
const Main = defineAsyncComponent(() => import('./components/Main.vue'))
const Banner = defineAsyncComponent(() => import('./components/Banner.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
</script>

<style lang="less"> * {
     margin: 0;
     padding: 0;
 }

 #app {
     position: relative;
     width: 100%;
     height: 100%;

     .box {
         width: 100%;
         height: 90vh;
         margin: 0 auto;
     }

 }
</style>