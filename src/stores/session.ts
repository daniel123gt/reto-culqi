import { defineStore } from "pinia";

export const sessionStore = defineStore('sessionStore', {
    state:() => {
        return {
            sessionData: {}
        }
    },
    actions: {
        async setSessionData(dataUser: any){
            this.sessionData = dataUser;
        }
    }
})