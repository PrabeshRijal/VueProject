<template>
    <section class="contact-section">
        <!-- title -->
        <slot></slot>
        <!-- title -->
        <div class="sub-contact-header">
            <p>OUR CONTACTS</p>
            <h3>Please feel free to ask, We’re Here to Help You.</h3>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="my-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.841637346817!2d83.97643480000828!3d28.212123601161807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595aac06d55bf%3A0xde908bd5347d6c9a!2sCode%20Sastra%20Private%20Limited!5e0!3m2!1sen!2snp!4v1580550530260!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact form -->
        <div class="container" id="contact-container-alignment">
            <div class="row">
                <div class="col-md-4">
                    <div class="contact-image">
                        <img src="~@/assets/images/img-01.png" alt="">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="my-contact-form">
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Full Name">
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" placeholder="Email Phone">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email Address">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Message/Feedback"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="send-btn">
                        <button>Send <i class="fa fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact form -->
    </section>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.contact-section
{
    overflow: hidden;
    background: #f8f8f8;
    padding-bottom: 50px;
    padding-top: 50px;
    margin-top: 60px;
    background-image: url('~@/assets/images/my-shape1.png');
    background-repeat: no-repeat;
}
.sub-contact-header h3
{
    color: #000;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    margin-bottom: 25px;
}
.sub-contact-header p
{
    color: #f17e21;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
}

@media only screen and (max-width: 767px)
{
    .sub-contact-header h3
    {
        font-size: 22px;
    }
}
.my-map
{
    box-shadow: 0 0 8px 0 #5e5b5b;
}
.my-contact::before
{
    content: "\f0e5";
    font-family: fontAwesome;
    color: #f17e21;
    font-size: 26px;
    position: absolute;
    height: 80px;
    width: 80px;
    background: #f8f8f8;
    border:3px solid #252163;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top:-90px;
    right: 0;
    box-shadow: 0 0 8px 0 #5e5b5b;
}
#contact-container-alignment
{
    position: relative;
    margin-top: -60px;
    box-shadow: 0 0 10px 0 #777779;
    border-radius: 16px;
    padding: 50px;
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('~@/assets/images/intro.jpg');
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
}
.my-contact-form::before
{
    content: "\f0e5";
    font-family: fontAwesome;
    color: #f17e21;
    font-size: 26px;
    position: absolute;
    height: 80px;
    width: 80px;
    background: #f8f8f8;
    border:3px solid #252163;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top:-90px;
    right: 0;
    box-shadow: 0 0 8px 0 #5e5b5b;
}
.my-contact-form-heading h1
{
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #fff !important;
}
.contact-image
{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.contact-image img
{
    height: auto;
    width: 75%;
    animation: img-animation 5s linear infinite;
}
::placeholder
{
    font-size: 18px;
    text-align: center;
}
@keyframes img-animation
{
    0%{transform: rotateZ(0deg);}
    25%{transform: rotateZ(5deg);}
    50%{transform: rotateZ(5deg);}
    75%{transform: rotateZ(-10deg);}
    100%{transform: rotateZ(0deg);}
}
.form-group
{
    margin-top: 30px;
}
.send-btn
{
    text-align: center;
}
.send-btn button
{
    height: 40px;
    width: 120px;
    color: #fff;
    background: #f17e21;
    border:2px solid #fff;
    border-radius: 25px;
    box-shadow: 0 0 8px 0 #8b8585;
    transition: 0.5s;
}
.send-btn button:hover
{
    transform: translateX(10px);
}
@media only screen and (max-width: 767px)
{
    #contact-container-alignment
    {
        padding: 0;
        padding-right:20px;
        padding-left:20px;
    }
    .send-btn button
    {
        margin-bottom: 25px;
    }
    .contact-image img
    {
        width: 50%;
    }
    .my-contact-form::before
    {
        height: 70px;
        width: 70px;
        top: -290px;
        right: 36px;
    }
}
@media only screen and (max-width: 556px)
{
    .my-contact-form::before
    {
        top: -278px;
    }
    .sub-contact-header h3
    {
        margin: 12px 12px;
    }
}
@media only screen and (max-width: 500px)
{
    .my-contact-form::before
    {
        top: -256px;
    }
}
@media only screen and (max-width: 457px)
{
    .my-contact-form::before
    {
        top: -240px;
    }
}
@media only screen and (max-width: 424px)
{
    .my-contact-form::before
    {
        top: -220px;
    }
}
@media only screen and (max-width: 388px)
{
    .my-contact-form::before
    {
        display: none;
    }
}
</style>