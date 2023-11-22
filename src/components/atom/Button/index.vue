<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';
import { ButtonType } from './types';

interface ButtonProps {
    htmlType?: ButtonHTMLAttributes | any;
    type?: ButtonType;
    currentClass?: string;
}
withDefaults(defineProps<ButtonProps>(), {
    htmlType: "button",
    type: ButtonType.Primary,
    currentClass: ""
})
</script>
<template>
    <button :class="[currentClass,'bg-grayscale-900 px-6 py-5 font-bold rounded-[10px]', type === ButtonType.Secondary && 'bg-white text-grayscale-900 border border-grayscale-900', type === ButtonType.Primary && 'text-white']">
        <slot/>
    </button>
</template>