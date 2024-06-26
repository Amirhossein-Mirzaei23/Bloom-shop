<template>
    <div class="container w-screen h-screen mx-auto" >
        <div class="py-5 px-2 flex gap-10 h-2/6 max-h-16 bg-slate-300 " >
<buttton @click="changeComponent('products')"    class=" rounded-lg px-5 flex items-center text-center border-2 bg-teal-100 hover:border-b-4 border-teal-700 hover:border-teal-100 hover:bg-teal-600 transition-all duration-500" >افزودن محصول</buttton>
<buttton @click="changeComponent('users')"       class=" rounded-lg px-5 flex items-center text-center border-2 bg-teal-100 hover:border-b-4 border-teal-700 hover:border-teal-100 hover:bg-teal-600 transition-all duration-500" >افزودن کاربر</buttton>
<buttton @click="changeComponent('categories')"  class=" rounded-lg px-5 flex items-center text-center border-2 bg-teal-100 hover:border-b-4 border-teal-700 hover:border-teal-100 hover:bg-teal-600 transition-all duration-500" >افزودن کتگوری</buttton>
        </div>
        <div class=" px-2">
           <AdminCreateProduct v-if="createProduct" />
           <AdminAddUser v-if="addUser" />
           <AdminAddCategory v-if="addCategory" />
        </div>
    </div>
</template>

<script setup>
function changeComponent(target){
    if (target == 'products') {
        createProduct.value = true
        addUser.value = false
        addCategory.value = false
    }
    if (target == 'users') {
        createProduct.value = false
        addUser.value = true
        addCategory.value = false
    }
    if (target == 'categories') {
        createProduct.value = false
        addUser.value = false
        addCategory.value = true
    }
}

const createProduct = ref(true)
const addUser = ref(false)
const addCategory = ref(false)
</script>

<style lang="scss" scoped>

</style>