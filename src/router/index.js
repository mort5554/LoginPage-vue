import {createRouter, createWebHistory} from "vue-router"
import SignInEmail from "../views/SignInEmail.vue"
import SignInPassword from "../views/SignInPassword.vue"
import ActualPage from "../views/ActualPage.vue"
import CreateAccount from "../views/CreateAccount.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "SignInEmail",
            component: SignInEmail
        },
        {
            path: "/SignInPassword",
            name: "SignInPassword",
            component: SignInPassword
        },
        {
            path: "/mainpage",
            name: "page",
            component: ActualPage
        },
        {
            path: "/createaccount",
            name: "create",
            component: CreateAccount
        },
    ]
})

export default router 