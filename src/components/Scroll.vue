<template>
    <section class="scroll-to-top-section dnone" id="scroll">
        <div class="scroll-btn">
            <a href="#"><i class="fa fa-arrow-up"></i></a>
        </div>
    </section>
</template>

<script>
export default {
    methods:{
        scrollTopFunction(){
            let scrollTarget = document.getElementById("scroll");
            let scrollPosition = window.scrollY;

            if( scrollPosition < 400){
                scrollTarget.classList.add('dnone');
            }
            else
            {
                scrollTarget.classList.remove('dnone');
            }
        }
    },
    created: function(){
        window.addEventListener('scroll', this.scrollTopFunction);
    }
}
</script>

<style scoped>
.scroll-to-top-section
{
    overflow: hidden;
}
.scroll-btn 
{
    height: 40px;
    width: 40px;
    background: #f17e21;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0 0 5px 0 rgb(119, 119, 119);
    z-index: 25;
    position: fixed;
    bottom:25px;
    right: 25px;
    transition: 0.5s;
}
.scroll-btn a
{
    color: #fff !important;
    display: block;
    font-size: 20px;
}
.scroll-btn:hover
{
    background: #0f783d;
}
.dnone
{
    display: none;
}
@media only screen and (max-width:767px)
{
    .scroll-btn
    {
        height: 40px;
        width: 40px;
    }
    .scroll-btn a
    {
        font-size: 16px;
    }
}
</style>