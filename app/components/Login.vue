<template>
    <StackLayout orientation="vertical" width="300" height="400">
        <Label class="lbl" text="Signin" left="10" top="10" width="250" height="auto"/>
        <TextField hint="Username" v-model="username" width="280" backgroundColor="rgba(255,255,255,0.3)" height="50" color="black" class="textfieldClass"/>
        <TextField hint="Password" v-model="password" secure width="280" height="50" color="black" backgroundColor="rgba(255,255,255,0.3)" class="textfieldClass"/>
        <Button text="Login" @tap="doLogin" width="280" height="50" backgroundColor="white" color="#009d8d" class="btnClass xtraClass"></Button>
        <Button text="Register New User" width="280" height="50" backgroundColor="white" color="#009d8d" class="btnClass" @tap="goToRegister"></Button>
    </StackLayout>
</template>
<script>
    export default{
        data(){
            return{
                username:null,
                password:null
            }
        },
        props: ['myData'],
        methods:{
            goToRegister(){
                this.$emit('clicked','Register','');
            },
            doLogin(){
                if(this.username != null && this.username.trim() != '' && this.password != null && this.password.trim() != ''){
                    //this.$store.commit('setUsername',this.username.trim());
                    let user = this.username.trim();
                    this.username = null;
                    this.password = null;
                    this.$emit('clicked','Home',user);
                }
                else{
                    alert("You need to enter username and password");
                }
            }
        }
    }
</script>
<style scoped>

    .btnClass{
        margin-top:10;
        border-radius: 50%;
        font-size: 20;
    }

    .textfieldClass{
        margin-top: 10;
        margin-bottom: 10;
        border-radius: 50%;
        padding-left: 20;
        font-size: 15;   
    }

    .lbl {
        text-align: center;
        font-size: 35;
        color: white;
        margin-bottom: 25;
    }

    .xtraClass{
        margin-top: 35;
    }
</style>