<template>
    <article>
        <div class="container">
            <div class="tab-info">
                <h4>Our Featured Clients</h4>
                <p>IT EXPERIENCE</p>
                <img src="~@/assets/images/shapes.png" alt="">
            </div>
            <!-- <header class="tabs">
            <ul >
                <li v-for="(tab, key) in tabs" :key="key">
                    <div class="nav-item" @click="selectTab(tab)">
                        {{tab.name}}
                    </div>
                </li>
            </ul>
        </header> -->
        <section class="tabs-details">
            <slot></slot>
        </section>
        </div>
    </article>
</template>

<script>
export default {
    // data:()=>({
    //     tabs:[]
    // }),
    // methods:{
    //     selectTab(selectedTab){
    //         this.tabs.forEach(tab=>{
    //             tab.isActive = tab.name ===selectedTab.name;
    //         })
    //     }
    // },
    // created(){
    //     this.tabs = this.$children;
    // }
}
</script>

<style scoped>
.tabs
{
    margin-top: 50px;
    margin-bottom: 25px;
    border-bottom: 1.1px solid rgb(190, 189, 189);
}
.tab-info 
{
    position: relative;
}
.tab-info h4
{
    color: #0f783d;
    font-weight: 600;
    font-size: 40px;
    margin-top: 25px;
}
.tab-info p
{
    color: #f17e21;
    font-weight: 600;
    font-size: 18px;
}
.tab-info img
{
    position: absolute;
    top: 0;
    z-index: -1;
    transform: rotate(90deg);
}
.tabs ul
{
    width: 100%;
}
.tabs ul li
{
    list-style: none;
    display: inline-flex;
    margin-right: 50px;
    font-size: 25px;
    font-weight: 500;
}
.tabs ul li:hover
{
    color: #0f783d;
    cursor: pointer;
}
@media only screen and (max-width: 1050px)
{
    .tabs ul li
    {
        margin-right: 30px;
        font-size: 20px;
    }
}
@media only screen and (max-width: 767px)
{
    .tabs ul li
    {
       display: block;
    }
    .tabs
    {
        margin-top: 5px;
    }
}
@media only screen and (max-width: 600px)
{
    .tab-info h4
    {
        font-size: 26px;
    }
}
</style>