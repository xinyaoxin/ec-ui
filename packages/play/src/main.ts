import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElComp from 'el-comp'

console.log(ElComp)

createApp(App).use(ElComp).mount('#app')
