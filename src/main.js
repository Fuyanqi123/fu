import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI,{Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
