<template>
    <section class="sub-about-section">
        <div class="container sub-about-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="about-us">
                        <h1><span class="code">Code</span><span class="sastra">Sastra</span></h1>
                        <p>We are an end-to-end Information Technology solutions provider and well-established company based in Pokhara, Nepal providing web application development, mobile application, branding and software to local and international companies and organizations. We are passionate about all the domains we operate in. Our striving for perfection is nothing but its by-product. We want to help our clients communicate better with their audience. The print is the most traditional, trusted and treasured way to reach out. At the same time, web and mobile channels are of increasing importance as each day goes by. We offer simple, modern and extensible solutions to leverage these channels and their capabilities to meet your brand needs and objectives.</p>
                    </div>
                </div>
            </div>
        </div>
        <app-our-tean></app-our-tean>
    </section>
</template>

<script>
import OurTeam from './OurTeam.vue'
export default {
    components:{
        appOurTean: OurTeam
    }
}
</script>

<style scoped>
.sub-about-container
{
    background: #fff;
    box-shadow: 0 0 10px 0 #363232;
    border-radius: 10px;
    position: relative;
    margin-top: -155px;
}
.about-us::before
{
    content: "About CodeSastra";
    position: absolute;
    height: 100px;
    width: 400px;
    background: #0f783d;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    text-shadow: 1px 2px 10px #000000bf;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border: 3px solid #fff;
    top: 0;
    left: 0;
    margin-top: -50px;
}
.code
{
    color: #0f783d;
}
.sastra
{
    color: #f17e21;
}
.about-us
{
    padding: 20px;
}
.about-us h1
{
    font-size: 40px;
    font-weight: 700;
    text-align: center;
}
.about-us p
{
    font-size: 20px;
    font-weight: 700;
    text-align: justify;
}
@media only screen and (max-width: 767px)
{
    .about-us::before
    {
        height: 76px;
        width: 296px;
        font-size: 22px;
    }
    .about-us h1
    {
        margin-top: 18px;
    }
    .title h3
    {
        font-size: 34px;
    }
}
</style>