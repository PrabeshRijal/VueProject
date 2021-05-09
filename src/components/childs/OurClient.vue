<template>
    <section class="our-client-section">
     <!-- title -->
     <slot></slot>
     <!-- title -->
     <div class="box-circle">
         <li></li>
         <li></li>
     </div>
     <div class="our-client-container">
         <div class="container-fluid">
             <div class="ourclient-someinfo container">
                 <p>We Make Connection All Over The World</p>
                 <p>CodeSastra Softwares has worked with organizations over each real industry to make amazing products and draw an obvious conclusion regarding individuals, items, and business openings. We turn ideas into technology.</p>
             </div>
             <div class="row">
                 <div class="col-md-12 col-sm-6 col-lg-12">
                     <!-- slider -->
                    <slick ref="slick" :options="slickOptions" class="our-client-slider">
                        <img src="~@/assets/images/clients/buddha.jpg">
                        <img src="~@/assets/images/clients/3mw.jpg">
                        <img src="~@/assets/images/clients/needsacademy.jpg">
                        <img src="~@/assets/images/clients/nepalaya.jpg">
                        <img src="~@/assets/images/clients/danfesaving.jpg">
                        <img src="~@/assets/images/clients/pokhara11.jpg">
                        <img src="~@/assets/images/clients/pokhara13.jpg">
                        <img src="~@/assets/images/clients/pokhara16.jpg">
                        <img src="~@/assets/images/clients/pokhara5.jpg">
                        <img src="~@/assets/images/clients/pokhara8.jpg">
                        <img src="~@/assets/images/clients/pokhara9.jpg">
                        <img src="~@/assets/images/clients/asapent.jpg">
                        <img src="~@/assets/images/clients/gurungbeautyacademy.jpg">
                        <img src="~@/assets/images/clients/asapent.jpg">
                        <img src="~@/assets/images/clients/hotelbrothersinn.jpg">
                        <img src="~@/assets/images/clients/jca.jpg">
                        <img src="~@/assets/images/clients/sagarmatha.jpg">
                        <img src="~@/assets/images/clients/motherland.jpg">
                        <img src="~@/assets/images/clients/pahs.jpg">
                        <img src="~@/assets/images/clients/royalpokhara.jpg">
                        <img src="~@/assets/images/clients/mho.jpg">
                        <img src="~@/assets/images/clients/hotelpinakini.jpg">
                        <img src="~@/assets/images/clients/gandakitroutfarm.jpg">
                        <img src="~@/assets/images/clients/hotelkalash.jpg">
                        <img src="~@/assets/images/clients/pthmiwhsa.jpg">
                        <img src="~@/assets/images/clients/farmerhousenepal.jpg">
                    </slick>
                    <!-- slider -->
                     </div>
                 </div>
             </div>
         </div>
    </section>
</template>

<script>
import Slick from 'vue-slick';

export default {
    components: { 
        Slick 
        },
     data() {
        return {
            slickOptions: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1200,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            },
        };
    },
     methods: {
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    }
}
</script>

<style scoped>
.our-client-section
{
    overflow: hidden;
    background: #f8f8f8;
    padding-bottom: 20px;
}
.ourclient-someinfo p
{
    color: #5f5959;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
}
.box-circle
{
    position: relative;
}
.box-circle li
{
    height: 80px;
    width: 80px;
    background: #0f783d;
    list-style-type: none;
    position: absolute;
    opacity: .1;
    border-radius: 15px;
}
.box-circle li:first-child
{
    margin-left: 25px;
    margin-top: 25px;
}
.our-client-slider img
{
    padding: 25px;
}
</style>