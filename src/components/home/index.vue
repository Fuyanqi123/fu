<template>
    <div class="index">
        <header>
            <p>学生管理系统</p>
            <p></p>
            <p><button @click="signout" style="border: 0;outline: none;background: #0DACDD;font-size: 20px;color: white;">退出</button></p>
        </header>
        <section> 
            <div class="left">
                <ul>
                    <li  v-for="item in data" :key="item.id" @click="showbtn(item.id)">
						<router-link :to="item.path" :class="{colorWord:item.status}">{{item.name}}</router-link>
					</li>
                </ul>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </section>
        <footer>
            <p>有问题请访问www.baidu.com</p>
            <p>所有解释权有本官方所有</p>
        </footer>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data:[
                    {"name":"员工信息","status":true,"path":"/xinxi","id":1},
                    {"name":"更多信息","status":false,"path":"/guanli","id":2},
                ],
            }
        },
        created() {
        },
        methods:{
            showbtn(id){
                this.data.forEach((item)=>{
                    item.status=false;
                    if(item.id==id){
                        item.status=true;
                    }else{
                        item.status=false;
                    }
                })
            },
			signout(){
				localStorage.clear()
				window.location.reload()
			}
        }
    }
    
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #0dacdd;
    display: flex;
}
header p:nth-child(1) {
    padding-left: 50px;
    color: white;
    font-size: 25px;
}
header p:nth-child(3) {
    padding-right: 50px;
    color: black;
    font-size: 20px;
}
header p:nth-child(2) {
    flex: 1;
}
section {
    flex: 1;
    display: flex;
}
section .left {
    width: 200px;
    background: #F5F5F6;
}

section .left ul{
    width: 100%;height: 100%;
}

section .left ul li{
    text-align: center;
    line-height: 40px;
}

section .left ul li a{
    text-decoration: none;
}

section .right {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
}
footer {
    background: black;
    width: 100%;
    height: 60px;
    color: white;
    text-align: center;
    font-size: 12px;
    padding-top: 10px;
    box-sizing: border-box;
}
.colorWord{color: orange;}
</style>
