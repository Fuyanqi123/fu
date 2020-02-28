import Vue from 'vue'
import Vuex from 'vuex'
import {datajson} from '../api/login.js'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        datas:[]
    },
    getters:{
        
    },
    mutations:{
        setData(state,datas){
            state.datas=datas
        },
        del(state,user){
            for(var i=0;i<state.datas.length;i++){
                if(state.datas[i].id==user.id){
                  state.datas.splice(i,1)
                }
            }
        },
        add(state,{obj}){
            if(state.datas.length==0){
                obj.id=0
            }else{
                var id=state.datas[state.datas.length-1].id
                obj.id=id+=1
            }
            state.datas.push(obj)
        }
    },
    actions:{
        async getData({commit},formInline){
            var arr=await datajson()
            var arrs=arr.data.data
            if(formInline){
                var getSearch=arrs.filter(item=>item.name.indexOf(formInline.name)!=-1)
                commit("setData",arrs)
                return getSearch
            }else{
                commit("setData",arrs)
                return arrs
            }
        },
        edit({state},user){
            var arr=state.datas.map((item)=>{
                if(item.id==user.obj.id){
                    item=user.obj
                }
                return item
            })
            state.datas=arr
        }
    }
})