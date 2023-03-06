<template>
    <div class="add">
        <el-form label-width="120px" ref="ruleFormRef">
            <el-form-item label="用户名" prop="confessorName">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="professedName">
                <el-input type="password"></el-input>
            </el-form-item>
            <!-- 图片 -->
            <el-form-item>
                <el-button type="primary">登录</el-button>
                <el-button><router-link to="/register">注册</router-link></el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.add {
    width: 40%;
    height: 100%;
    margin: 0 auto;

}
</style>