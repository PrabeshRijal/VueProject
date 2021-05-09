<template>
    <section class="main-navigation-section">
        <app-top-navigation></app-top-navigation>
        <app-side-nav></app-side-nav>
        <div id="addNavStyle">
        <div class="container">
            <div class="row">
                <div class="decoImg" id="decoimage">
                        <img :src="decoImg" alt=""> 
                        <img :src="decoImg" alt=""> 
                    </div>
                <div class="col-md-3">
                    <div class="brand-logo" id="addimgstyle">
                        <img :src="brandLogo" alt="">
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="menu" id="addpaddingstyle">
                        <ul>
                            <router-link tag="li" active-class="active" exact :to="{name:'appView'}"><a id="addcolor1" @click="myNavFunction">Home</a></router-link>
                            <router-link tag="li" active-class="active" :to="{name:'services'}"><a id="addcolor2" @click="myNavFunction">Services</a></router-link>
                            <router-link tag="li" active-class="active" :to="{name:'about'}"><a id="addcolor3" @click="myNavFunction">About</a></router-link>
                            <router-link tag="li" active-class="active" :to="{name:'portfolio'}"><a id="addcolor4" @click="myNavFunction">Portfolio</a></router-link>
                            <router-link tag="li" active-class="active" :to="{name:'contact'}"><a id="addcolor5" @click="myNavFunction">Contact</a></router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- intro -->
        <div class="intro">
            <h1>{{intro}}</h1>
        </div>
        <!-- intro -->
        <!-- social-icon -->
        <div class="social-icon-container">
            <div class="social-container" v-for="(socialIcon, key) in socialIcons" :key="key">
                <a :href="socialIcon.link" :style="socialIcon.style"><i :class="socialIcon.icon"></i></a>
            </div>
        </div>
        <!-- social-icon -->
        <div class="dotted-line"><img :src="racImg" alt=""></div>
        <div class="dotted-line2"><img :src="racImg" alt=""></div>
    </section>
</template>

<script>
import SideNav from '../components/SideNav.vue';
import topNavigation from '../components/TopNavigation.vue';
import imgRac from '../assets/images/rec.png';
import imgBrandLogo from '../assets/images/brand-logo.png';
import decoimg from '../assets/images/shapes.png';
export default {
    components:{
        appSideNav: SideNav,
        appTopNavigation: topNavigation
    },
    data:()=>({
        socialIcons: [
            {icon:'fa fa-facebook', link:'https://www.facebook.com/codesastra.np/', style:'color:#3b5998'},
            {icon:'fa fa-instagram', link:'https://www.instagram.com/codesastra', style:'color:#f14843'},
            {icon:'fa fa-linkedin', link:'https://www.linkedin.com/company/codesastra/about/', style:'color:#0e76a8'},
            {icon:'fa fa-envelope', link:'http:/www.gmail.com', style:'color:#0e76a8'}
        ],
        intro: '"Turning IDEAS Into Technology"',
        racImg: imgRac,
        decoImg: decoimg,
        brandLogo: imgBrandLogo
    }),
    methods:{
        myNavFunction: function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        scrollFunction: function(){
            let header = document.querySelector("#addNavStyle");
            let imgStyle = document.querySelector("#addimgstyle");
            let addPadding = document.querySelector("#addpaddingstyle");
            let addColor1 = document.querySelector("#addcolor1");
            let addColor2 = document.querySelector("#addcolor2");
            let addColor3 = document.querySelector("#addcolor3");
            let addColor4 = document.querySelector("#addcolor4");
            let addColor5 = document.querySelector("#addcolor5");
            let decoimages = document.querySelector("#decoimage");
            let position = window.scrollY;
            
            if(position > 200)
            {
                header.classList.add('addStyle');
                imgStyle.classList.add('addimgstyle');
                addPadding.classList.add('addpadding');
                addColor1.style.color = 'black';     
                addColor2.style.color = 'black';     
                addColor3.style.color = 'black';     
                addColor4.style.color = 'black';     
                addColor5.style.color = 'black'; 
                decoimages.style.display = 'block';      
            }
            else
            {
                header.classList.remove('addStyle');
                imgStyle.classList.remove('addimgstyle');
                addPadding.classList.remove('addpadding');
                addColor1.style.color = 'white';
                addColor2.style.color = 'white';
                addColor3.style.color = 'white';
                addColor4.style.color = 'white';
                addColor5.style.color = 'white';
                decoimages.style.display = 'none';  
            }
        }
    },
    created: function(){
        addEventListener('scroll', this.scrollFunction);
    },
}
</script>

