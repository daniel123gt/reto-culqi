<script setup lang="ts">
import { sessionStore } from '../stores/session';
import { useRouter } from 'vue-router';
import RootMenu from '../components/root/Menu/index.vue'
import { useEmployes } from '../composables/UseEmployes';
import { ref, onMounted } from 'vue';

const { getEmployes } = useEmployes()

const employesList: any = ref(null)
let dataEmployes:  any;

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

onMounted(async () => {
  dataEmployes = await getEmployes(store.sessionData?.data?.token, '10', '1')
  employesList.value = dataEmployes
  console.log(employesList)
})

</script>
<template>
    <main class="w-full h-screen grid grid-cols-12">
        <aside class="col-span-2">
            <RootMenu/>
        </aside>
        <section class="col-span-10 ">
            <div class="w-full bg-white border-b border-b-grayscale-300 py-6 px-8"><p class="text-xs text-grayscale-900 font-bold text-end">Christian Quispe</p></div>
            <article class="bg-grayscale-100 p-6">
                <div>

                </div>
                <table class="rounded-2xl bg-white py-6 w-full">
                    <tr class="py-4">
                        <th class="py-4">Nombre</th>
                        <th>Nombre cargo</th>
                        <th>Departamento</th>
                        <th>Oficina</th>
                        <th>Cuenta</th>
                        <th>Acciones</th>
                      </tr>
                      <tr v-for="(item, index) in employesList?.data" :key="index">
                        <td class="py-4 text-center">{{item?.nombre}}</td>
                        <td class="py-4 text-center">{{item?.cargo}}</td>
                        <td class="py-4 text-center">{{item?.departamento}}</td>
                        <td class="py-4 text-center">{{item?.oficina}}</td>
                        <td class="py-4 text-center">{{item?.estadoCuenta}}</td>
                        <td class="py-4 text-center"></td>

                      </tr>
                </table>
            </article>
        </section>
    </main>
</template>