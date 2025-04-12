<script setup lang="ts">
import { ref } from "vue";
import { uid } from "uid";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import type { Pacient } from "./types/pacient";
import PacientInfo from "./components/PacientInfo.vue";

const pacients = ref<Pacient[]>([]);
const pacientToEdit = ref<Pacient>();

const submitPacient = (pacient: Pacient) => {
    if (pacient.id === null) {
        pacients.value.push({ ...pacient, id: uid() });
    } else {
        pacients.value = pacients.value.map((item) =>
            item.id === pacientToEdit.value?.id ? { ...pacient } : item
        );
        pacientToEdit.value = undefined;
    }
};

const editPacient = (id: string | null) => {
    pacientToEdit.value = pacients.value.find((item) => item.id === id);
};

const deletePacient = (id: string | null) => {
    pacients.value = pacients.value.filter((item) => item.id !== id);
};
</script>

<template>
    <div class="container mx-auto mt-20">
        <Header />
        <div class="mt-12 md:flex">
            <Form @submit-pacient="submitPacient" :pacient-to-edit="pacientToEdit" />
            <div class="md:w-1/2 md-h-screen overflow-y-scroll">
                <h3 class="font-black text-3xl text-center">Administra tus Pacientes</h3>
                <div v-if="pacients.length > 0">
                    <p class="text-lg my-6 text-center">
                        Administra tus
                        <span class="text-indigo-600 font-bold">Pacientes</span>
                    </p>
                    <PacientInfo
                        v-for="(pacient, index) in pacients"
                        :key="index"
                        :pacient="pacient"
                        @edit-pacient="editPacient"
                        @delete-pacient="deletePacient"
                    />
                </div>
                <p v-else class="mt-20 text-2xl text-center">No Hay Pacientes</p>
            </div>
        </div>
    </div>
</template>
