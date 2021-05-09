<template>
    <section class="experience-section">
        <div class="container-fluid">
            <div class="experience-intro">
                <h1 data-aos="fade-up">Our Expertise</h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <section class="customer-logos slider">
                        <!-- slider -->
                            <slick ref="slick" :options="slickOptions" class="experience-slider">
                                <img src="~@/assets/images/expertise/laravel.png">
                                <img src="~@/assets/images/expertise/php.png">
                                <img src="~@/assets/images/expertise/wordpress.png">
                                <img src="~@/assets/images/expertise/dart.png">
                                <img src="~@/assets/images/expertise/vuejs.png">
                                <img src="~@/assets/images/expertise/html.png">
                                <img src="~@/assets/images/expertise/css.png">
                                <img src="~@/assets/images/expertise/ps.png">
                                <img src="~@/assets/images/expertise/js.png">
                                <img src="~@/assets/images/expertise/webhosting.png">
                            </slick>
                        <!-- slider -->
                    </section>
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
                slidesToShow: 5,
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
.experience-section
{
    overflow: hidden;
    background: #f8f8f8;
    padding: 50px;
}
.experience-intro h1
{
    font-size: 50px;
    text-align: start;
    font-weight: 700;
    color: transparent;
    margin-bottom: 50px;
    background-image: url('~@/assets/images/img-3.jpg');
    background-size: cover;
    background-position: center;
    background-clip: text;
}
.experience-slider img
{
    padding: 15px;
}
@media only screen and (max-width: 767px)
{
    .experience-section
    {
        padding: 12px;
    }
    .experience-intro h1
    {
        margin-bottom: 0;
        font-size: 36px;
    }
}
</style>