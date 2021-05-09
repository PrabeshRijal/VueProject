<template>
    <section class="sub-portfolio-section">
        <div class="container sub-portfolio-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="portfolio">
                        <p>We want to help our clients communicate better with their audience. The print is the most traditional, trusted and treasured way to reach out. At the same time, web and mobile channels are of increasing importance as each day goes by. We offer simple, modern and extensible solutions to leverage these channels and their capabilities to meet your brand needs and objectives.</p>
                    </div>
                </div>
            </div>
        </div>
        <app-tab-view></app-tab-view>
        <app-why></app-why>
    </section>
</template>

<script>
import Why from '../SubPortfolio/SubWhy.vue';
import TabView from '../SubPortfolio/TabView.vue';
export default {
    components:{
        appWhy: Why,
        appTabView: TabView
    }
}
</script>

<style scoped>
.sub-portfolio-container
{
    background: #fff;
    box-shadow: 0 0 10px 0 #363232;
    border-radius: 10px;
    position: relative;
    margin-top: -155px;
}
.portfolio::before
{
    content: "Our Portfolio";
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
.portfolio
{
    padding: 20px;
}
.portfolio p
{
    font-size: 20px;
    font-weight: 700;
    text-align: justify;
    margin-top: 50px;
}
@media only screen and (max-width: 767px)
{
    .portfolio::before
    {
        height: 76px;
        width: 296px;
        font-size: 22px;
    }
}
</style>