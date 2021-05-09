<template>
    <section class="leader-section">
    <!-- title -->
     <slot></slot>
     <!-- title -->
    <div class="leader-header-container">
        <div class="container">
            <div class="row">
              <div class="col-md-12">
                  <h4>A leader is one who knows the way, goes the way, and shows the way</h4>
                  <p>We believe in connection and quality products</p>
              </div>  
            </div>
        </div>
    </div>
     <div class="container-fluid">
         <div class="row" data-aos="flip-right">
             <div class="col-md-3" v-for="(leaderInfo, key) in leaderInfos" :key="key">
                 <div class="leader-container">
                     <div class="card">
                         <div class="card-body">
                             <img :src="leaderInfo.leaderImg" alt="">
                         </div>
                         <div class="card-footer">
                             <div class="leader-info">
                                 <h1>{{leaderInfo.leaderName}}</h1>
                                 <p>{{leaderInfo.leaderDesig}}</p>
                             </div>
                             <div class="leader-info-icon">
                                 <div class="leader-info-container">
                                     <a :href="leaderInfo.fbLink"><i class="fa fa-facebook"></i></a>
                                 </div>
                                 <div class="leader-info-container">
                                     <a href="#"><i class="fa fa-instagram"></i></a>
                                 </div>
                                 <div class="leader-info-container">
                                     <a href="#"><i class="fa fa-linkedin"></i></a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="meet-team">
             <button @click="navigateToTeam">Meet Our Team <span class="fa fa-arrow-right "></span></button>
         </div>
     </div>
    </section>
</template>

<script>
import anup from '../../assets/images/team/img-ceo.jpg';
import sagar from '../../assets/images/team/co-founder.jpg';
import binod from '../../assets/images/team/Operation-manager.png';
import aatish from '../../assets/images/team/aatish.jpg';
export default {
    data:()=>({
        leaderInfos: [
            {leaderImg: anup, leaderName: 'Anup Acharya', leaderDesig: 'CEO', fbLink: 'https://www.facebook.com/ach.anup'},
            {leaderImg: sagar, leaderName: 'Sagar Koirala', leaderDesig: 'Co-founder', fbLink: 'https://www.facebook.com/audinepal'},
            {leaderImg: binod, leaderName: 'Binod Timilsina', leaderDesig: 'Operation Manager', fbLink: 'https://www.facebook.com/btimilsina1'},
            {leaderImg: aatish, leaderName: 'Aatish Sai', leaderDesig: 'Senior Developer', fbLink: 'https://www.facebook.com/aatish.sai'},
        ]
    }),
    methods:{
        navigateToTeam(){
            this.$router.push('/about');
        }
    }
}
</script>

<style scoped>
.leader-section
{
    overflow: hidden;
    padding-bottom: 25px;
    background-color: #f8f8f8;
    background-image: url('~@/assets/images/my-shape1.png');
    background-repeat: no-repeat;
    background-position: right;
}
.leader-header-container h4
{
    color: #0f783d;
    font-weight: 600;
    font-size: 22px;
    text-align: center;
}
.leader-header-container p
{
    color: #f17e21;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
}
.leader-section .row .col-md-2
{
    margin: auto;
    padding: 0;
}
.leader-container .card:hover > .card-body >img
{
    transform: scale(1.1);
}
.leader-container .card
{
    border: 1.2px solid rgb(221, 218, 218);
    margin: 25px 0;
}
.leader-container .card-body
{
    padding: 0;
    overflow: hidden;
}
.leader-container .card-body img
{
    height: auto;
    width: 100%;
    transition: 0.5s;
}
.leader-container .card-footer
{
    background: #ffffff;
    box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
}
.leader-info h1
{
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    color: #000;
}
.leader-info p
{
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    color: #0f783d;
}
.leader-info-container a i
{
    color: #0f783d;
    font-size: 18px;
}
.leader-info-container
{
    height: 40px;
    width: 40px;
    box-shadow: 0 0 3px 0 rgb(172, 168, 168);
    border-radius: 100%;
    display: inline-grid;
    justify-items: center;
    align-items: center;
    margin: 0px 8px;
    border: 2px solid #f8f8f8;
    transition: 0.5s;
}
.leader-info-icon
{
    display: flex;
    justify-content: center;
}
.leader-info-container:hover
{
    transform: translateY(-5px);
}
.meet-team
{
    text-align: center;
    margin: 25px;
}
.meet-team button
{
    outline: none;
    background: #f17e21;
    border: none;
    border-radius: 20px;
    padding: 5px 30px;
    color: #ffffff;
    transition: 0.5s;
}
.meet-team button:hover
{
    transform: translateX(10px);
}
@media only screen and (max-width: 962px)
{
    .leader-info h1
    {
        font-size: 20px;
    }
}
@media only screen and (max-width: 962px)
{
    .leader-info h1
    {
        font-size: 18px;
    }
    .leader-info p
    {
        font-size: 14px;
    }
}
@media only screen and (max-width: 962px)
{
    .leader-info h1
    {
        font-size: 16px;
    }
    .leader-info p
    {
        font-size: 12px;
    }
}
@media only screen and (max-width: 767px)
{
    .leader-info h1
    {
        font-size: 22px;
    }
    .leader-info p
    {
        font-size: 20px;
    }
    .meet-team
    {
        margin:0;
    }
}
</style>