<template>
    <section class="sub-contact-section">
        <div class="container sub-contact-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact">
                        <div class="container">
                            <div class="contact-deco-img">
                                <img src="~@/assets/images/shapes.png" alt="">
                                <img src="~@/assets/images/shapes.png" alt="">
                            </div>
                            <div class="row" id="row-align">
                                <div class="col-md-4">
                                    <div class="contact-us-icon">
                                        <img src="~@/assets/images/icons/map.png" alt="">
                                    </div>
                                    <h1 id="my-info">Phewa Marga, Pokhara</h1>
                                </div>
                                <div class="col-md-4">
                                    <div class="contact-us-icon" id="contact-icon-align">
                                        <img src="~@/assets/images/icons/mail.png" alt="">
                                    </div>
                                    <h1 id="my-info">contact@codesastra.com</h1>
                                </div>
                                <div class="col-md-4">
                                    <div class="contact-us-icon" id="contact-icon-align">
                                        <img src="~@/assets/images/icons/customer-service.png" alt="">
                                    </div>
                                    <h1 id="my-info">061-530625 / 9846554372</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <app-contact-us></app-contact-us>
    </section>
</template>

<script>
import ContactUs from '../../SubComponents/SubContact/ContactUs.vue'
export default {
    components: {
        appContactUs: ContactUs
    }
}
</script>

<style scoped>
.sub-contact-section
{
    padding-bottom: 25px;
}
.contact-deco-img img
{
    height: auto;
    position: absolute;
}
.contact-deco-img img:nth-child(1)
{
    width: 12%;
    top:25px;
    right: 25px;
}
.contact-deco-img img:nth-child(2)
{
    transform: rotate(90deg);
}
.sub-contact-container
{
    background-color: #ffffff;
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 10px 0 #363232;
    border-radius: 10px;
    position: relative;
    margin-top: -155px;
    background-repeat: no-repeat;
    background-size: cover;
}
.contact
{
    margin-bottom: 40px;
}
.contact::before
{
    content: "Contact Us";
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
.contact-us-icon img
{
    height: auto;
    width: 60%;
}
.contact-us-icon
{
    height: 76px;
    width: 76px;
    background: #f17e21;
    box-shadow: 0 0 5px 0 #857e7e;
    border: 3px solid #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    transition: 0.5s;
}
.contact-us-icon:hover
{
    transform: translateY(-10px);
}
#row-align
{
    margin-top: 90px;
}
#my-info
{
    font-size: 20px;
    font-weight: 500;
    text-shadow: 1px 1px 1px #a09c9cbf;
    text-align: center;
    color: #000 !important;
    margin-top: 15px;
}
@media only screen and (max-width: 767px)
{
    .contact::before
    {
        height: 76px;
        width: 296px;
        font-size: 22px;
    }
    #my-info
    {
        font-size: 20px;
    }
    #contact-icon-align
    {
        margin-top: 25px;
    }
}
</style>