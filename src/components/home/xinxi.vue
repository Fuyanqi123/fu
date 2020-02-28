<template>
    <div class="xinxi">
        <div class="tou">
            <el-button type="primary" @click="handleADD">添加</el-button>
            <el-form :inline="true" :model="formInline" style="float: right;">
              <el-form-item>
                <el-input v-model="formInline.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
        </div>
        <div class="zhong">
          <el-table :data="tableData" style="width: 100%;">
              <el-table-column
              prop="name"
              label="姓名"
              >
            </el-table-column>
             <el-table-column
              prop="age"
              label="年龄"
              >
            </el-table-column>
             <el-table-column
              prop="sex"
              label="性别"
              >
            </el-table-column>
            <el-table-column
              label="操作"
             >
              <template slot-scope="scope">
                <el-button @click="handleDelete(scope,tableData)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small" @click="handleEdit(scope,tableData)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <Dlogin v-if="dialogVisible" :dialogVisible.sync="dialogVisible" :arr="arr" :status="status" @changes="changes"></Dlogin>
    </div>
</template>

<script>
    import Dlogin from './Dlogin'
export default {
    components:{
        Dlogin
    },
    data() {
        return {
            dialogVisible:false,
            tableData:[],
            status:true,
            arr:[],
            formInline:{
                name:""
            }
        };
    },
    created() {
       this.search()
    },
    methods:{
        handleDelete(index,row){
            this.$store.commit('del',index.row)
        },
        handleADD(){
            this.dialogVisible=true
            this.status=true
        },
        handleEdit(scope){
            this.dialogVisible=true
            this.status=false
            this.arr=scope.row
        },
        changes(){
            this.tableData=this.$store.state.datas
        },
        onSubmit(){
           this.search(this.formInline) 
        },
        search(formInline){
             this.$store.dispatch('getData',formInline).then((res)=>{
                this.tableData=res
            })
        }
    }
};
</script>

<style scoped>
.xinxi {
    width: 100%;
    height: 100%;
}
.tou {
    width: 100%;
    height: 40px;
}
.tou button {
    height: 100%;
}
.zhong {
    width: 100%;
    height: auto;
}
.el-table__body-wrapper table{
	width: 100%;
	text-align: center;
}
.el-table__body{
	width: 100%;
}
</style>
