import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from "vuex"


const store =  createStore({
    state:{
        modal:false,
        modalActive:false,
        invoiceData:[]
    },
    mutations:{
        TOGGLE_INVOICE(state){
            state.modal = !state.modal
        },
            TOGGLE_Modal(state){
                state.modalActive = !state.modalActive
            }
    },
    actions:{
       async GET_INVOICES(){

       }
    },
    modules:{}
})

// Initialize Firebase
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
