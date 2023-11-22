<script setup lang="ts">
interface InputProps {
    currentClass?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    type?: string;
    label?: string;
    required?: boolean;

}
withDefaults(defineProps<InputProps>(), {
    currentClass: "",
    name: "",
    id: "",
    placeholder: "",
    type: "",
    label: "Label",
    required: false,
});
</script>
<template>
    <label class="flex flex-col gap-2.5 text-grayscale-900" :for="id">
        <span class="font-medium">{{ label }} <span v-if="required" class="text-alerts-error-base">*</span> </span>
        
        <input :class="[currentClass,'py-4 px-5 w-96 rounded-[10px] bg-white border border-grayscale-300 outline-none text-sm font-medium']"
        :type="type" :name="name" :id="id" :placeholder="placeholder" :required="required" @keydown="$emit('eventChange')" />
    </label>

</template>