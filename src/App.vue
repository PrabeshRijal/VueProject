<template>
  <div id="id">
    <app-flash-screen></app-flash-screen>
    <app-main-navigation></app-main-navigation>
    <transition appear enter-active-class="animate__animated animate__zoomIn animate__faster" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
    <app-copy></app-copy>
    <app-scroll></app-scroll>
  </div>
</template>

<script>
import FlashScreen from './components/FlashScreen.vue';
import MainNavigation from './components/MainNavigation.vue';
import Footer from './components/Footer.vue';
import Scroll from './components/Scroll.vue';
import CopyRight from './components/CopyRight.vue';
export default {
  components: {
    appFlashScreen: FlashScreen,
    appMainNavigation: MainNavigation,
    appFooter: Footer,
    appCopy: CopyRight,
    appScroll: Scroll
  }
  
}
</script>
<style>

</style>
