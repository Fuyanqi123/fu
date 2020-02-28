<template>
    <div class="login">
        <div class="box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
        </div>
       
    </div>
</template>

<script>
    import {login} from '../../api/login.js'
    export default{
        data(){
            return{
                ruleForm:{
                    username:"",
                    pwd:""
                },
                rules: {
                  username: { required: true, message: '请输入活动名称'},
                  pwd: { min: 3, max: 8, message: '长度在 3 到 5 个字符'}
                }
            }
        },
        methods:{
             submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    login(this.ruleForm).then((res)=>{
                        localStorage.setItem('username',this.ruleForm.username);
                        this.$router.push({name:"index"})
                    }).catch((error)=>{
                        
                    })
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
              },
              resetForm(formName) {
                this.$refs[formName].resetFields();
              }
        }
    }
</script>

<style scoped>
    .login{width: 100%;height: 100%;display: flex;background-image: linear-gradient(#f5f5f6,#666);}
    .box{width: 300px;height: 200px;margin: auto;}
</style>
