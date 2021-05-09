<template>
    <section class="my-tab-section">
        <Tabs>
        <Tab name="All" selected="true">
            <!-- <span id="tab-indicator">All <i class="fa fa-angle-double-down"></i></span> -->
            <div class="tab-all-img" data-aos="fade-up">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 portfolio-img-container" v-for="(allArrayList, key) in allArrayLists" :key="key">
                            <a :href="allArrayList.clientLink" target="_blank"><img :src="allArrayList.portfolioTabImg"></a>
                        </div>
                    </div>
                </div>
            </div>
        </Tab>
        <!-- ------------------------------ -->
        <Tab name="Education">
            <span id="tab-indicator">Education <i class="fa fa-angle-double-down"></i></span>
            <div class="tab-all-img">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 portfolio-img-container" v-for="(educationArrayList, key) in educationArrayLists" :key="key">
                            <a :href="educationArrayList.portfolioTabImg" data-lightbox="mygallery"><img :src="educationArrayList.portfolioTabImg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </Tab>
        <!-- ------------------------------ -->
        <Tab name="Corporate">
            <span id="tab-indicator">Corporate <i class="fa fa-angle-double-down"></i></span>
            <div class="tab-all-img">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 portfolio-img-container" v-for="(corporateArrayList, key) in corporateArrayLists" :key="key">
                            <a :href="corporateArrayList.portfolioTabImg" data-lightbox="mygallery"><img :src="corporateArrayList.portfolioTabImg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </Tab>
        <!-- ------------------------------ -->
        <Tab name="Media & Blog">
            <span id="tab-indicator">Media & Blog <i class="fa fa-angle-double-down"></i></span>
            <div class="tab-all-img">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 portfolio-img-container" v-for="(mediaArrayList, key) in mediaArrayLists" :key="key">
                            <a :href="mediaArrayList.portfolioTabImg" data-lightbox="mygallery"><img :src="mediaArrayList.portfolioTabImg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </Tab>
        <Tab name="Pokhara Ward">
            <span id="tab-indicator">Pokhara Ward <i class="fa fa-angle-double-down"></i></span>
            <div class="tab-all-img">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 portfolio-img-container" v-for="(wardArrayList, key) in wardArrayLists" :key="key">
                            <a :href="wardArrayList.portfolioTabImg" data-lightbox="mygallery"><img :src="wardArrayList.portfolioTabImg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </Tab>
        </Tabs>
    </section>
</template>

