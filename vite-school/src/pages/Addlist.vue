<template>
    <div class="add">
        <el-form :model="user" label-width="120px" ref="ruleFormRef" :rules="rules">
            <el-form-item label="表白者姓名" prop="confessorName">
                <el-input v-model="user.confessorName"></el-input>
            </el-form-item>
            <el-form-item label="表白者性别" prop="confessorRegion">
                <el-select v-model="user.confessorRegion">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                    <el-option label="保密" value="保密" />
                </el-select>
            </el-form-item>
            <el-form-item label="被表白者姓名" prop="professedName">
                <el-input v-model="user.professedName"></el-input>
            </el-form-item>
            <el-form-item label="被表白者性别" prop="professedRegion">
                <el-select v-model="user.confessorRegion">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                    <el-option label="保密" value="保密" />
                </el-select>
            </el-form-item>
            <!-- 图片 -->
            
            <el-form-item label="表白内容" prop="description">
                <el-input v-model="user.description" type="textarea" />
            </el-form-item>
            <div class="switch">
                <el-form-item label="是否邮箱通知">
                    <el-switch v-model="user.delivery" />
                </el-form-item>
                <el-form-item label="是否匿名">
                    <el-switch v-model="user.anoymity" />
                </el-form-item>

            </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">发布</el-button>
                <el-button @click="resetForm(ruleFormRef)"> 清空 </el-button>
            </el-form-item>
        </el-form>

    </div>
</template >

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus'
import { FormRules, UserType } from '../utils/type'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

//表白信息
const user = reactive<UserType>({
    confessorName: '',
    confessorRegion: '保密',
    professedName: '',
    professedRegion: '保密',
    description: '',
    delivery: false,
    anoymity: false
})
//表单验证规则
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
    confessorName: [
        { required: true, message: "表白者姓名不能为空", trigger: 'change' },
        { min: 1, max: 8, message: '姓名在1-8个字符之间', trigger: 'blur' }
    ],
    confessorRegion: [
        { required: true, trigger: 'blur' }
    ],
    professedName: [
        { required: true, message: "表白者姓名不能为空", trigger: 'change' },
        { min: 1, max: 8, message: '姓名在1-8个字符之间', trigger: 'blur' }
    ],
    description: [
        { required: true, message: "表白内容不能为空", trigger: 'change' },
        { min: 20, message: '表白内容应该在20个字以上', trigger: 'blur' }
    ]
})
//表单提交验证
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

//表单重置
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<style lang="less" scoped>
.add {
    width: 40%;
    height: 100%;
    margin: 0 auto;

    .switch {
        display: flex;
    }
}
</style>
