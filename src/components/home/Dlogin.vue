<template>
    <div>
         <el-dialog title="添加" :visible="true" width="30%">
             <el-form :model="ruleForm"  ref="ruleForm" label-width="100px">
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                   <el-form-item label="年龄" prop="age">
                    <el-input v-model="ruleForm.age"></el-input>
                  </el-form-item>
                   <el-form-item label="性别" prop="sex">
                    <el-input v-model="ruleForm.sex"></el-input>
                  </el-form-item>
             </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="handlecacel">取 消</el-button>
            <el-button type="primary" @click="suer">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export default{
        props:['dialogVisible','status','arr'],
        data(){
            return{ 
                ruleForm:{
                    name:"",
                    age:"",
                    sex:""
                }
            }
        },
        created() {
          if(this.status==false){
              this.ruleForm={...this.arr}
          }  
        },
        methods:{
            handlecacel(){
                this.close()
            },
            suer(){
                this.$refs.ruleForm.validate((valid) => {
                      if (valid) {
                          if(this.status){
                              this.$store.commit('add',{obj:this.ruleForm})
                          }else{
                              this.$store.dispatch('edit',{obj:this.ruleForm})
                              this.$emit('changes')
                          }
                        this.close()
                      } else {
                        console.log('error submit!!');
                        return false;
                      }
                });
            },
            close(){
                this.$emit('update:dialogVisible',false)
            },
            
        }
    }
</script>

<style>
</style>
