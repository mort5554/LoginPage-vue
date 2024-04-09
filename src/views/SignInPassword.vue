<script setup>
import { useUserStore } from '@/stores/user';

const store = useUserStore()

</script>
<template>
    <div class="background">
      <main>
        <div class="loginContainer">
          <form id="form" >
            <p class="signIn"><label>Sign In <in class="yourEmail">{{ store.signInEmail }}</in></label></p>
            <p class="wrongPassword">{{ store.wrongPassword }}</p>
            <input type="password" class="password" placeholder="Password" v-model="store.signInPassword">
            <hr class="line"/>
            <div class="buttonContainer">
              <RouterLink to="/"><button class="btnBack">Back</button></RouterLink>
              <button class="btnNext" @click.prevent="store.loginToAccountPassword">Next</button>
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
    .password{
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 20px;
    }
    .signIn{
      font-size: 35px;
      margin-bottom: 9px;
    }
    .yourEmail{
      font-size: large;
      font-weight: bold;
      padding-bottom: 7px;
    }
    .wrongPassword{
      font-size: small;
      color: red;
    }
    button{
      cursor: pointer;
    }
    .createAccount{
      margin-top: 10px;
      font-size: 13px;
    }
    .recoverAccount{
      margin-top: 10px;
      font-size: 13px;
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