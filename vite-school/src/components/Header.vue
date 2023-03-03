<template>
    <div class="container">
        <div class="tab">
            <div class="favicon">
                <router-link to="/">
                    <img src="../assets/image/fvicon.png" alt="">
                </router-link>
            </div>
            <div class="menu">
                <ul>
                    <li><router-link to="/" exact><i class="iconfont icon-home">主页</i></router-link>
                    </li>
                    <li><router-link to="/list"><i class="iconfont icon-24gf-playlistHeart3">表白墙</i></router-link></li>
                    <li><router-link to="/add"><i class="iconfont icon-favl">我要表白</i> </router-link>
                    </li>
                    <li> <router-link to="/help"><i class="iconfont icon-bangzhu">帮助</i></router-link>
                    </li>
                    <li>
                        <router-link to="/login" class="login">登录</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.container {
    margin: 0 auto;
    width: 80%;
    height: 25vh;
    // background-color: rgba(0, 0, 0, .3);
}

.container .tab {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 30px;

    .favicon {
        margin-top: 10px;
        flex: 1;
        height: 80%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .menu {
        flex: 3;

        ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            // background-color: #333;

            li {
                text-align: center;
                // background-color: #ff5
                width: 80%;
                line-height: 25vh;
                padding: 0 10px;

                .router-link-active {
                    i {
                        color: #f55;
                    }
                }

                i {
                    font-size: 25px;
                    font-weight: 700;
                    color: #000;
                    white-space: nowrap;
                    letter-spacing: 2px;
                }
            }

        }
    }
}

.container .tab .menu ul li:last-child {
    position: relative;

    .login {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #666;
        color: #000;
        width: 30%;
        height: 30%;
        border-radius: 50% 50%;
        text-align: center;
        line-height: 50px;
    }
}
</style>