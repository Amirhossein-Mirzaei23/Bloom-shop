<template>
    <div class="container w-screen h-screen" >
        <div class="py-5 px-2" >
<buttton @click="changeComponent('products')"  class="px-2 py-2 bg-teal-200 border border-teal-600 hover:border-teal-600 hover:bg-teal-600 transition-all duration-500" >افزودن محصول</buttton>
<buttton @click="changeComponent('users')"  class="px-2 py-2 bg-teal-200 border border-teal-600 hover:border-teal-600 hover:bg-teal-600 transition-all duration-500" >افزودن کاربر</buttton>
<buttton @click="changeComponent('categories')"  class="px-2 py-2 bg-teal-200 border border-teal-600 hover:border-teal-600 hover:bg-teal-600 transition-all duration-500" >افزودن کتگوری</buttton>
        </div>
        <div class=" px-2">
           <AdminCreateProduct />
        </div>
    </div>
</template>

<script setup>
function changeComponent(target){
console.log(target);
}
</script>

<style lang="scss" scoped>

</style>