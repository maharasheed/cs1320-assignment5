<template>
    <Page>
        <ActionBar v-show="currentComponent != 'Login' && currentComponent != 'Register'">
        <NavigationButton visibility="collapsed"></NavigationButton>
        <ActionItem @tap="goTo('Home')"
          ios.systemIcon="1" ios.position="right"
          android.systemIcon="ic_menu_share" android.position="actionBar" v-show="currentComponent == 'FindRestaurant'"></ActionItem>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Find Restaurants"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" :text="'Hello, '+myData"/>

                <Label class="drawer-item" text="Find Nearby Restaurant" @tap="goTo('FindRestaurant')"/>
                <Label class="drawer-item" text="Logout" @tap="goTo('Login')"/>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*" :class="currentComponent != 'Login' && currentComponent != 'Register' ? '' : 'mainBack'">
                <component
                v-for="component in componentsArray"
                v-show="component === currentComponent"
                :is="component"
                :my-data="myData"
                @clicked='addChild'
            />
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
import Login from './Login.vue';
import Register from './Register.vue';
import Home from './Home.vue';
import FindRestaurant from './FindRestaurant.vue';

  export default {
    data() {
      return {
        msg: 'Hello World!',
        currentComponent: 'Login',
        componentsArray:['Login','Register','Home','FindRestaurant'],
        myData:''
      }
    },
    components:{
        Login, Register, Home, FindRestaurant
    },
    methods: {
        addChild(val,val1){
            this.myData = val1;
            this.currentComponent = val;
        },
        goTo(comp){
            this.currentComponent = comp;
            this.$refs.drawer.nativeView.closeDrawer();
        }
    }
  }
</script>

<style>
    ActionBar {
        background-color: #009d8d;
        color: #ffffff;
    }

    .mainBack{
        background: linear-gradient(0deg, rgba(73,145,204,1) 0%, rgba(0,157,141,1) 50%, rgba(22,198,180,1) 100%);
    }

    .title {
        text-align: left;
        padding-left: 16;
        font-size: 20;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background:#4991cc;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 18;
    }
</style>
