<template>
    <StackLayout orientation="vertical" width="300" height="500" backgroundColor="">
        <Label class="lbl" text="Register" left="10" top="10" width="250" height="auto"/>
        <TextField hint="Email" width="280" backgroundColor="rgba(255,255,255,0.3)" height="50" class="textfieldClass"/>
        <TextField hint="Username" width="280" backgroundColor="rgba(255,255,255,0.3)" height="50" class="textfieldClass"/>
        <TextField hint="Password" secure width="280" height="50" backgroundColor="rgba(255,255,255,0.3)" class="textfieldClass"/>
        <TextField hint="Confirm Password" secure width="280" height="50" backgroundColor="rgba(255,255,255,0.3)" class="textfieldClass"/>
        <Button text="Signup" @tap="goBack" width="280" height="50" backgroundColor="white" color="#009d8d" class="btnClass xtraClass"></Button>
        <Button text="Back to Login" width="280" height="50" backgroundColor="white" color="#009d8d" class="btnClass" @tap="goBack"></Button>
    </StackLayout>
</template>
<script>
    export default{
        data(){
            return{}
        },
        props: ['myData'],
        methods:{
            goBack(){
                this.$emit('clicked','Login','');
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