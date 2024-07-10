<template>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="warning"
        navigation
        infinite
        autoplay
        arrows
        :dark="drakMode"
        transition-duration=1300
       

        class=" rounded-borders h-80 md:h-500"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="https://colorlib.com/wp/wp-content/uploads/sites/2/flower-store-templates.jpg" />
           
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://vipshop.flowers/wp-content/uploads/2023/04/Houseplants2-kerman.jpg.webp" />
            <q-img class="rounded-borders col-6 full-height" src="https://bamagol.ir/wp-content/uploads/2024/01/4.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="https://safarzon.com/mag/wp-content/uploads/2020/01/%D8%A7%D8%A8%D8%B9%D8%A7%D8%AF-%D8%AC%D8%AF%DB%8C%D8%AF-%DA%A9%D8%A7%D9%88%D8%B111.jpg" />
         
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </template>
  
  <script setup >
  import { ref } from 'vue'
  

    
     let  slide = ref(1)

     let drakMode = ref(false)
  </script>
  

<style lang="scss" scoped>

</style>