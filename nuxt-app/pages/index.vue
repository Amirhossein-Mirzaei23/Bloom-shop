<template>
    <div class=" m-auto w-screen" >

<Slider ></Slider>
<tab-panel/>
<Description /> 
        <div class="w-11/12 flex" >
            <Card  />
        </div>
    </div>
</template>

<script setup>
import {faGithub } from '@fortawesome/free-brands-svg-icons'
import {faCircle, faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { reloadNuxtApp } from 'nuxt/app';
onMounted(()=>{
    reloadNuxtApp();
})
</script>

<style>

*{
    box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
 
}
</style>