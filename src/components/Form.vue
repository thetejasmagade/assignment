<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

let userdata = reactive({
    name: '',
    phone: '',
    email: '',
    address: ``,
})

function saveData() {
    store.commit('pushData', userdata);
}
</script>

<template>
    <div class="">
        <form class="container" @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input v-model="userdata.name" type="text" class="form-control" id="fullName" aria-describedby="fullName">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input v-model="userdata.phone" type="number" class="form-control" id="phone">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input v-model="userdata.email" type="email" class="form-control" id="email" aria-describedby="email">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea v-model="userdata.address" class="form-control" id="address" rows="5"></textarea>
            </div>
            <button @click="saveData()" type="submit" class="btn btn-success submit-btn">Submit Information</button>
            <button type="reset" class="btn btn-danger px-3">Clear Form</button>
        </form>
    </div>
</template>

<style scoped>
.submit-btn {
    margin-right: 12px;
}
</style>