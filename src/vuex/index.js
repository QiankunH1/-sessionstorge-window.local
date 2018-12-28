import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        // userinfo:null,
        // meta:"",
        // token: ''
        code:"",
        openid:"",
        uid:"",
        orderInfo:"",
        rows:""
    },
    mutations:{
        'CHANGE_code'(state,payload){
            state.code = payload
        },
        'CHANGE_rows'(state,payload){
            state.rows = payload
        },
        'CHANGE_openid'(state,payload){
            state.openid = payload
        },
        'CHANGE_uid'(state,payload){
            state.uid = payload
        },
        'CHANGE_orderInfo'(state,payload){
            state.orderInfo = payload
        },
        // // 'GET_meta'(state,payload){
        // //     state.meta = payload
        // // },
        // 'getmeta'(state,payload){
        //     state.meta = payload
        // },
        // 'CHANGE_TOKEN'(state, token){
        //     state.token = token
        // }

    },actions:{

    },
    plugins: [createPersistedState({
        storage: {
            getItem: key =>sessionStorage.getItem(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
            sessionStorage.setItem(key, value),
            removeItem: key =>sessionStorage.removeItem(key),
          },
    })],

})