<template>
    <div class="maxbox">
        <div class="item">
            <h1>喜欢</h1>
            <h3>让我们从这里开始</h3>
            <h6>追寻属于你的爱,追寻属于你的爱,追寻属于你的爱,追寻属于你的爱,追寻属于你的爱</h6>
        </div>
        <div class="item">
            <div class="abulm">
                <img src="../assets/image/moutain.jpg" alt="">
            </div>
        </div>
        <div class="item">
            <div class="abulm">
                <img src="../assets/image/moutain.jpg" alt="">
            </div>
        </div>
        <div class="item">
            <h1>喜欢</h1>
            <h3>让我们从这里开始</h3>
            <h6>追寻属于你的爱,追寻属于你的爱,追寻属于你的爱,追寻属于你的爱,追寻属于你的爱</h6>
        </div>
    </div>
</template> 
<script lang="ts" setup>
</script>

<style scoped lang="less">
.maxbox {
    width: 100%;
    height: 100vh;
    margin: 60px auto;
    display: flex;
    flex-wrap: wrap;
    // background-color: #f55;
    justify-content: space-between;
    align-items: start;

    .item {
        width: 40%;
        height: 45%;
        margin: 15px;
        // background-color: #333;


        .abulm {
            height: 100%;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

h1 {
    font-size: 40px;
    font-weight: 700;
    color: #f55;
}

h3 {
    margin-top: 24px;
    font-size: 30px;
    font-weight: 700;

}

h6 {
    font-size: 20px;
    margin-top: 24px;
    line-height: 26px;

}
</style>