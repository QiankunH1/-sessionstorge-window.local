<template>
    <div>
        我是home页主页面
    </div>
</template>

<script>
    export default {
        data(){
            return{
                info:"",
                data:"a",
                test:"5"
            }
        },
        methods:{
            getinfo(){
               this.info =this.$store.state.rows
               console.log('我是test',this.test)
            //    for(var a=1;a>0;a++){
            //        console.log('我再执行getinfo')
            //    }
            }
        },
        created(){
            this.getinfo()
            console.log('我是this.info',this.info)
            if(this.info){
                
                console.log("this.info是存在的")
            }
            if(this.data){
                console.log
                console.log("this.data是存在的")
            }
            window.location.href='http://localhost:8080/#/push'


        }
    }
</script>

<style scoped>

</style>