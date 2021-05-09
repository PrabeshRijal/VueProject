<template>
    <section class="flashscreen-section addFlash">
        <div class="flash-wrapper">
        <div class="my-flash-screen">
            <div class="my-flash-img">
                <img :src="flashSrc">
            </div>
            <div class="my-flash-heading">
                <h1 v-text="header"></h1>
                <div class="loader text-center">
                    <div class="spinner-border text-center"></div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import flashLogo from '../assets/images/brand-logo.png'
export default {
    data:()=>({
        flashSrc: flashLogo,
        header: 'CodeSastra Softwares Pvt Ltd.',
        flashIsActive: true
    }),
    methods:{
        runFlashScreen: function(){
            let webFlash = document.querySelector(".addFlash");
            setTimeout(function(){
                webFlash.classList.add("dnone");
            },1500);
        }
    },
    created: function(){
        addEventListener("DOMContentLoaded", this.runFlashScreen);
    }
}
</script>

<style scoped>
.flashscreen-section
{
    overflow: hidden;
}
.my-flash-screen
{
    height: 100vh;
    width: 100%;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 78%);
    position: fixed;
    z-index: 1000;
}
.dnone
{
    display: none;
    z-index: -1000;
}
.my-flash-img
{
    display: flex;
    justify-content: center;
    margin-top: 200px;
}
.my-flash-img img
{
    height: auto;
    width: 12%;
    opacity: 0;
    transform: rotate(30deg);
    animation: flash-logo 2.5s linear forwards;
}
.my-flash-heading h1
{
    font-weight: bold;
    font-size: 40px;
    color: #fff;
    text-align: center;
    opacity: 0;
    text-shadow: 1px 2px 10px #000000bf;
    animation: header-fade 2s linear forwards;
}
.dnone
{
    display: none;
}
.spinner-border
{
    color: #ffffff;
    opacity: 0.5;
}
.loader
{
    opacity: 1;
    animation: loaderAnimation 2s ease-out forwards;
}
@keyframes header-fade
{
    to{
        opacity: 1;
    }
}
@keyframes flash-logo
{
    to
    {
        opacity: 1;
        transform: rotate(0deg);
    }
}
@keyframes flash-bg
{
    to
    {
        background-image: none;
        background-color: transparent;
        z-index: -1000;
    }
}
@media only screen and (max-width: 767px)
{
    .my-flash-img img
    {
        width: 20%;
    }
    .my-flash-heading h1
    {
        font-size: 30px;
    }
}
</style>