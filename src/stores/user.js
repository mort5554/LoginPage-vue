import { ref } from "vue"
import { defineStore } from "pinia"
import {useRouter} from "vue-router"

export const useUserStore = defineStore("user", () => {
    
    const userAccounts = ref([])
    const newAccountEmail = ref()
    const newAccountPassword = ref()
    const router = useRouter()
    
    
    const wrongEmail = ref("")
    const wrongPassword = ref("")
    
    const signInEmail = ref("")
    const signInPassword = ref("")

    let myLocalStorage

function createAccount() {
    let isTaken = false
    const randomNumber =  Math.floor(Math.random() * 100)
    if(newAccountEmail.value.includes("@mort.pl") && newAccountPassword.value.length > 5 ){
        console.log(newAccountEmail.value)
        for(let i = 0; i < userAccounts.value.length; i++){
            if(userAccounts.value[i].email === newAccountEmail.value){
                console.log(userAccounts.value[i])
                isTaken = true
                wrongEmail.value = "This email is already in use"
                break
            }  
        }
        if(!isTaken){ 
            userAccounts.value.push({
                id: randomNumber,
                email: newAccountEmail.value,
                password: newAccountPassword.value  
            })
            saveMyLocalStorage()
            router.push("/")
            newAccountPassword.value = ""
            newAccountEmail.value = ""
            wrongEmail.value = ""
            wrongPassword.value = ""
        }
    }
    else{
        wrongPassword.value = "Password must be 5 characters or more" 
        wrongEmail.value = "Email must includes ...@mort.pl" 
    }
}
function loginToAccountEmail(){
    for(let i =0; i < userAccounts.value.length; i++){
        if(userAccounts.value[i].email == signInEmail.value){
            console.log(userAccounts.value.email)
            router.push("/SignInPassword")
        }
        else{
            console.log(userAccounts.value)
            wrongEmail.value = "This email doesn`t exist"
        }
    }
}
function loginToAccountPassword(){
    for(let i =0; i < userAccounts.value.length; i++){
        if(userAccounts.value[i].password == signInPassword.value){
            router.push("/mainpage")
        }
        else{
            wrongPassword.value = "Wrong password"
        }
    }
}
function resetValues(){
    wrongEmail.value = ""
    wrongPassword.value = ""
    newAccountEmail.value = ""
    newAccountPassword.value = ""
    signInEmail.value = ""
}
//Local Storage
const storage = () => {
    myLocalStorage = JSON.parse(localStorage.getItem
        ("accounts"))
      
    if(myLocalStorage){
        userAccounts.value = myLocalStorage
    }
}
//Save to local storage 
const saveMyLocalStorage = () => {
    localStorage.setItem("accounts", JSON.stringify(userAccounts.value))
}
storage()

    return{ newAccountEmail, newAccountPassword, userAccounts, createAccount, 
        wrongEmail, wrongPassword, signInEmail, signInPassword, loginToAccountEmail, 
        loginToAccountPassword, resetValues, storage, saveMyLocalStorage}
})