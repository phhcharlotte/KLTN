<template>
    <div class="login">
        <div class="login__wrapper">
            <h1>Login</h1>
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                class="login__form"
              >
                <a-form-item
                  label="Username"
                  name="username"
                  class="form-item"
                  :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                  <a-input v-model:value="formState.username" class="form-input" />
                </a-form-item>
            
                <a-form-item
                  label="Password"
                  name="password"
                  :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-input-password v-model:value="formState.password" />
                </a-form-item>
            
                <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                  <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
            
                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
              </a-form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = () => {
    return navigateTo({
      name: "home",
    });
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>