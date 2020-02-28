import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

const routes = [{
    name: "login",
    path: "/",
    component: () => import("../components/login/index")
},
{
    name: "index",
    path: "/index",
    component: () => import("../components/home/index"),
    meta:{
        requiredAuth:true
    },
    children:[
        {name:"xinxi",path:"/xinxi",component:()=>import('../components/home/xinxi')},
        {name:"guanli",path:"/guanli",component:()=>import('../components/home/guanli')},
    ],
    redirect:"/xinxi"
}]

const vueRouter = new router({
    routes
})
vueRouter.beforeEach((to,from,next)=>{
    var isrequired=to.matched.some(route=>route.meta.requiredAuth)
    if(isrequired||!to.name){
        if(!localStorage.getItem('username')){
            next({name:"login"})
        }else{
            if(!to.name){
                next({name:"index"})
            }else{
                next()
            }
        }
    }else{
        if(to.name=='login'&&localStorage.getItem('username')){
            next({name:"index"})
        }else{
            next()
        }
    }
})
export default vueRouter
