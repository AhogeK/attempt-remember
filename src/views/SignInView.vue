<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function signIn() {
  alert('登入成功\n邮箱: ' + email.value + '\n密码: ' + password.value)
}
</script>

<template>
  <div class="box">
    <h1 class="title">登入你得账号</h1>
    <form @submit.prevent="signIn">
      <span class="field-title">邮箱地址</span>
      <br />
      <input v-model="email" class="sign-input" />
      <div class="password-title">
        <span class="field-title">密码</span>
        <span class="forget-password field-title">忘记密码？</span>
      </div>
      <input v-model="password" class="sign-input" type="password" />
      <br />
      <button class="btn">登入</button>
    </form>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .title {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .field-title {
    font-weight: bold;
  }

  .password-title {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }

  .forget-password {
    color: #6664e9;
    cursor: pointer;
  }

  .forget-password:hover {
    color: #838cf1;
  }

  .sign-input {
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    width: 300px;
    height: 30px;
    border: 1px solid var(--color-border);
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .sign-input:focus-visible {
    outline: none !important;
    border: 2px solid #6664e9;
  }

  .btn {
    width: 300px;
    height: 30px;
    color: #fff;
    background-color: #6664e9;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 30px;
  }

  .btn:hover {
    background-color: #838cf1;
  }
}

@media (prefers-color-scheme: dark) {
  .box {
    color: #fff;

    .title {
      color: #fff;
    }

    .sign-input {
      background-color: var(--vt-c-black-soft);
      color: #fff;
    }
  }
}
</style>