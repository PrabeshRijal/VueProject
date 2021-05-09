<template>
    <section class="intro-main-section">
        <div class="container" id="info-contaner">
            <div class="row">
                <div class="col-md-6">
                    <div class="codeSastra-intro">
                        <h1> <span :class="{code:isActive}">{{code}}</span><span :class="{sastra: isActive}">{{sastra}}</span> </h1>
                        <p>{{intro}}</p>
                        <div class="know-more-btn">
                            <button @click="navigateToAbout">Know More <i class="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" id="intro-bg-image"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data:()=>({
        code: 'Code',
        sastra: 'Sastra',
        intro: 'We are an end-to-end Information Technology solutions provider and well-established company based in Pokhara, Nepal providing web application development, mobile application, branding and software to local and international companies and organizations.',
        isActive: true
    }),
    methods:{
        navigateToAbout(){
            this.$router.push('/about');
        }
    }
}
</script>

<style scoped>
.intro-main-section
{
    position: relative;
    margin-top: -155px;
}
#info-contaner
{
    background: #fff;
    box-shadow: 0 0 10px 0 #363232;
    border-radius: 10px;
}
.code
{
    color: #0f783d;
}
.sastra
{
    color: #f17e21;
}
.codeSastra-intro
{
    padding: 20px;
}
.codeSastra-intro h1
{
    font-size: 40px;
    font-weight: 700;
}
.codeSastra-intro p
{
    font-size: 20px;
    font-weight: 700;
    text-align: justify;
}
#intro-bg-image
{
    border: 4px solid #fff;
    animation: intro-animation 10s ease infinite;
}
@keyframes intro-animation {
    from{
        background: url('~@/assets/images/intro.jpg');
        background-position: center;
        background-size: 100% 100%;
    }
    to{
        background: url('~@/assets/images/intro2.jpg');
        background-position: center;
        background-size: 100% 100%;
    }
}
.know-more-btn
{
    text-align: center;
}
.know-more-btn button
{
    outline: none;
    background: transparent;
    border:2px solid #f17e21;
    border-radius: 20px;
    padding: 5px 10px;
    color: #f17e21;
    transition: 0.5s;
}
.know-more-btn button:hover 
{
    background: #f17e21;
    color: #fff;
    transform: translateX(10px);
}
@media only screen and (max-width: 767px)
{
    .codeSastra-intro h1
    {
        text-align: center;
        font-size: 34px;
    }
    #intro-bg-image
    {
        height: 320px;
    }
}
</style>