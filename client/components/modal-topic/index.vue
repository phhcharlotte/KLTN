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
        :name="['user', 'topic']"
        label="Đề tài"
        :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.topic" />
      </a-form-item>
      <a-form-item
        :name="['user', 'total']"
        label="Sô lương SV"
        :rules="[{ type: 'total', required: true }]">
        <a-input v-model:value="formState.user.total" type="number" />
      </a-form-item>
      <a-form-item
        :name="['user', 'value1']"
        label="Khoa"
        :rules="[{ required: true }]">
        <a-select
          ref="select"
          v-model:value="formState.user.value1"
          style="width: 120px"
          :options="options"
          @change="handleChange" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
        <div class="footer">
          <app-button type="primary" html-type="submit">Đăng ký</app-button>
          <app-button type="primary" @click="onCloseModal">Huỷ bỏ</app-button>
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
const visible = true;
const emits = defineEmits(["close"]);
const options = ref([
  {
    value: 1,
    label: "hello",
  },
  {
    value: 2,
    label: "hihii",
  },
]);

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
    topic: "",
    value1: "",
    total: "",
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
