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
      @finish="onFinish">
      <a-form-item
        :name="['user', 'student_name']"
        label="Họ và tên"
        :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.student_name" />
      </a-form-item>
      <a-form-item
        :name="['user', 'msv']"
        label="Mã Sinh Viên"
        :rules="[{ type: 'msv', required: true }]">
        <a-input v-model:value="formState.user.msv" />
      </a-form-item>
      <a-form-item
        :name="['user', 'teacher_name']"
        label="GV hướng dẫn"
        :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.teacher_name" />
      </a-form-item>
      <a-form-item
        :name="['user', 'topic']"
        label="Đề tài"
        :rules="[{ required: true }]">
        upload
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
const fileList = ref([]);
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
    teacher_name: "${label} is not a valid teacher_name!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const formState = reactive({
  user: {
    student_name: "",
    teacher_name: "",
    msv: "",
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
