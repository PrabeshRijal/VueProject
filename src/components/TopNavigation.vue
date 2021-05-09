<template>
    <section class="top-navigation-section">
        <div class="top-deco">
            <img src="~@/assets/images/shapes.png" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="top-info">
                        <a href="#" v-for="(topList, key) in topLists" :key="key"><i :class="topList.icon"></i> {{topList.info}} </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="top-contact-btn">
                        <button data-toggle="modal" data-target="#myModal">Contact Now</button>
                    </div>
                    <!-- The Modal -->
                    <div class="container">
                        <div class="modal fade" id="myModal">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="modal-title">Feel Free To Contact Us</h4>
                                        <button id="modal-close-btn" type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <!-- Modal body -->
                                    <div class="modal-body" id="modal-body">
                                        <app-contact></app-contact>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- The Modal -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Contact from './childs/Contact.vue'
export default {
    components:{
        appContact: Contact
    },
    data:()=>({
        topLists: [
            {info:'061-530625 / 9846554372',icon:'fa fa-phone'},
            {info:'Sun-Fri (10AM-5PM)', icon:'fa fa-clock-o'}
        ]
    })
}
</script>

<style scoped>
.top-navigation-section
{
    background: #252163b3;
    overflow: hidden; 
    border-bottom-right-radius: 22px;
    border-bottom-left-radius: 22px;
    box-shadow: 0 0 5px 0 #000;
}
.top-deco img
{
    position: absolute;
    top: 3px;
    right: 5px;
    transform: rotate(90deg);
    width: 3%;
}
.top-info
{
    margin-top: 14px;
}
.top-info a
{
    color: #fff;
    font-size: 15px;
    font-weight: 650;
    margin: 0px 10px;
    text-decoration: none;
    margin-top: 10px;
}
.top-info a i
{
    font-size: 20px;
}
.top-info a:hover
{
    text-decoration: none;
}
.top-contact-btn
{
    float: right;
    padding: 8px 0;
}
.top-contact-btn button
{
    background: #f17e21;
    outline: none;
    border: 2px solid #fff;
    border-radius: 20px;
    color: #fff !important;
    padding: 5px 12px;
    font-size: 14px;
    transition: 0.5s;
}
.top-contact-btn:hover button
{
    background: transparent;
}
#modal-body
{
    padding: 0px;
}
#myModal
{
    padding-left: 17px;
}
.modal-xl
{
    max-width: 1350px;
}
.modal-title
{
    font-weight: 700;
}
#modal-close-btn
{
    outline: none;
    color: #f14b21;
    font-size: 40px;
}
@media only screen and (max-width: 992px)
{
    .top-info a
    {
        font-size:12px;
        margin: 0px 2px;
    }
}
</style>