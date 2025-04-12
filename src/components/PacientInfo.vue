<script lang="ts" setup>
import type { Pacient } from "../types/pacient";

const props = defineProps<{
    pacient: Pacient;
}>();

const emits = defineEmits<{
    (e: "editPacient", id: string | null): void;
    (e: "deletePacient", id: string | null): void;
}>();
</script>
<template>
    <div class="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p class="font-bold mb-3 text-gray-700 uppercase">
            ID:
            <span class="font-normal normal-case"> {{ props.pacient.id }}</span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">
            Nombre:
            <span class="font-normal normal-case">{{ props.pacient.petName }} </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">
            Propietario:
            <span class="font-normal normal-case">{{ props.pacient.ownerName }} </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">
            Email:
            <span class="font-normal normal-case">{{ props.pacient.ownerMail }} </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">
            Fecha Ingreso:
            <span class="font-normal normal-case"> {{ props.pacient.entryDate }}</span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">
            Síntomas:
            <span class="font-normal normal-case">{{ props.pacient.symptoms }} </span>
        </p>

        <div class="grid md:grid-cols-2 gap-5 mt-10">
            <button
                type="button"
                class="block w-full py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                @click="emits('editPacient', props.pacient.id)"
            >
                Editar
            </button>

            <button
                type="button"
                class="block w-full py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                @click="emits('deletePacient', props.pacient.id)"
            >
                Eliminar
            </button>
        </div>
    </div>
</template>
