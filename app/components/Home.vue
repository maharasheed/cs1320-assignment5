<template>
    <StackLayout orientation="vertical" width="300" height="400">
        <Label class="lbl" :text="'Welcome, '+myData" left="10" top="10" width="250" height="auto"/>
    </StackLayout>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        props: ['myData'],
        methods:{
        }
    }
</script>
<style scoped>

    .lbl {
        text-align: center;
        font-size: 35;
        color: black;
        margin-bottom: 25;
    }

</style>