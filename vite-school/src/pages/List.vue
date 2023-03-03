<template>
    <div class="list">
        <div class="select">
            <el-input type="text" placeholder="搜索" />
        </div>
        <div class="table">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>阿狗 <i class="icon icon-xihuan"></i> 好</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
        </div>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="60" class="mt-4" />
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
.list {
    width: 80%;
    height: 100%;
    margin: 0 auto;

    .select {
        width: 100%;
        height: 30px;

        input {
            width: 100%;
            height: 100%;
        }
    }

    .table {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .box-card {
            margin: 5px 10px;
            width: 45%;
            background-color: rgb(255, 235, 192);

            :deep(.el-card__header) {
                border-bottom: 1px dashed #999;
            }

            .card-header {
                display: flex;
                align-items: center;
                justify-content: space-around;

                i {
                    color: pink;
                }
            }
        }

        .text {
            font-size: 14px;
        }

        .item {
            margin-bottom: 18px;
        }
    }
}

.pagination {
    position: relative;
    margin-top: 30px;
    height: 60px;

    .el-pagination {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>