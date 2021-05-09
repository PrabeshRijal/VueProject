<template>
    <section>
            <div class="why-choose-section">
                <div class="title">
                    <h3>Why Choose Us</h3>
                    <div class="underline"></div>
                </div>
                <div class="why-choose-container">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3" v-for="(whyList, key) in whyLists" :key="key">
                                <div class="why-wrapper">
                                    <div class="why-image-wrapper">
                                        <img :src="whyList.imgWhy" alt="">
                                    </div>
                                    <h1>{{whyList.header}}</h1>
                                    <p>{{whyList.whyExplain}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
import imgGift from '../../../assets/images/icons/gift.png';
import imgHonest from '../../../assets/images/icons/honest.png';
import imgCustomer from '../../../assets/images/icons/customer-service.png';
import imgHelp from '../../../assets/images/icons/help.png';
import imgGoal from '../../../assets/images/icons/goal.png';
import imgIdea from '../../../assets/images/icons/idea.png';
import imgSafety from '../../../assets/images/icons/safety.png';
import imgIteration from '../../../assets/images/icons/iteration.png';
export default {
data:()=>({
        whyLists: [
            {header:'Exceptional Quality', whyExplain:'CodeSastra provide a good quality product with Quality Assurance Process.', imgWhy: imgGift},
            {header:'Honest & Ethic', whyExplain:'CodeSastra provide a good quality product with Quality Assurance Process.', imgWhy: imgHonest},
            {header:'Customer Service', whyExplain:'CodeSastra will be always ready for customer support.', imgWhy: imgCustomer},
            {header:'Helpful Expert', whyExplain:'We have helpful expert who are always availabel for help.', imgWhy: imgHelp},
            {header:'Independent & Objective', whyExplain:'CodeSastra team is heighly dedicated in order to reach the targeted goals.', imgWhy: imgGoal},
            {header:'Technology & Practice', whyExplain:'We have heighly qualified manpower for turing your ideas into technology.', imgWhy: imgIdea},
            {header:'Secure System', whyExplain:'Final product of CodeSastra will be well tested and secure with low vulnerability', imgWhy: imgSafety},
            {header:'Agility', whyExplain:'We respect our client for respond to change. On the basis of client feedback, agility will be implemented.', imgWhy: imgIteration},
        ]
    })
}
</script>

<style scoped>
.why-choose-section
{
    overflow: hidden;
    margin-top: 50px;
}
.why-image-wrapper img
{
    height: 65%;
    width: 65%;
}
.why-image-wrapper
{
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: auto;
    background: #f17e21;
    margin-top: 20px;
}
.title h3
{
    font-size: 48px;
    text-align: center;
    color: #000;
    margin-top: 25px;
}
.underline
{
    height: 4px;
    width: 16%;
    background: #0f783d;
    margin: auto;
    border-radius: 100%;
    margin-bottom: 2%;
}
.why-wrapper h1
{
    color: #0f783d !important;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-top: 15px;
}
.why-wrapper p
{
    color: rgb(136, 135, 135) !important;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    margin-top: 15px;
}
.why-btn
{
    text-align: center;
}
.why-btn button
{
    outline: none;
    background: transparent;
    border-radius: 20px;
    padding: 5px 30px;
    color: #f17e21;
    transition: 0.5s;
}
.why-wrapper
{
    padding: 25px;
    transition: 0.5s;
}
.why-wrapper:hover
{
    background: transparent;
    box-shadow: 0 0 10px 0 rgb(172, 164, 164);
    border-radius: 10px;
    transform: translateY(-5px);
}
</style>