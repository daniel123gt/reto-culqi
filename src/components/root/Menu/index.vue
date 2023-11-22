<script setup lang="ts">
import AtomButton from '../../atom/Button/index.vue'
import { ButtonType } from '../../atom/Button/types';
</script>
<template>
    <div class="py-6 px-8 flex flex-col items-center w-full gap-6 h-screen  border-r border-r-grayscale-300">
        <figure>
            <img src="../../../assets/images/logodark.svg" alt="logo de culqi">
        </figure>
        <div class="self-start w-full flex flex-col justify-between h-full">
            <div class="">
                <ul class="text-sm font-bold text-grayscale-900">
                    <li class="text-primary py-4"><router-link to="/home">Empleados</router-link></li>
                    <li class="py-4"> <router-link to="/home">Reclutamiento</router-link></li>
                </ul>
            </div>
            <div class="w-full ">
                <AtomButton :type="ButtonType.Secondary" currentClass="w-full">Salir</AtomButton>
            </div>
        </div>
        
    </div>
</template>