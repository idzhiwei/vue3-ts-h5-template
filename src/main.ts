import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { config } from '@/config'
// 引入全局样式
import '@/assets/css/index.scss'
// 全局引入按需引入UI库 vant
import { vantPlugins } from './plugins/vant'
import { Lazyload } from 'vant';

const app = createApp(App)
app.use(vantPlugins)
app.use(Lazyload);
app.use(store)
app.use(router)
app.mount('#app')
