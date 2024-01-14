<template>
  <a-modal v-model:open="visible" footer="" :closable="false" width="60%">
    <template #title>
      <div class="header">Đăng ký đề tài</div>
    </template>
    <a-form
      :model="formState"
      v-bind="layout"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
    >
      <a-form-item
        :name="['user', 'name']"
        label="Name"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item
        :name="['user', 'email']"
        label="Email"
        :rules="[{ type: 'email', required: true }]"
      >
        <a-input v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item
        :name="['user', 'age']"
        label="Mã Sinh Viên"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.user.age" />
      </a-form-item>
      <a-form-item :name="['user', 'website']" label="Bảng Điểm">
        <a-input v-model:value="formState.user.website" />
      </a-form-item>
      <a-form-item :name="['user', 'introduction']" label="CV">
        <a-textarea v-model:value="formState.user.introduction" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
        <div class="footer">
          <a-button type="primary" html-type="submit">Đăng ký</a-button>
          <a-button type="primary" @click="onCloseModal">Huỷ bỏ</a-button>
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
const visible = true;
const emits = defineEmits(["close"]);
const onCloseModal = () => emits("close");
import { reactive } from "vue";
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const formState = reactive({
  user: {
    name: "",
    age: "",
    email: "",
    website: "",
    introduction: "",
  },
});
const onFinish = (values) => {
  console.log("Success:", values);
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}
.footer {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}
</style>
