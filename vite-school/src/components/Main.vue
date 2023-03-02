<template>
    <div class="main">
        <div class="left">
            <div class="section">
                <h1>表白</h1>
                <h3>让我们从这里开始</h3>
                <h6>在这里,你可以爱自己喜欢的人,表白你喜欢的人,无忧无虑.在这里你可以爱自己喜欢的人,表白你喜欢的人,无忧无虑</h6>
            </div>
        </div>
        <div class="right">
            <div class="aside">
                <div class="album"><img src="../assets/image/moutain.jpg" alt=""></div>
                <div class="text">
                    <h3>想见山,看见雨</h3>
                    <h3>想见山,看见雨,想</h3>
                    <h3>想见山,看见雨想念</h3>
                    <h3>想见山,看见雨想念你</h3>
                    <h3>想见山,看见雨,想念你</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.main {
    width: 80%;
    height: 50vh;
    margin: 60px auto 0 auto;
    display: flex;

    .left {
        flex: 1;

        .section {
            width: 100%;
            height: 100%;

            h1 {
                font-size: 60px;
                font-weight: 700;
                color: #f55;
            }

            h3 {
                margin-top: 24px;
                font-size: 30px;
                font-weight: 700;
            }

            h6 {
                margin-top: 20px;
                font-size: 20px;
                letter-spacing: 1px;
                line-height: 40px;
            }
        }
    }

    .right {
        flex: 1;
        margin-left: 20px;

        .aside {
            width: 100%;
            height: 100%;
            display: flex;

            .album {
                flex: 2;

                img {
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 1/1;
                }
            }

            .text {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 15px;

                h3 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #999;
                }
            }

        }
    }
}
</style>