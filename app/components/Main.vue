<template>
    <StackLayout orientation="Horizontal">
        <component
            v-for="component in componentsArray"
            v-show="component === currentComponent"
            :is="component"
            :my-data="myData"
            @clicked='addChild'
        />
        </StackLayout>
    </StackLayout>
</template>
<script>
import Login from './Login.vue';
import Register from './Register.vue';
import Home from './Home.vue';

    export default{
        data () {
                return {
                    currentComponent: 'Login',
                    componentsArray:['Login','Register','Home'],
                    myData:''
                };
            },
            components:{
                Login, Register, Home
            },
            methods: {
                addChild(val,val1){
                    this.myData = val1;
                    this.currentComponent = val;
                }
            }
    }
</script>
<style scoped>
    .sidebarMenu{
        border-bottom:'1px solid black';
        margin :10px 10px;
        font-size: 18
    }
</style>