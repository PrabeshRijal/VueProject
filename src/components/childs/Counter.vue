<template>
    <section class="counter-section">
        <div class="counter-main-container">
            <!-- title -->
            <slot></slot>
            <!-- title -->
            <div class="container">
                <div class="row" id="my-promo-video">
                    <div class="col-md-6">
                        <video height="100%" width="100%" controls>
                            <source src="~@/assets/images/promovideo/CodeSatra_Promotional_vide.mp4">
                        </video>
                    </div>
                    <div class="col-md-6">
                        <p>{{myIntro}}</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4" data-aos="fade-up" v-for="(counterList, key) in counterLists" :key="key">
                        <div class="counting-number-info">
                            <span :class="counterList.counterIcon" id="counting-number-icon"><br><span id="counting-number-val" class="count">{{counterList.number}}</span>+</span>
                            <p>{{counterList.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data:()=>({
        myIntro: 'We are an end-to-end Information Technology solutions provider and well-established company based in Pokhara, Nepal providing web application development, mobile application, branding and software to local and international companies and organizations.',
        counterLists: [
            {title:'Years Experience', number:5, counterIcon:'fa fa-wpforms'},
            {title:'Project Dones', number:109, counterIcon:'fa fa-thumbs-up'},
            {title:'Happy Customers', number:102, counterIcon:'fa fa-smile-o'}
        ]
    })
}
</script>

<style scoped>
.counter-section
{
    background: linear-gradient(90deg, rgba(37,33,99,0.8) 100%, rgba(0,212,255,1) 100%),url('~@/assets/images/counter.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-bottom: 25px;
    overflow: hidden;
}
#my-promo-video
{
    margin-bottom: 50px;
}
#my-promo-video p
{
    color: #ffffff;
    font-weight: 600;
    font-size: 18px;
    margin-top: 60px;
    text-align: start;
}
.counting-number-info #counting-number-icon
{
	color: #fff;
	font-size: 50px;
}
.counting-number-info
{
    text-align:center;
}
.counting-number-info #counting-number-val
{
	font-size: 50px;
	color: #fff;
    font-weight: bolder;
}
.counting-number-info p
{
	color: #fff;
	font-size: 26px;
	font-weight: 1000;
}
@media only screen and (max-width: 767px)
{
    .counting-number-info #counting-number-icon
    {
        margin-top: 25px;
    }
    .counting-number-info p
    {
        font-size: 22px;
    }
    #my-promo-video p
    {
        margin-top: 10px;
        text-align: center;
        font-weight: 500;
    }
    #my-promo-video
    {
        margin-bottom: 10px;
    }
}
</style>