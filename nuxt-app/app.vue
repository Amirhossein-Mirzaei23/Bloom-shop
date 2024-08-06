<template>
  <v-locale-provider rtl>
  <div class=" m-auto"   >
    <!--header layout--->
    <LayoutHeader class="" />
    <!--use default nuxt loading page component--->
    <NuxtLoadingIndicator />
    <NuxtPage class="py-16" />
    <!--footer lay out--->
    <LayoutFooter />
  </div>
</v-locale-provider>
</template>
<script>
import 'animate.css';


if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
}
</script>
<style>

.bg-main{
  background-image: url('assets/image/backGround5.avif');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.github-backgound{
  background-image: url(/assets/gifs/auth-page-bg.gif);
}


body {
  margin: 0;
  padding: 0;
 
}
</style>
