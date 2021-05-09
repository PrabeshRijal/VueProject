<template>
    <section>
        <div class="side-navigation">
            <div class="sideToggle">
                <div class="top-brand-logo ">
                    <img src="~@/assets/images/white-logo.png" alt="">
                </div>
                <div class="brand-name">
                    <h1>CodeSastra Softwares Pvt Ltd. </h1>
                </div>
                <div class="btnToggle">
                    <button @click="isActive = !isActive"><i class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="side-menu" :class="{addme : isActive}">
                <div class="side-logo"><img src="~@/assets/images/vv.png" alt=""></div>
                <ul>
                    <router-link tag="li" active-class="active" exact :to="{name:'appView'}"><a @click=" isActive = !isActive"><i class="fa fa-home"></i> Home</a></router-link>
                    <router-link tag="li" active-class="active" :to="{name:'services'}"><a @click=" isActive = !isActive"><i class="fa fa-tasks"></i> Services</a></router-link>
                    <router-link tag="li" active-class="active" :to="{name:'about'}"><a @click=" isActive = !isActive"><i class="fa fa-info-circle mr-1"></i> About</a></router-link>
                    <router-link tag="li" active-class="active" :to="{name:'portfolio'}"><a @click=" isActive = !isActive"><i class="fa fa-group"></i> Portfolio</a></router-link>
                    <router-link tag="li" active-class="active" :to="{name:'contact'}"><a @click=" isActive = !isActive"><i class="fa fa-address-book-o"></i> Contact</a></router-link>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data:()=>({
        isActive : false
    })
}
</script>

<style scoped>
.side-navigation
{
    overflow: hidden;
}
.sideToggle
{
    height: 80px;
    width: 100%;
    background: #252163;
    z-index: 20;
    box-shadow: 0 0 3px 0 rgb(0, 0, 0);
    position: fixed;
}
.top-brand-logo 
{
    position: fixed;
    top: 5px;
    left: 10px;
}
.top-brand-logo img
{
    height: auto;
    width: 25%;
}
.brand-name
{
    position: fixed;
    top: 32px;
    left: 85px;
}
.brand-name h1
{
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-shadow: 1px 2px 10px #000000bf;
}
.btnToggle
{
    position: absolute;
    right: 19px;
    top: 20px;
}
.btnToggle button
{
    background: transparent;
    outline: none;
    color: #fff !important;
    border:none;
}
.btnToggle button
{
    font-size: 30px;
}
.side-menu
{
    height: 100%;
    width: 240px;
    left: -240px;
    top: 0;
    background: #042331;
    position: fixed;
    z-index: 5;
    padding-top: 100px;
    transition: 0.5s;
}
.addme
{
   left: 0px;
}
.side-menu ul li a
{
    text-decoration: none;
	display: block;
	height: 100%;
	width: 100%;
	line-height: 65px;
	font-size: 20px;
	color: #fff;
	padding-left: 40px;
	box-sizing: border-box;
	border-top: 1px solid rgba(255,255,255,0.1);
	border-bottom: 1px solid #000;
	transition: 0.4s;
}
.side-menu ul li a:hover
{
    margin-left: 10px;
    text-decoration: none;
}
.side-logo
{
    background: #fff;
    border: 2px solid #f8f8f8;
    height: 120px;
    width: 120px;
    border-radius:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    margin-bottom: 16px;
}
.side-logo img
{
    height: auto;
    width: 100%;
}
@media only screen and (max-width: 767px)
{
    .side-menu ul li a:hover
    {
        margin-left: 0;
    }
}
@media only screen and (max-width: 442px)
{
    .brand-name h1
    {
        display: none;
    }
}
</style>