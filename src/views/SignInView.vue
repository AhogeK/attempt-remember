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
    <h1 class="title">登入你的账号</h1>
    <div class="form-box">
      <form class="sign-form" @submit.prevent="signIn">
        <div>
          <span class="field-title">邮箱地址</span>
          <div class="input-box">
            <input
              v-model="email"
              autocomplete="email"
              class="sign-input"
              placeholder="请输入邮箱地址"
              required
              type="email"
            />
          </div>
        </div>
        <div>
          <div class="password-title">
            <span class="field-title">密码</span>
            <span class="forget-password field-title">忘记密码？</span>
          </div>
          <div class="input-box">
            <input
              v-model="password"
              autocomplete="current-password"
              class="sign-input"
              placeholder="请输入密码"
              required
              type="password"
            />
          </div>
        </div>
        <div>
          <button class="btn">登入</button>
        </div>
      </form>
      <p class="not-a-member">还不是用户？<a class="hyperlink" href="#">快来注册吧！</a></p>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  min-height: 100vh;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 1.5rem;

  .title {
    margin-top: 2.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2.25rem;
    letter-spacing: -0.05em;
    color: var(--vt-c-text-1);
  }

  .form-box {
    margin-top: 2.5rem;

    .sign-form {
      > *:not(:first-child) {
        margin-top: 1.5rem;
      }

      .field-title {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: var(--vt-c-text-1);
      }

      .password-title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .forget-password {
          font-weight: 600;
          color: var(--vt-c-theme);
          cursor: pointer;
        }

        .forget-password:hover {
          color: var(--vt-c-theme-light);
        }
      }

      .input-box {
        margin-top: 0.5rem;

        .sign-input {
          display: block;
          width: 100%;
          border-radius: 0.375rem;
          border: 0;
          padding: 0.375rem 0.75rem;
          color: var(--vt-c-text-1);
          box-shadow:
            inset 0 0 0 0 #fff,
            inset 0 0 0 calc(1px + 0px) rgb(209 213 219 / 1),
            0 1px 2px 0 rgb(0 0 0 / 0.05);

          &:focus-visible {
            outline: none !important;
            box-shadow: inset 0 0 0 2px var(--vt-c-theme);
          }

          &::placeholder {
            color: var(--vt-c-text-3);
            font-size: 0.75rem;
          }
        }
      }

      .btn {
        display: flex;
        width: 100%;
        justify-content: center;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.5rem;
        color: #fff;
        background-color: var(--vt-c-theme);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: var(--vt-c-theme-light);
        }

        &:focus-visible {
          outline: 2px solid var(--vt-c-theme);
          outline-offset: 2px;
        }
      }
    }

    .not-a-member {
      margin-top: 2.5rem;
      text-align: center;
      font-size: 0.875rem;
      color: var(--vt-c-text-2);

      .hyperlink {
        font-weight: 600;
        line-height: 1.5rem;
        color: var(--vt-c-theme);

        &:hover {
          color: var(--vt-c-theme-light);
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .box {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 640px) {
  .title {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 24rem;
  }

  .form-box {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 24rem;
  }
}
</style>
