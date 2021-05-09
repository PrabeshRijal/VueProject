<template>
    <section class="our-team-section">
        <div class="title">
            <h3>Our Team</h3>
            <div class="underline"></div>
        </div>
        <div class="our-team">
            <div class="container" id="team-container">
                <div class="row">
                    <div class="col-md-3" data-aos="zoom-in" v-for="(myTeam, key) in myTeams" :key="key">
                        <div class="card">
                            <div class="content">
                                <h1>{{myTeam.note}}</h1>
                                <div class="social-icons">
                                    <a :href="myTeam.fbLink"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="card-header">
                                <img :src="myTeam.imgSource" alt="">
                            </div>
                            <div class="card-body">
                                <h1>{{myTeam.name}}</h1>
                                <p>{{myTeam.designation}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import imgCeo from '../../../assets/images/team/img-ceo.jpg';
import coFounder from '../../../assets/images/team/co-founder.jpg';
import imgManager from '../../../assets/images/team/Operation-manager.png';
import seniorDeveloper from '../../../assets/images/team/aatish.jpg';
import imgSDeveloper from '../../../assets/images/team/developer.jpg';
import imgDeveloper from '../../../assets/images/team/prabesh_Rijal.png';
import imgContentWriter from '../../../assets/images/team/content.jpg'; 
import imgMarketing from '../../../assets/images/team/marketing.jpg';
export default {
    data:()=>({
        myTeams:[
            {
            imgSource: imgCeo,
            name:'Anup Acharya', 
            designation: 'CEO', 
            note:'Hi! This is Anup Acharya, CEO of CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/ach.anup'
            },
            {
            imgSource: coFounder,
            name:'Sagar Koirala', 
            designation: 'Co-founder', 
            note:'Hi! This is Sagar Koirala, Co-founder of CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/audinepal'
            },
            {
            imgSource: imgManager,
            name:'Binod Timilsina', 
            designation: 'Operation Manager', 
            note:'Hi! This is Binod Timilsina, operation manager at CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/btimilsina1'
            },
            {
            imgSource: seniorDeveloper,
            name:'Aatish Sai', 
            designation: 'Senior Developer', 
            note: 'Hi! This is Aatish Sai, senior developer at CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/aatish.sai'
            },
            {
            imgSource: imgSDeveloper,
            name:'Bimal Sharma', 
            designation: 'Backend Developer', 
            note: 'Hi! This is Bimal Sharma, backend developer at CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/brsbimal'
            },
            {
            imgSource: imgDeveloper,
            name:'Prabesh Rijal', 
            designation: 'Frontend Developer', 
            note: 'Hi! This is Prabesh Rijal, frontend developer at CodeSastra. You can find me on..',
            fbLink:'https://www.facebook.com/prabesh.rijal'
            },
            {
            imgSource: imgContentWriter,
            name:'Asmita Khanal', 
            designation: 'Content Writer', 
            note: 'Hi! This is Asmita Khanal, content writer at CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/asmita.khanal.1422'
            },
            {
            imgSource: imgMarketing,
            name:'Bibek Baral', 
            designation: 'Marketing Manager', 
            note:'Hi! This is Bibek Baral, marketing manager at CodeSastra. You can find me on..',
            fbLink: 'https://www.facebook.com/bibek.baral.92'
            }
        ]
    })
}
</script>

<style scoped>
#team-container
{
    margin-bottom: 50px;
}
.our-team-section
{
    background: #f8f8f8;
    margin-top: 50px;
    overflow: hidden;
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
.card
{
    box-shadow: 0 0 10px 0 #777272;
    border: none;
    outline: none;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    margin: 20px 0;
}
.card-header
{
    border: none;
    padding: 0;
}
.card-header img
{
    height: auto;
    width: 100%;
}
.card-body h1
{
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #000;
}
.card-body p
{
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    color: #0f783d;
}
.content
{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #0f783dc7;
    left: -100%;
    padding: 10px;
    transition: 0.5s;
}
.content h1
{
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-top: 55%;
}
.content .social-icons
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.content .social-icons a
{
    text-decoration: none;
    color: #fff;
    font-size: 28px;
    padding: 8px;
    transition: 0.5s;
}
.content .social-icons a:hover
{
    color: #f17e21;
}
.card:hover .content
{
    left:0;
}
</style>