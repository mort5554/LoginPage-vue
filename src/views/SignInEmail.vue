<script setup>
import {RouterLink} from "vue-router"
import { useUserStore } from '@/stores/user';

const store = useUserStore()

/*const onsubmit = () => {
    console.log(email.value)
if(!email.value){
    return toast.error("Fields must be filled")
}

}*/
</script>

<template>
<div class="background">
  <main>
    <div class="loginContainer">
      <form id="form" >
        <p class="signIn"><label>Sign in</label></p>
        <p class="wrongData">{{ store.wrongEmail }}</p>
        <input type="email" class="email" v-model="store.signInEmail" placeholder="Email...">
        <hr class="line"/>
        <p class="createAccount">No account? <RouterLink to="/createaccount">Create one!</RouterLink></p>
        <p class="recoverAccount"><RouterLink to="/">Can't access your account?</RouterLink></p>
        <div class="buttonContainer">
          <RouterLink to="/createaccount"><button class="btnBack">Back</button></RouterLink>
          <button class="btnNext" @click.prevent="store.loginToAccountEmail">Next</button>
        </div>
      </form>
    </div>
  </main>
</div>
</template>

<style scoped>
.background{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(151, 190, 224);
  height: 100vh;
  width: 100vw;
}
.loginContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: rgba(0, 0, 255, 0.507);*/
  background-color: white;
  height: 450px;
  width: 450px;
  border-radius: 5px;
}
.email{
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 20px;
}
button{
  cursor: pointer;
}
.signIn{
  font-size: 35px;
  margin-bottom: 9px;
}
.createAccount{
  margin-top: 10px;
  font-size: 13px;
}
.recoverAccount{
  margin-top: 10px;
  font-size: 13px;
}
.wrongData{
  font-size: small;
  color: red;
}
.buttonContainer{
  margin-top: 45px;
  display: flex;
  justify-content: flex-end;
}
.btnBack{
  background-color: gainsboro;
  border: 0px solid ;
  height: 30px;
  width: 80px;
}
.btnNext{
  margin-left: 10px;
  background-color: rgba(0, 0, 255, 0.74);
  border: 0px solid ;
  height: 30px;
  width: 80px;
}
</style>