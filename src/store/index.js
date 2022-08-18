import {createStore} from "vuex"


export default createStore({
    state:{
        invoicemodal :null
    },
    mutations:{
        TOGGLE_INVOICE(state){
            state.invoicemodal = !state.invoicemodal
        }

    },
    actions:{},
    modules:{}
})