<script setup>
import { useUserStore } from '@/stores/user';

const store = useUserStore()

</script>

<template>
    <div class="background">
      <main>
        <div class="loginContainer">
          <form id="form" >
            <p class="signUp"><label>Sign up</label></p>
            <p class="wrongData">{{ store.wrongEmail }}</p>
            <input type="email" class="email" v-model="store.newAccountEmail" placeholder="Email...">
            <hr class="line"/>
            <p class="wrongData">{{ store.wrongPassword }}</p>
            <input type="password" class="password" v-model="store.newAccountPassword" placeholder="Password...">
            <hr class="line"/>
            <div class="buttonContainer">
              <RouterLink to="/" @click="store.resetValues"><button class="btnBack">Back</button></RouterLink>
              <button class="btnNext" @click.prevent="store.createAccount">Next</button>
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
    .email,
    .password{
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 20px;
      margin: 9px;
      display: flex;
      align-items: center;
    }
    .signUp{
      font-size: 35px;
      margin-bottom: 20px;
    }
    .createAccount{
      margin-top: 10px;
      font-size: 13px;
    }
    .recoverAccount{
      margin-top: 10px;
      font-size: 13px;
    }
    button{
      cursor: pointer;
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