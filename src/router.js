import AppView from './components/SubComponents/AppView.vue';
import SubServices from './components/SubComponents/SubServices.vue';
import SubAbout from './components/SubComponents/SubAbout/SubAbout.vue';
import SubPortfolio from './components/SubComponents/SubPortfolio/SubPortfolio.vue';
import SubContact from './components/SubComponents/SubContact/SubContact.vue';
import Error from './components/SubComponents/Error.vue';

export const routes = [
    {path:'/', component: AppView, name:'appView'},
    {path:'/services', component: SubServices, name:'services'},
    {path:'/about', component: SubAbout, name:'about'},
    {path:'/portfolio', component: SubPortfolio, name:'portfolio'},
    {path:'/contact', component: SubContact, name:'contact'},
    {path:'*', component: Error}
]