<template>
    <div class="bg-palte-two-white bg-opacity-20 rounded-xl shadow-lg mt-10 py-10 shadow-black" >
        <table class="mx-auto text-center border border-1 w-10/12 rounded-lg p-5" >
            <tr class="bg-slate-500 bg-opacity-25" >
                <th>شناسه</th>
                <th>نام کاربر</th>
                <th>شماره همراه</th>
                <th>نام کاربری</th>
                <th>نقش</th>
                <th>رمز عبور</th>
                <th>عملیات</th>
            </tr>
            <tr class="border h-10" v-for="user in userData" :key="user" >
                <td class="text-info" >{{ user.userId }}</td>
                <td>
                    <span v-if="user.name" >{{ user.name }}</span>
                    <span v-else >{{ user.first_name }} {{ user.last_name }}</span>
                </td>
                <td>{{ user.phoneNumber }}</td>
                <td>{{ user.username }}</td>
                <td>
                    <span v-if="user.role=='admin'" class="badge-green" >{{ user.role }}</span>
                    <span v-else class="badge-blue" >{{ user.role }}</span>
                </td>
                <td>{{ user.password }}</td>
                <td><button><span class="badge-blue" >ویرایش</span></button></td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import axios from "axios";


const {public:{apiBase}} = useRuntimeConfig();
let userData =ref([])

const btnLoader = ref(false)

function getUserData() {
    btnLoader.value = true
    axios.get(`${apiBase}/users`,{}).then((res)=>{
        console.log(res.data);
        userData.value = res.data
        
    })
}


onMounted(()=>{
    getUserData()
})

</script>

<style lang="scss" scoped>

</style>