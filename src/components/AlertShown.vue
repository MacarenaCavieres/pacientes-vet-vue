<script setup lang="ts">
import { computed } from "vue";
import type { AlertType } from "../types/pacient";

const props = defineProps<{
    alertObject: AlertType;
}>();

const isError = computed(() => {
    return props.alertObject.type === "error";
});
</script>
<template>
    <div
        :class="isError ? 'bg-red-500' : 'bg-green-500'"
        class="text-white text-center p-3 uppercase font-bold mb-3 rounded-md"
    >
        {{ props.alertObject.message }}
    </div>
</template>
