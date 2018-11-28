import Vue from "vue"
import axios from "axios"
import Qs from "qs"
import router from "./router"

let baseUrl = '';
let headers = {};
const fs  = new Vue()
const AXIOS = axios.create({
    baseURL: baseUrl,
    headers: headers,
    withCredentials: false
})
AXIOS.interceptors.request.use(config=>{
    if(config.data){
        Object.keys(config.data).forEach((key)=>{
            if ((typeof config.data[key]) == "object"){
                config.data[key] = JSON.stringify(config.data[key])
            }
        })
        config.data = Qs.stringify(config.data)
    }
    return config;
},err=>{
    return err;
})
AXIOS.interceptors.response.use(response=>{
    if(response.data.code == 200){
        return response.data
    }else{
        fs.$Message.warning(response.data.message)
        if (response.data.code == 401){
            router.push({name: "login"})
        }
    }
},err=>{
    fs.$Message.warning("服务器错误")
    return Promise.reject(err)
})

export default AXIOS