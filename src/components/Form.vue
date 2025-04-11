<script lang="ts" setup></script>
<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p class="text-lg mt-5 text-center mb-10">
            Añade Pacientes y
            <span class="text-indigo-600 font-bold">Adminístralos</span>
        </p>
        <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div class="mb-5">
                <label for="pet" class="block text-gray-700 uppercase font-bold"> Nombre mascota </label>
                <input
                    type="text"
                    id="pet"
                    placeholder="Nombre de la mascota"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
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
                />
            </div>
            <div class="mb-5">
                <label for="email" class="block text-gray-700 uppercase font-bold"> Email </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email del propietario"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div class="mb-5">
                <label for="discharge" class="block text-gray-700 uppercase font-bold"> Fecha de alta </label>
                <input
                    type="date"
                    id="discharge"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div class="mb-5">
                <label for="symptoms" class="block text-gray-700 uppercase font-bold"> Síntomas </label>
                <textarea
                    id="symptoms"
                    placeholder="Describe los síntomas"
                    class="border-2 w-full p-2 m-t-2 placeholder-gray-400 rounded-md h-40"
                />
            </div>
            <input
                type="submit"
                class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value="Registrar paciente"
            />
        </form>
    </div>
</template>
