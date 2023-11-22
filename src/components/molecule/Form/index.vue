<script setup lang="ts">
import AtomButton from '../../atom/Button/index.vue'
import AtomInput from '../../atom/Input/index.vue'
import { useLogin } from '../../../composables/UseLogin';
import { ref } from 'vue';
import { sessionStore }  from '../../../stores/session'
import { useRouter } from 'vue-router';

const router = useRouter()

const storeSession = sessionStore()

const formEl = ref(null)
const formStateValid = ref(true)

const {postLogin}  = useLogin()

interface InputProps {
    legend?: string;

}
withDefaults(defineProps<InputProps>(), {
    legend: "",

});

const submit = async () => {
   const elemnt = formEl?.value as unknown as HTMLElement;
   const email = (<HTMLInputElement>elemnt?.querySelector('#email'))?.value
   const pass = (<HTMLInputElement>elemnt?.querySelector('#pass'))?.value

   const loginResponse = await postLogin(email, pass)

   if(loginResponse.status === 'success'){
    formStateValid.value = true
    updateStore(loginResponse)
    router.push('/home')
   }else{
        formStateValid.value = false
   }
}

const updateStore = (data: any) => {storeSession.setSessionData(data)}

</script>

<template>
    <form ref="formEl" @submit.prevent="submit" class="max-w-[480px]">
        <legend class="text-grayscale-900 font-bold text-2xl text-center pb-[32px]">{{legend}}</legend>
        <fieldset class="flex flex-col gap-6">
            <AtomInput currentClass="w-full" name="email" id="email" required label="Correo electrónico" placeholder="Ingresa el correo electrónico" type="email" />
            <AtomInput currentClass="w-full" name="pass" id="pass" required label="Contraseña" placeholder="Ingresa la contraseña" type="password"/>
            <span class="text-xs text-alerts-error-base font-normal " v-if="!formStateValid">Correo o contraseña incorrectos</span>
            <AtomButton htmlType="submit" urrentClass="my-[32px] w-full">Iniciar sesión</AtomButton>
        </fieldset>
        <p class="text-center text-[14px] text-grayscale-500 font-medium pt-[32px]">¿Eres nuevo aquí? <a class="text-primary" href="#">Crea una cuenta</a></p>
    </form>
</template>