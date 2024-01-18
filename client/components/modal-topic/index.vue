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
        :name="['user', 'name']"
        label="Đề tài"
        :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item
        :name="['user', 'email']"
        label="Sô lương SV"
        :rules="[{ type: 'email', required: true }]">
        <a-input-number v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item
        :name="['user', 'value1']"
        label="Khoa"
        :rules="[{ required: true }]">
        <a-select
          ref="select"
          v-model:value="formState.user.value1"
          style="width: 120px"
          @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
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
    value1: "",
    email: "",
    website: "",
    introduction: "",
  },
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
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
