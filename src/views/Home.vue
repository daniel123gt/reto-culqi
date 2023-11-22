<script setup lang="ts">
import { sessionStore } from '../stores/session';
import { useRouter } from 'vue-router';
import RootMenu from '../components/root/Menu/index.vue'

const store = sessionStore()
const router = useRouter()

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !validatedAccessToken) {
    return {
      path: '/',
      query: { redirect: to.fullPath },
    }
  }
})

const validatedAccessToken = () => {
    let valid: boolean = false;
    if(store?.sessionData?.data?.token){
        valid = true;
    }
    return valid;
}

</script>
<template>
    <main class="w-full h-screen grid grid-cols-12">
        <aside class="col-span-2">
            <RootMenu/>
        </aside>
        <section class="col-span-10 ">
            <div class="w-full bg-white border-b border-b-grayscale-300 py-6 px-8"><p class="text-xs text-grayscale-900 font-bold text-end">Christian Quispe</p></div>
            <article class="bg-grayscale-100">
                <table class="rounded-2xl bg-white m-6"></table>
            </article>
        </section>
    </main>
</template>