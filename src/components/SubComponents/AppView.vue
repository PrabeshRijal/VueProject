<template>
    <section class="app-view-section">
        <app-intro></app-intro>
        <app-services><div class="title"><h3>{{servicesTitle}}</h3><div class="underline"></div></div></app-services>
        <app-experience></app-experience>
        <app-why-choose><div class="title"><h3 :class="{textWhite:textWhite}">{{whyChooseTitle}}</h3><div class="underline" :class="{backgroundWhite: backgroundWhite}"></div></div></app-why-choose>
        <app-testimonial><div class="title"><h3>{{testimonialTitle}}</h3></div><div class="underline"></div></app-testimonial>
        <app-counter><div class="title"><h3 :class="{textWhite:textWhite}">{{counterTitle}}</h3><div class="underline"  :class="{backgroundWhite: backgroundWhite}"></div></div></app-counter>
        <app-leaders><div class="title"><h3>{{leaderTitle}}</h3><div class="underline"></div></div></app-leaders>
        <app-contact><div class="title"><h3>{{contactTitle}}</h3><div class="underline"></div></div></app-contact>
        <app-our-client><div class="title"><h3>{{ourClientTitle}}</h3><div class="underline"></div></div></app-our-client>
    </section>
</template>

<script>
import Leaders from '../childs/Leaders';
import Services from '../childs/Services.vue';
import Intro from '../childs/Intro.vue';
import WhyChoose from '../childs/WhyChoose.vue';
import Counter from '../childs/Counter.vue';
import Contact from '../childs/Contact.vue';
import Testimonial from '../childs/Testimonial.vue';
import OurClient from '../childs/OurClient.vue';
import Experience from '../childs/Experience.vue';
export default {
    components: {  
        appIntro:Intro,   
        appServices: Services,
        appExperience: Experience,
        appWhyChoose: WhyChoose,
        appTestimonial: Testimonial,
        appCounter: Counter, 
        appContact: Contact,
        appLeaders: Leaders,
        appOurClient: OurClient
    },
    data:()=>({
        servicesTitle: 'Our Services',
        whyChooseTitle: 'Why Choose Us',
        counterTitle: 'Another Reason To Choose Us',
        contactTitle: 'Feel Free To Contact',
        testimonialTitle: 'What People Says',
        ourClientTitle: 'OUR FEATURED CLIENTS',
        leaderTitle:'Meet Our Leadership',
        textWhite: true,
        backgroundWhite: true
    })
}
</script>

<style scoped>
.title h3
{
    font-size: 48px;
    text-align: center;
    padding-top: 50px;
    color: #000;
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
.backgroundWhite
{
    background: #fff !important;
}
.textWhite
{
    color: #fff !important;
}
@media only screen and (max-width: 767px)
{
    .title h3
    {
        font-size: 36px;
    }
}
@media only screen and (max-width: 556px)
{
    .title h3
    {
        font-size: 28px;
    }
}
</style>