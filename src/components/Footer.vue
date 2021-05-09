<template>
    <section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3" data-aos="fade-right">
                    <div class="footer-logo">
                        <img :src="footerImg" alt="">
                    </div>
                    <div class="footer-intro">
                        <h4 v-text="footerIntro"></h4>
                    </div>
                </div>
                <div class="col-md-3 footer-contact">
                    <div class="footer-header">
                        <h3 v-text="footerContact"></h3>
                    </div>
                    <div class="codesastra-contact">
                        <div class="codesastra-contact-info" v-for="(footerInfo, key) in footerInfos" :key="key">
                            <span><i :class="footerInfo.icons"></i></span>
                            <p> {{footerInfo.info}} </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 footer-services">
                    <div class="footer-header">
                        <h3 v-text="footerService"></h3>
                    </div>
                    <div class="codesastra-services">
                        <div class="codesastra-services-info" v-for="(footerService, key) in footerServices" :key="key">
                            <span><i class="fa fa-check"></i></span>
                            <p> {{footerService.serviceInfo}} </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 footer-decoration" id="footer-deco-img-align">
                    <img :src="footerDeco2" alt="">
                    <img :src="footerDeco1" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import brandLogo from '../assets/images/white-logo.png';
import footerDecoImg1 from '../assets/images/footer1.png';
import footerDecoImg2 from '../assets/images/footer2.png';
export default {
    data:()=>({
        footerImg: brandLogo,
        footerDeco1: footerDecoImg1,
        footerDeco2: footerDecoImg2,
        footerContact: 'Contact Us',
        footerService: 'Services',
        footerIntro: 'We are an end-to-end Information Technology solutions provider and well-established company based in Pokhara, Nepal providing web application development, mobile application, branding and software to local and international companies and organizations.',
        footerInfos:[
        {info:'Phewa Marga, Pokhara', icons:'fa fa-map-marker'},
        {info:'061-530625 / 9846554372', icons:'fa fa-phone'},
        {info:'codesastra@gmail.com', icons:'fa fa-envelope'}
         ],
         footerServices:[
             {serviceInfo:"Brand Identity, Web Development"},
             {serviceInfo:"Marketing, Wordpress"},
             {serviceInfo:"Mobile App, Lot More"}
         ]
    })
}
</script>

<style scoped>
.footer-section
{
    overflow: hidden;
    background-color: #212529;
    background-image:  url('~@/assets/images/map-image.png');
    background-size: cover;
    background-position: center;
    padding: 15px;
}
.footer-logo img
{
    height: auto;
    width: 46%;
}
.footer-logo
{
    display: flex;
    justify-content: start;
}
.footer-intro h4
{
    font-size: 17px;
    color: #ffffff !important;
    text-align: start;
}
.footer-header h3
{
    color: #ffffff !important;
    margin-top: 32px;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 26px;
}
.footer-decoration
{
    position: relative;
}
.footer-decoration img
{
    position: absolute;
    height: auto;
    width: 70%;
    box-shadow: 0 0 50px 0 #0000;
    border-radius: 25px;
    border: 2px solid #ff5601;
    border-style: dashed;
    transition: 0.3s;
}
.footer-decoration img:hover
{
    transform: scale(1.1);
}
.footer-decoration img:nth-child(1)
{
    top: 100px;
    left: 100px;
}
.footer-decoration img:nth-child(2)
{
    width: 80%;
    left: 0;
}
.codesastra-contact-info
{
    display: flex;
}
.codesastra-contact-info span i
{
    color: #fff;
    margin-right: 10px;
    font-size: 26px;
}
.codesastra-contact-info p
{
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}
.codesastra-contact-info p:hover
{
    color: #c2bcbc;
}
.codesastra-services-info
{
    display: flex;
}
.codesastra-services-info span i
{
    color: #fff;
    margin-right: 10px;
    font-size: 12px;
}
.codesastra-services-info p
{
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    transition: 0.2s;
}
.codesastra-services-info p:hover
{
    color: #c2bcbc;
}
@media only screen and (max-width: 992px)
{
    .footer-decoration
    {
        margin-top: 116px;
    }
    .container
    {
        max-width: 830px;
    }
}
@media only screen and (max-width: 767px)
{
    .footer-logo img
    {
        width: 30%;
    }
    .footer-decoration img
    {
        display: none;
    }
    .footer-header h3
    {
        margin-bottom: 26px;
    }
    .footer-decoration
    {
        margin-top: 0;
    }
}
</style>