<script>
import Tab from '../SubPortfolio/Tab.vue';
import Tabs from '../SubPortfolio/Tabs.vue';
import motherland from '../../../assets/images/portfolio/portfolio-motherland.jpg';
import danfesaving from '../../../assets/images/portfolio/portfolio-danfesaving.jpg';
import sagarmatha from '../../../assets/images/portfolio/portfolio-sagarmatha.jpg';
import pahs from '../../../assets/images/portfolio/portfolio-pahs.jpg';
import pokhara5 from '../../../assets/images/portfolio/portfolio-pokhara5.jpg';
import pokhara8 from '../../../assets/images/portfolio/portfolio-pokhara8.jpg';
import pokhara9 from '../../../assets/images/portfolio/portfolio-pokhara9.jpg';
import pokhara11 from '../../../assets/images/portfolio/portfolio-pokhara11.jpg';
import pokhara13 from '../../../assets/images/portfolio/portfolio-pokhara13.jpg';
import pokhara16 from '../../../assets/images/portfolio/portfolio-pokhara16.jpg';
import royalpokhara from '../../../assets/images/portfolio/portfolio-royalpokhara.jpg';
import mw from '../../../assets/images/portfolio/portfolio-3mw.jpg';
import asapent from '../../../assets/images/portfolio/portfolio-asapent.jpg';
import buddha from '../../../assets/images/portfolio/portfolio-buddha.jpg';
import dungarestro from '../../../assets/images/portfolio/portfolio-dungarestro.jpg';
import farmerhousenepal from '../../../assets/images/portfolio/portfolio-farmerhousenepal.jpg';
// import fewaictrading from '../../../assets/images/portfolio/portfolio-fewaictrading.jpg';
import fishtailtrek from '../../../assets/images/portfolio/portfolio-fishtailtrek.jpg';
import gandakitroutfarm from '../../../assets/images/portfolio/portfolio-gandakitroutfarm.jpg';
import gurungbeautyacademy from '../../../assets/images/portfolio/portfolio-gurungbeautyacademy.jpg';
import hotelbrothersinn from '../../../assets/images/portfolio/portfolio-hotelbrothersinn.jpg';
import hotelkalash from '../../../assets/images/portfolio/portfolio-hotelkalash.jpg';
import hotelpinakini from '../../../assets/images/portfolio/portfolio-hotelpinakini.jpg';
// import hpn from '../../../assets/images/portfolio/portfolio-hpn.jpg';
import inspireglobaledu from '../../../assets/images/portfolio/portfolio-inspireglobaledu.jpg';
import jca from '../../../assets/images/portfolio/portfolio-jca.jpg';
// import mandaraspanepal from '../../../assets/images/portfolio/portfolio-mandaraspanepal.jpg';
import mho from '../../../assets/images/portfolio/portfolio-mho.jpg';
import needsacademy from '../../../assets/images/portfolio/portfolio-needsacademy.jpg';
import nepalaya from '../../../assets/images/portfolio/portfolio-nepalaya.jpg';
import pthmiwhsa from '../../../assets/images/portfolio/portfolio-pthmiwhsa.jpg';
import shenepal from '../../../assets/images/portfolio/portfolio-shenepal.jpg';
// import shivalaya from '../../../assets/images/portfolio/portfolio-shivalaya.jpg';
import spacedecor from '../../../assets/images/portfolio/portfolio-spacedecor.jpg';
export default {
    components:{
        Tab,
        Tabs
    },
    data:()=>({
        allArrayLists:[
            {portfolioTabImg: motherland, clientLink:'http://motherland.edu.np/'},
            {portfolioTabImg : danfesaving, clientLink:'http://danfesaving.coop.np/'},
            {portfolioTabImg : sagarmatha, clientLink:'http://sagarmathapokhara.edu.np/'},
            {portfolioTabImg : pahs, clientLink:'http://pahs.gov.np/'},
            {portfolioTabImg : pokhara5, clientLink:'http://pokhara5.org/'},
            {portfolioTabImg : pokhara8, clientLink:'http://pokhara8.org/'},
            {portfolioTabImg : pokhara9, clientLink:'http://pokhara9.org/'},
            {portfolioTabImg : pokhara11, clientLink:'http://pokhara11.org/'},
            {portfolioTabImg : pokhara13, clientLink:'http://pokhara13.org/'},
            {portfolioTabImg : pokhara16, clientLink:'http://pokhara16.org/'},
            {portfolioTabImg : royalpokhara, clientLink:'http://royalcooperative.com/' },
            {portfolioTabImg : mw, clientLink:'http://3mw.com.np/' },
            {portfolioTabImg : asapent, clientLink:'http://asapent.com.np/' },
            {portfolioTabImg : buddha, clientLink:'http://buddhabeautysalon.com/' },
            {portfolioTabImg : dungarestro, clientLink:'http://dungarestro.com.np/' },
            {portfolioTabImg : farmerhousenepal, clientLink:'http://farmerhousenepal.com/' },
            {portfolioTabImg : fishtailtrek, clientLink:'http://fishtailtrek.com/'},
            // {portfolioTabImg : fewaictrading },
            {portfolioTabImg : gandakitroutfarm, clientLink:'http://gandakitroutfarm.com/'},
            {portfolioTabImg : gurungbeautyacademy, clientLink:'http://guurngbeautyacademy.com/'},
            {portfolioTabImg : hotelbrothersinn, clientLink:'http://hotelbrothersinn.com/'},
            {portfolioTabImg : hotelkalash, clientLink:'http://hotelkalash.com/'},
            {portfolioTabImg : hotelpinakini, clientLink:'http://hotelpinakini.com/'},
            // {portfolioTabImg : hpn },
            {portfolioTabImg : inspireglobaledu, clientLink:'http://inspireglobaledu.com.np/'},
            {portfolioTabImg : jca, clientLink:'http://jca.edu.np/'},
            // {portfolioTabImg : mandaraspanepal },
            {portfolioTabImg : mho, clientLink:'http://mhostudio.com/'},
            {portfolioTabImg : needsacademy, clientLink:'http://needsacademy.edu.np/'},
            {portfolioTabImg : nepalaya, clientLink:'http://nepalaya.org.np/'},
            {portfolioTabImg : pthmiwhsa, clientLink:'http://pthmiwhsa.edu.np/'},
            {portfolioTabImg : shenepal, clientLink:'http://shenepal.org.np/'},
            // {portfolioTabImg : shivalaya },
            {portfolioTabImg : spacedecor, clientLink:'http://spacedecorinterior.com/'},
        ],
        educationArrayLists:[
            {portfolioTabImg: motherland},
            {portfolioTabImg : sagarmatha },
            {portfolioTabImg : pahs },
             {portfolioTabImg : jca },
             {portfolioTabImg : needsacademy }
        ],
        corporateArrayLists:[
            {portfolioTabImg : danfesaving },
            {portfolioTabImg : royalpokhara }
        ],
        mediaArrayLists:[
            {portfolioTabImg : mho }
        ],
        wardArrayLists:[
            {portfolioTabImg : pokhara5 },
            {portfolioTabImg : pokhara8 },
            {portfolioTabImg : pokhara9 },
            {portfolioTabImg : pokhara11 },
            {portfolioTabImg : pokhara13 },
            {portfolioTabImg : pokhara16 }
        ]
    })
    
}
</script>

<style scoped>
.my-tab-section
{
    overflow: hidden;
}
.portfolio-img-container img
{
    height: 270px;
    width: 100%;
    margin-top: 24px;
    filter: grayscale(100%);
    transition: 0.5s;
}
.portfolio-img-container img:hover
{
    filter: grayscale(0);
    transform: scale(1.1);
}
#tab-indicator
{
    font-weight: 700;
    font-size: 24px;
    color: #0f783d;
}
#tab-indicator i
{
    color: #f17e21;
}
</style>