<template>
    <section class="services-main-section">
        <!-- title -->
        <slot></slot>
        <!-- title -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 services-feature">
                    <div class="services-feature-images" data-aos="fade-right">
                        <img :src="img1" alt="">
                        <img :src="img2" alt="">
                    </div>
                </div>
                <div class="col-md-8" id="my-services-align">
                    <div class="container-fluid" id="aling-services">
                        <div class="row">
                            <div class="col-md-4 mt-5" data-aos="zoom-in" v-for="(serviceList, key) in serviceLists" :key="key" >
                                <div class="card" :style="serviceList.style">
                                    <div class="card-body">
                                        <div class="services-icon-container"><i :class="serviceList.serviceIcon"></i></div>
                                        <h3>{{serviceList.serviceTitle}}</h3>
                                        <p> {{serviceList.more}} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shaped">
            <li></li>
            <li></li>
        </div>
    </section>
</template>

<script>
import myImg1 from '../../assets/images/service1.png';
import myImg2 from '../../assets/images/service2.png';
export default {
    data:()=>({
        serviceLists: [
            {serviceTitle: 'Branding', serviceIcon:'fa fa-paint-brush', more:"Wheather you're launching new brand, or in need of a revamp, we at CodeSastra can help take your brand to next level providing service like Logo Design, Package Design, Corporate Identity and many others."},
            {serviceTitle: 'Illustration', serviceIcon:'fa fa-pencil-square-o', more:"When you are in need of some fine Illustration, you will find that the professionals we work with at CodeSastra fulfill all your needs. Flyers, Event Poster, Pamphlets, Brochures we got you all covered."},
            {serviceTitle: 'Marketing', serviceIcon:'fa fa-bullhorn', more:"Want to get into social media marketing, but don't know how? Contact us to discuss social media marketing opportunities that fit your business. We provide you the best marketing strategies"},
            {serviceTitle: 'Web Design', serviceIcon:'fa fa-globe', more:"Web design is a similar process of creation, with the intention of presenting the content on electronic web pages, which the end-users can access through internet with the help of a web browser."},
            {serviceTitle: 'Word Press', serviceIcon:'fa fa-wordpress', more:"Codesastra provides wordpress development services for personal website, business websites, and nonprofit organization website and e-commerce stores."},
            {serviceTitle: 'Web Development', serviceIcon:'fa fa-line-chart', more:"We provide a range of high-value social media consultancy services through which we help you to achieve tangible results from their social media activities", style:'margin-bottom: 30px;'}
        ],
        img1: myImg1,
        img2: myImg2
    })
}
</script>

<style scoped>
.services-main-section
{
    background: #f8f8f8;
    margin-top: 6%;
    overflow: hidden;
    position: relative;
}
.services-icon-container
{
    height: 70px;
    width: 70px;
    border-radius: 100%;
    border: 4px solid #fff;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 7px 0 #c4bfbf;
    z-index: 1;
    border: 2px solid #0f783d;
    transition: 0.5s;
    margin-top: -55px;
}
.container-fluid .card
{
    background: #ffffff;
    border: none;
    height: 400px;
    margin: 5px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    transition: 0.4s;
}
.services-icon-container i
{
    font-size: 36px;
    color: #0f783d;
}
.services-main-section .card .card-body h3
{
    font-size: 24px;
    font-weight: 600;
    color: #000 !important;
    text-align: start;
    margin-top: 16px;
}
.services-main-section .card .card-body p
{
    font-size: 18px;
    text-align: start;
    color: rgb(104, 98, 98) !important;
    font-weight: 600;
    margin-top: 16px;
}
.services-main-section .card:hover
{
    transform: translateY(-10px);
}
.services-feature-images
{
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 200px;
}
.services-feature-images img
{
    position: absolute;
    height: auto;
    border-radius: 16px;
    border: 2px solid #0f783d;
    border-style: dotted;
    animation: featured-animation 4s linear infinite;
}
.services-feature-images img:nth-child(1)
{   
    width: 60%;
    left: 0;
}
.services-feature-images img:nth-child(2)
{
    top: 120px;
    left: 110px;
    width: 76%;
    animation-delay: 2s;
}
@keyframes featured-animation 
{
    0%
    {
        transform: translateY(0px);
    }
    50%
    {
        transform: translateY(-20px);
    }
    100%
    {
        transform: translateY(0px);
    }
}
.shaped
{
    position: absolute;
    top: 0;
}
.shaped li
{
    background: #0f783d;
    list-style-type: none;
    border-radius: 10px;
    box-shadow: 0 0 3px 0 #777575;
    position: absolute;
    top: 100px;
    opacity: 0.1;
}
.shaped li:nth-child(1)
{
    height: 50px;
    width: 50px;
    margin-top: 25px;
}
.shaped li:nth-child(2)
{
    height: 50px;
    width: 50px;
    margin-left: 25px;
    margin-bottom: -5px;
}
@media only screen and (max-width: 1700px)
{
    .services-main-section .card .card-body h3
    {
        font-size: 20px;
    }
}
@media only screen and (max-width: 1276px)
{
    .services-main-section .card .card-body p
    {
        font-size: 15px;
    }
}
@media only screen and (max-width: 1100px)
{
    .services-feature
    {
        display: none;
    }
    #my-services-align
    {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .container-fluid .card
    {
        height: 350px;
    }
    .services-main-section .card .card-body p
    {
        font-size: 18px;
    }
}
@media only screen and (max-width: 962px)
{
    .container-fluid .card
    {
        height: 400px;
    }
}
@media only screen and (max-width: 873px)
{
    .container-fluid .card
    {
        height: 430px;
    }
}
@media only screen and (max-width: 823px)
{
    .container-fluid .card
    {
        height: 450px;
    }
}
@media only screen and (max-width: 767px)
{
    .services-feature
    {
        display: block;
    }
    .services-feature-images
    {
        margin-top: 30px;
    }
    .services-feature-images img
    {
        position: inherit;
    }
    .services-feature-images img:nth-child(1)
    {
        left: 95px;
    }
    .services-feature-images img:nth-child(2)
    {
        left: -95px;
    }
    .container-fluid .card
    {
        height: auto;
    }
}
</style>