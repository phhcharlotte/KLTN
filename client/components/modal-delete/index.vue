<template>
  <a-modal v-model:open="visible" footer="" :closable="false" width="30%">
    <template #title>
      <div class="header">Bạn có chắc chắn muốn xoá hay không</div>
    </template>
    <div class="content">
      <a-button @click="onCloseModal">Huỷ bỏ</a-button>
      <a-button @click="deleteItem">Xoá</a-button>
    </div>
  </a-modal>
</template>

<script setup>
const visible = true;
const emits = defineEmits(["close"]);
const onCloseModal = () => emits("close");
const deleteItem = () => emits("delete");
import { reactive } from "vue";
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px;
}
</style>
