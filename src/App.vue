<script setup lang="ts">
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import { reactive, ref } from "vue";
import type { Pacient } from "./types/pacient";

const pacients = ref([]);

const submitPacient = (pacient: Pacient) => {
    console.log(pacient);
};
</script>

<template>
    <div class="container mx-auto mt-20">
        <Header />
        <div class="mt-12 md:flex">
            <Form @submit-pacient="submitPacient" />
            <div class="md:w-1/2 md-h-screen overflow-y-scroll">
                <h3 class="font-black text-3xl text-center">Administra tus Pacientes</h3>
                <div v-if="pacients.length > 0"></div>
                <p class="mt-20 text-2xl text-center">No Hay Pacientes</p>
            </div>
        </div>
    </div>
</template>
