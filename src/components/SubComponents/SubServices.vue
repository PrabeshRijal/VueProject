<template>
     <section class="sub-services-section">
        <div class="container sub-services-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="services">
                        <div class="container services-container">
                            <div class="row">
                                <div class="col-md-4" v-for="(serviceList, key) in serviceLists " :key="key">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="services-icon">
                                                <i :class="serviceList.serviceIcon"></i>
                                            </div>
                                            <div class="services-info">
                                                <h1>{{serviceList.serviceTitle}}</h1>
                                                <p>{{serviceList.more}}</p>
                                            </div>
                                        </div>
                                    </div>
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
    data:()=>({
        serviceLists: [
            {serviceTitle: 'Branding', serviceIcon:'fa fa-paint-brush', more:"Wheather you're launching new brand, or in need of a revamp, we at CodeSastra can help take your brand to next level providing service like Logo Design, Package Design, Corporate Identity and many others."},
            {serviceTitle: 'Illustration', serviceIcon:'fa fa-pencil-square-o', more:"When you are in need of some fine Illustration, you will find that the professionals we work with at CodeSastra fulfill all your needs. Flyers, Event Poster, Pamphlets, Brochures we got you all covered."},
            {serviceTitle: 'Marketing', serviceIcon:'fa fa-bullhorn', more:"Want to get into social media marketing, but don't know how? Contact us to discuss social media marketing opportunities that fit your business. We provide you the best marketing strategies"},
            {serviceTitle: 'Web Design', serviceIcon:'fa fa-globe', more:"Web design is a similar process of creation, with the intention of presenting the content on electronic web pages, which the end-users can access through internet with the help of a web browser."},
            {serviceTitle: 'Word Press', serviceIcon:'fa fa-wordpress', more:"Codesastra provides wordpress development services for personal website, business websites, and nonprofit organization website and e-commerce stores."},
            {serviceTitle: 'Web Development', serviceIcon:'fa fa-line-chart', more:"We provide a range of high-value social media consultancy services through which we help you to achieve tangible results from their social media activities"}
        ]
    })
}
</script>

<style scoped>
.sub-services-section
{
    padding-bottom: 25px;
}
.sub-services-container
{
    background: #fff;
    box-shadow: 0 0 10px 0 #363232;
    border-radius: 10px;
    position: relative;
    margin-top: -155px;
    background-image: url('~@/assets/images/abstract.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.services::before
{
    content: "Our Services";
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
.services-icon
{
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background: #fff;
    border: 6px solid #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    transition: 0.5s;
}
.services-icon i
{
    font-size: 40px;
    color: #252163;
}
.services-info h1
{
    font-size: 25px;
    font-weight: 600;
    color: #000 !important;
    text-align: center;
    margin-top: 16px;
    text-shadow: 1px 1px 10px #ffffffbf;
}
.services-info p
{
    font-size: 18px;
    text-align: justify;
    color: #000 !important;
    font-weight: 700;
    margin-top: 16px;
}
.card
{
    border: none;
    border-radius: 5px;
    margin: 20px 0;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px 0 #363232;
    height: 440px;
    transition: 0.5s;
}
.card:hover
{
    transform: translateY(-10px);
    background-color: #fff !important;
}
.card:hover .services-icon
{
    border: 6px solid #252163;
}
.services-container
{
    padding-top: 70px;
    padding-bottom: 70px;
}
@media only screen and (max-width: 992px)
{
    .services-info p
    {
        font-size: 15px;
        text-align: start;
    }
    .services-info h1
    {
        font-size: 18px;
    }
}
@media only screen and (max-width: 767px)
{
    .services::before
    {
        height: 76px;
        width: 296px;
        font-size: 22px;
    }
    .sub-services-container
    {
        background-size:auto ;
    }
    .services-info p
    {
        font-size: 18px;
    }
    .card
    {
        height: auto;
    }
    .services-info p
    {
        font-size: 18px;
    }
    .services-info h1
    {
        font-size: 22px;
    }
}
</style>