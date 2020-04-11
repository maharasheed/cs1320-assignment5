<template>
<StackLayout orientation="vertical">
    <Label text="Loading..." v-if="nearRestaurant.length == 0" style="text-align:center;font-size:15;"></Label>
    <TextField hint="Search here" v-model="searchtxt" width="280" backgroundColor="" height="30" color="black" v-if="searchtype || nearRestaurant.length > 0" class="textfieldClass" @returnPress="getSearchData" @focus="setFocus"/>
    <Label v-for="restaurant in nearRestaurant" :text="restaurant.name"  textWrap="true" class="lbl"></Label>
</StackLayout>
</template>
<script>
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import axios from 'axios';

export default{
    data(){
        return{
            nearRestaurant:[],
            searchtxt:null,
            mylat: null,
            mylon: null,
            searchtype: false
        }
    },
    async mounted(){
        geolocation.enableLocationRequest();
        geolocation.getCurrentLocation({
            desiredAccuracy: Accuracy.high,
            updateDistance: 0.1,
            timeout: 20000
        }).then(
        async loc => {
            if (loc) {
                // this is your location data, may need to parse
                this.mylat = loc.latitude;
                this.mylon = loc.longitude;
                let result = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+loc.latitude+","+loc.longitude+"&radius=3000&type=restaurant&key=AIzaSyBMnjXVWebqKX6uNN5_Bourv5qZRq-VdXk");
                this.nearRestaurant = (result.data.results).slice(0,9);
            }
        },
            function(e) {
                alert("Error: " + e.message);
            }
        );
    },
    methods:{
        checkSearch(name){
            if(this.searchtxt != null && this.searchtxt.trim() != ''){
                let lowername = name.toLowerCase(); 
                if(lowername.indexOf(this.searchtxt.toLowerCase())  != -1){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return true;
            }
        },
        setFocus(){
            this.searchtype =true;
        },
        async getSearchData(){
            if(this.searchtxt == null || this.searchtxt.trim() == ''){
                let result = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.mylat+","+this.mylon+"&radius=3000&type=restaurant&key=AIzaSyBMnjXVWebqKX6uNN5_Bourv5qZRq-VdXk");
                this.nearRestaurant = (result.data.results).slice(0,9);
            }
            else{
                let result = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.mylat+","+this.mylon+"&radius=3000&type=restaurant&keyword="+this.searchtxt.trim()+"&key=AIzaSyBMnjXVWebqKX6uNN5_Bourv5qZRq-VdXk");
                this.nearRestaurant = (result.data.results).slice(0,9);
            }
        },
    }
}

</script>
<style scoped>
    .lbl{
        font-size:20;
        padding-top:15;
        padding-bottom:15;
        border-bottom-width: 1;
        border-bottom-color: #ccc;
    }
    .textfieldClass{
        margin-top: 5;
        margin-bottom: 5;
        border-radius: 50%;
        padding-left: 20;
        font-size: 15;  
        border-bottom-color: #009d8d;
        border-top-color: #009d8d;
        border-left-color: #009d8d;
        border-right-color: #009d8d;
        border-bottom-width: 1;
        border-top-width: 1;
        border-left-width: 1;
        border-right-width: 1;
    }
</style>