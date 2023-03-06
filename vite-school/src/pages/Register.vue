<template>
    <div class="register">
        <div class="form-container">
            <el-form class="form" label-width="70px" :rules="rules" :model="person" ref="ruleFormRef">
                <el-form-item label="用户名" prop="name">
                    <el-input type="name" placeholder="请输入用户名" v-model="person.name" />
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="person.password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="email" placeholder="请输入邮箱" v-model="person.email" />
                </el-form-item>
                <el-form-item label="确认密码" prop="secondpass">
                    <el-input type="password" placeholder="请确认密码" v-model="person.secondpass" />
                </el-form-item>
                <el-form-item>
                    <el-button color="#FBEAFF" @click="handleForm(ruleFormRef)">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { RegisterType, RulesType } from '../utils/type'

//存放用户注册信息
const person = reactive<RegisterType>({
    name: '',
    password: '',
    email: '',
    secondpass: '',
    identify: ''
})
//两次密码校验
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请重新输入密码'))
    } else if (value !== person.password) {
        callback(new Error("两次密码不一致"))
    } else {
        callback()
    }
}
//表单校验
const rules = reactive<RulesType>({
    name: [
        { required: true, message: "用户名不能为空", trigger: 'change' },
        { min: 2, max: 16, message: '用户名应为2-16个字符之间', trigger: 'blur' }
    ],
    email: [
        { type: 'email', required: true, message: "邮箱格式不正确", trigger: 'blur' },
    ],
    password: [
        { required: true, message: "密码不能为空", trigger: 'change' },
        { min: 6, max: 16, message: '密码应为6-16个字符之间', trigger: 'blur' }
    ],
    secondpass: [
        { validator: validatePass2, trigger: 'blur' }
    ]
})
//注册提交校验

const ruleFormRef = ref<FormInstance>()
const handleForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log(person)

        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>

<style scoped>
.register {
    width: 40%;
    height: 100%;
    margin: 0 auto;

}
</style>