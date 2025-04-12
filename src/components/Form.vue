<script lang="ts" setup>
import { reactive, ref, watchEffect } from "vue";
import type { Pacient, AlertType } from "../types/pacient";
import AlertShown from "./AlertShown.vue";

const emits = defineEmits<{
    (e: "submitPacient", pacient: Pacient): void;
}>();

const isValid = ref(false);

const alertObject = reactive<AlertType>({
    type: "",
    message: "",
});

const pacient = reactive<Pacient>({
    petName: "",
    ownerName: "",
    ownerMail: "",
    entryDate: "",
    symptoms: "",
});

const validate = () => {
    if (Object.values(pacient).includes("")) {
        alertObject.message = "Todos los campos son obligatorios";
        alertObject.type = "error";
        return;
    } else {
        alertObject.message = "Guardado correctamente";
        alertObject.type = "success";
        emits("submitPacient", pacient);
    }
};

watchEffect(() => {
    if (!Object.values(pacient).includes("")) {
        isValid.value = true;
    } else {
        isValid.value = false;
    }
});
</script>
<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p class="text-lg mt-5 text-center mb-10">
            Añade Pacientes y
            <span class="text-indigo-600 font-bold">Adminístralos</span>
        </p>
        <AlertShown v-if="alertObject.message" :alertObject="alertObject" />
        <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10" @submit.prevent="validate">
            <div class="mb-5">
                <label for="pet" class="block text-gray-700 uppercase font-bold"> Nombre mascota </label>
                <input
                    type="text"
                    id="pet"
                    placeholder="Nombre de la mascota"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
                    v-model="pacient.petName"
                />
            </div>
            <div class="mb-5">
                <label for="owner" class="block text-gray-700 uppercase font-bold">
                    Nombre propietario
                </label>
                <input
                    type="text"
                    id="owner"
                    placeholder="Nombre del propietario"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
                    v-model="pacient.ownerName"
                />
            </div>
            <div class="mb-5">
                <label for="email" class="block text-gray-700 uppercase font-bold"> Email </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email del propietario"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
                    v-model="pacient.ownerMail"
                />
            </div>
            <div class="mb-5">
                <label for="entry" class="block text-gray-700 uppercase font-bold"> Fecha de ingreso </label>
                <input
                    type="date"
                    id="entry"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
                    v-model="pacient.entryDate"
                />
            </div>
            <div class="mb-5">
                <label for="symptoms" class="block text-gray-700 uppercase font-bold"> Síntomas </label>
                <textarea
                    id="symptoms"
                    placeholder="Describe los síntomas"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md h-40"
                    v-model="pacient.symptoms"
                />
            </div>
            <input
                :disabled="!isValid"
                type="submit"
                class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors disabled:bg-gray-600 disabled:cursor-text"
                value="Registrar paciente"
            />
        </form>
    </div>
</template>
