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
            <q-img class="rounded-borders full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
           
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
         
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