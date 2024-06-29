<template>
  <div dir="rtl" class=" m-auto" >
    <!--header layout--->
    <LayoutHeader />
    <!--use default nuxt loading page component--->
    <NuxtLoadingIndicator />
    <NuxtPage />
    <!--footer lay out--->
    <LayoutFooter />
  </div>
</template>
<script>
import 'animate.css';
</script>
<style>

.bg-main{
  background-image: url('assets/image/backGround5.avif');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