<style scoped>
.main-navigation-section
{
    background: linear-gradient(90deg, rgba(37,33,99,0.3) 100%, rgba(0,212,255,1) 100%),url('~@/assets/images/header-sm-img.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 550px;
    overflow: hidden;
    position: relative;
}
.brand-logo
{
    position: absolute;
}
.brand-logo img
{
    height: auto;
    width: 36%;
    margin-top: 4px;
    box-shadow: 0 0 4px 0 rgb(114, 112, 112);
    border-radius: 100%;
}
.addimgstyle
{
    width:70%
}
.addpadding
{
    margin-top: -12px;
}
.decoImg
{
    position: relative;
    background: #f17e21;
    width: 100%;
    display: none;
}
.decoImg img
{
    position: absolute;
    height: auto;
}
.decoImg img:nth-child(1)
{
    width: 4%;
    top: 25px;
    right: 0;
    transform: rotate(90deg);
}
.decoImg img:nth-child(2)
{
    left: 25px;
}
.menu
{
	display: flex;
	justify-content: flex-end;
    padding-top: 25px;
}
.menu ul
{
	list-style-type: none;
	margin:0px;
	padding: 0px;
	width: 90%;
	height: 50px;
	line-height: 50px;
	display: flex;
}
.menu ul li
{
	width: 100%;
}
.menu ul li a
{
	position: relative;
	width: 100%;
	display: block;
	text-align: center;
	color: #fff;
	text-decoration: none;
	font-weight: bold;
	font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s;
}
.menu ul li a:hover
{
    color: #f17e21;
}
.active 
{
    border-bottom: 2px solid #f17e21;
    border-radius: 10px;
}
.addStyle
{
    background: #fff;
    position: fixed;
    height: 80px;
    width: 100%;
    top: 0;
    z-index: 5000;
    transition: 1s;
    box-shadow: 1px 0 10px rgba(0,0,0,0.1);
}
.social-icon-container
{
    position: fixed;
    z-index: 1;
    top: 100px;
    right: 0;
}
.social-icon-container .social-container
{
    height: 36px;
    width: 36px;
    cursor: pointer;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 0 rgb(110, 108, 108);
    transition: 0.5s;
}
.social-icon-container .social-container a
{
    font-size: 20px;
}
.social-icon-container .social-container:hover
{
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
                -0.5px -0.5px 0px rgba(255, 255, 255, 1),
                0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    transform: translateX(-8px);
}
.dotted-line
{
    position: absolute;
    display: flex;
    justify-content: flex-end;
    right: 0;
    top: 70%;
}
.dotted-line2
{
    position: absolute;
    top: 80%;
}
.dotted-line img
{
    height: auto;
    width: 18%;
    opacity: 0.7;
    animation: animate-img1 8s linear infinite;
}
.dotted-line2 img
{
    height: auto;
    width: 18%;
    opacity: 0.7;
    animation: animate-img2 8s linear infinite;
}
@keyframes animate-img1
{
    0%{transform:translateY(0px);}
    50%{transform:translateY(-50px);}
    100%{transform:translateY(0px);}
}
@keyframes animate-img2
{
    0%{transform:translateY(0px);}
    50%{transform:translateY(50px);}
    100%{transform:translateY(0px);}
}
.intro h1
{
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 44px;
    text-shadow: 1px 2px 10px #000000bf;
    margin-top: 104px;
}
@keyframes intro-animation
{
    to{
        opacity: 1;
    }
}
@media only screen and (max-width: 1200px)
{
    .intro h1
    {
        font-size: 40px;
    }
}
@media only screen and (max-width: 992px)
{
    .brand-logo img
    {
        margin-top: 10px;
        width: 50%;
    }
    .menu ul
    {
        width: 100%;
    }
    .menu ul li a
    {
        font-size: 14px;
    }
}
@media only screen and (max-width: 900px)
{
    .intro h1
    {
        font-size: 36px;
    }
}
@media only screen and (max-width: 767px)
{
    .intro h1
    {
        margin-top: 230px;
    }
    .addStyle
    {
        height: auto;
        width: auto;
    }
    .decoImg img:nth-child(1)
    {
        display: none;
    }
    .decoImg img:nth-child(2)
    {
        display: none;
    }
    .main-navigation-section
    {
        background: linear-gradient(90deg, rgba(37,33,99,0.4) 100%, rgba(0,212,255,1) 100%),url('~@/assets/images/header-sm-img.jpg');
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        height: 550px;
        overflow: hidden;
        position: relative;
    }
}
@media only screen and (max-width: 650px)
{
    .intro h1
    {
        margin-top: 200px;
    }
}
@media only screen and (max-width: 442px)
{
    .intro h1
    {
        font-size: 30px;
    }
}
</style>