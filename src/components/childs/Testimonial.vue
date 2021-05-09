<template>
    <section class="testimonial-section">
        <!-- title -->
        <slot></slot>
        <!-- title -->

        <div class="container">
            <div class="row">
                <div class="col-md-12" data-aos="zoom-in">
                    <div class="testi-animation">
                        <img src="~@/assets/images/vv.png" alt="">
                        <img src="~@/assets/images/vv.png" alt="">
                    </div>
                    <div id="demo" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                        <li data-target="#demo" data-slide-to="4"></li>
                    </ul>
                    <!-- The slideshow -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="testi-img"><img src="~@/assets/images/testimonial/prabesh_Rijal.png"></div>
                            <div class="testi-info">
                                <div class="testi-mess"><p>“CodeSastra has provide me an oppertunity to learn and do something new and creative through supportive environment in the field of software development. I am glade to be a part of CodeSastra family.”</p></div>
                                <h3>Prabesh Rijal</h3>
                                <h2>Frontend Developer</h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testi-img"><img src="~@/assets/images/testimonial/Operation-manager.png"></div>
                            <div class="testi-info">
                                <div class="testi-mess"><p>“I have really enjoyed working with team CodeSastra, they are great team players and can really deliver outstanding results. I would be proud to have either one of them on my team.”</p></div>
                                <h3>Binod Timilsina</h3>
                                <h2>Oparation Manager</h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testi-img"><img src="~@/assets/images/testimonial/developer.jpg"></div>
                                <div class="testi-info">
                                    <div class="testi-mess"><p>“I found every team member of the team CodeSastra attentive to my needs, professional and open-minded. Great working environment with clear mind and vision for development.”</p></div>
                                    <h3>Bimal Sharma</h3>
                                    <h2>Backend Developer</h2>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testi-img"><img src="~@/assets/images/testimonial/client.png"></div>
                                <div class="testi-info">
                                    <div class="testi-mess"><p>“I can't say enough about the excellent work that CodeSastra has done on our website. They took a below-average website and transformed it into an appealing and informative website.”</p></div>
                                    <h3>Mrs.Chinu Gurung</h3>
                                    <h2>Client</h2>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testi-img"><img src="~@/assets/images/testimonial/santosh_adhikari.jpg"></div>
                            <div class="testi-info">
                                <div class="testi-mess"><p>“The wonderful team effort of CodeSastra helped me create new hopes for my industry. With their professionalism, prompt, quick response and courteous service.”</p></div>
                                <h3>Santosh Adhikari</h3>
                                <h2>Client</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.testimonial-section
{
    overflow: hidden;
    margin-top: -50px;
    z-index: 1;
}
.testimonial
{
    background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('~@/assets/images/testi.jpeg');
    background-position: center;
    background-size: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.testi-img
{
    height: 168px;
    width: 168px;
    border-radius: 100%;
    margin: auto;
    border: 3px solid #f8f8f8;
    box-shadow: 0 0 5px 0 #555355;
    margin-top: 12px;
    margin-bottom: 12px;
}
.testi-img img
{
    height: auto;
    width: 100%;
    border-radius: 100%;
    border: 3px solid #ffffff;
}
.testi-info h3
{
    color: #0f783d;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
}
.testi-info h2
{
    color: #ff5601;
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    line-height: 5px;
    font-style: italic;
}
.testi-mess
{
    height: auto;
    width: 60%;
    margin: auto;
}
.testi-mess p
{
    color: #000000;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    text-align: justify;
}
.carousel-indicators li
{
    background-color: #0f783d;
}
.carousel-inner
{
    padding-bottom: 50px;
}
.carousel-inner::after
{
    position: absolute;
    content: "\f10d";
    font-family: "fontawesome";
    color: #0f783d;
    font-size: 40px;
    height: 90px;
    width: 90px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 100px;
}
.carousel-inner::before
{
    position: absolute;
    content: "\f10e";
    font-family: "fontawesome";
    color: #0f783d;
    font-size: 40px;
    height: 90px;
    width: 90px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 100px;
}
.testi-animation
{
    position: relative;
}
.testi-animation img
{
    position: absolute;
    top: 0;
    height: auto;
    animation: testAnimation 10s linear infinite;
}
.testi-animation img:nth-child(1)
{
    opacity: 0.1;
    right: 0;
    width: 80px;
}
.testi-animation img:nth-child(2)
{
    opacity: 0.1;
    left: 0;
    top: 150px;
    width: 80px;
    animation-delay: 5s;
}
@keyframes testAnimation
{
    0%
    {
        transform: translateY(0px);
    }
    50%
    {
        transform: translateY(50px);
    }
    100%
    {
        transform: translateY(0px);
    }
}
@media only screen and (max-width: 767px)
{
    .testi-mess
    {
        width: 90%;
    }
}
@media only screen and (max-width: 600px)
{
    .testi-mess p
    {
        text-align: center;
    }
}
@media only screen and (max-width: 550px)
{
    .title h3
    {
        margin-top: 25px;
    }
}
@media only screen and (max-width: 500px)
{
    .carousel-inner::after
    {
        left: 0;
    }
    .carousel-inner::before
    {
        right: 0;
    }
}
</style>