<template>
    <div class="content">
     我是登录页
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
           return{
               rows:"",
            }
        },
        methods:{
           getdata(){
                 axios.get('http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0').then(res=>{
                    console.log(res)
                   this.rows=res.data.rows
                   console.log(this.rows)
                    this.$store.commit('CHANGE_rows',this.rows)
                    console.log(this.$store.state.rows)
                    window.location.href='http://localhost:8080/#/home'
                })
           }
        },
        created(){
            this.getdata()
        }
    }
</script>

<style scoped>


</style>