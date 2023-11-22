<script setup lang="ts">
import AtomShowcase from '../components/atom/Showcase/index.vue'
import MoleculeForm from '../components/molecule/form/index.vue'
</script>
<template>
    <main class="grid grid-cols-2">
        <AtomShowcase/>
        <section class="flex flex-col items-center justify-center">
          <article class="w-[480px]">
            <MoleculeForm legend="Inicia sesión"/>
          </article>
        </section>
    </main>
</template>