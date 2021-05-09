<template>
    <div class="why-choose-section">
        <!-- title -->
        <slot></slot>
        <!-- title -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5">
                    <div class="why-img-container" data-aos="fade-up">
                        <img src="~@/assets/images/software3.png" alt="">
                        <div id="why-choose-animate">
                            <img src="~@/assets/images/icons/home-rotate.png" alt="">
                            <img src="~@/assets/images/icons/home-rotate.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="why-choose-container">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6" data-aos="fade-right" v-for="(whyList, key) in whyLists" :key="key">
                                    <div class="why-wrapper">
                                        <div class="why-image-wrapper">
                                            <img :src="whyList.imgWhy" alt="">
                                        </div>
                                        <h1>{{whyList.header}}</h1>
                                        <p>{{whyList.whyExplain}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="why-btn">
                                <button @click="navigateToWhy">More <i class="fa fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,186.7C640,192,800,256,960,266.7C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
</template>

<script>
import imgGift from '../../assets/images/icons/gift.png';
import imgHonest from '../../assets/images/icons/honest.png';
import imgCustomer from '../../assets/images/icons/customer-service.png';
import imgHelp from '../../assets/images/icons/help.png';
export default {
    data:()=>({
        whyLists: [
            {header:'Exceptional Quality', whyExplain:'CodeSastra provide a good quality product with Quality Assurance Process.', imgWhy: imgGift},
            {header:'Honest & Ethic', whyExplain:'CodeSastra provide a good quality product with Quality Assurance Process.', imgWhy: imgHonest},
            {header:'Customer Service', whyExplain:'CodeSastra will be always ready for customer support.', imgWhy: imgCustomer},
            {header:'Helpful Expert', whyExplain:'We have helpful expert who are always availabel for help.', imgWhy: imgHelp}
        ]
    }),
    methods:{
        navigateToWhy(){
            this.$router.push('/portfolio');
        }
    }
}
</script>

<style scoped>
.why-choose-section
{
    background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)) ,url('~@/assets/images/img1.jpg');
    background-position: center;
    background-size: cover;
    overflow: hidden;
}
.why-image-wrapper img
{
    height: auto;
    width: 100%;
}
.why-image-wrapper
{
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: centers;
    border-radius: 100%;
    margin: auto;
    margin-top: 20px;
}
.why-wrapper h1
{
    color: #fff !important;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}
.why-wrapper p
{
    color: #f8f8f8 !important;
    font-size: 18px;
    font-weight: 580;
    font-family: 'Raleway', sans-serif;
    text-align: center;
}
.why-btn
{
    text-align: center;
}
.why-btn button
{
    outline: none;
    background: #f17e21;
    border: none;
    border-radius: 20px;
    padding: 5px 30px;
    color: #ffffff;
    transition: 0.5s;
}
.why-btn button:hover 
{
    transform: translateX(10px);
}
.why-img-container img
{
    height: auto;
    width: 100%;
    margin-top: 40px;
}
#why-choose-animate img
{
    position: absolute;
    animation: rotate 6s linear infinite;
}
#why-choose-animate img:nth-child(1)
{
    height: auto;
    width: 20%;
    position: absolute;
    top: 25px;
    left: 450px;
}
#why-choose-animate img:nth-child(2)
{
    height: auto;
    width: 16%;
    margin-top: -50px;
}
@keyframes rotate
{
    from
    {
        transform: rotate(0);
    }
    to
    {
        transform: rotate(360deg);
    }
}

@media only screen and (max-width: 1200px)
{
    .why-img-container img
    {
        margin-top: 160px;
    }
    #why-choose-animate img:nth-child(1)
    {
        left: 300px;
    }
}
@media only screen and (max-width: 891px)
{
    .why-wrapper h1
    {
        font-size: 18px;
    }
}
@media only screen and (max-width: 815px)
{
    #why-choose-animate img:nth-child(1)
    {
        left: 200px;
    }
}
@media only screen and (max-width: 768px)
{
    #why-choose-animate img:nth-child(1)
    {
        left: 260px;
    }
}
@media only screen and (max-width: 767px)
{
    #why-choose-animate img:nth-child(1)
    {
        left: 500px;
    }
    .why-img-container img
    {
        margin-top: 0;
    }
}
@media only screen and (max-width: 570px)
{
    #why-choose-animate img:nth-child(1)
    {
        left: 325px;
    }
}
</style>