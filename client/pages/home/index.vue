<template>
  <div class="list-topic">
    <div class="list-topic__search">
      <a-input placeholder="Nhập tên tên giáo viên ..." />
      <a-button type="primary">Search</a-button>
      <a-button type="primary" @click="handleForm">Đăng ký đề tài</a-button>
    </div>
    <a-table :columns="columns" :data-source="data"> </a-table>
    <modal-form-register v-if="isOpen" @close="closeModal" />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "layout",
});
const isOpen = ref(false);
const columns = [
  {
    title: "MGV",
    dataIndex: "mgv",
    key: "mgv",
    width: 80,
  },
  {
    title: "Tên giáo viên hướng dẫn",
    dataIndex: "tearch_name",
    key: "tearch_name",
  },
  {
    title: "Đề tài",
    dataIndex: "topic",
    key: "topic",
    ellipsis: true,
  },
  {
    title: "Số lượng SV/đề tài",
    dataIndex: "total",
    key: "total",
    ellipsis: true,
  },
  {
    title: "Đã đăng ký đề tài",
    dataIndex: "registered",
    key: "registered",
    ellipsis: true,
  },
  {
    title: "Đã được đồng ý",
    dataIndex: "accepted",
    key: "accepted",
    ellipsis: true,
  },
];
const data = [
  {
    key: "1",
    mgv: "MT2",
    tearch_name: "Phạm Huy Hoàng",
    topic: "Quảng lý KLTN",
    total: 4,
    registered: 10,
    accepted: 3,
  },
  {
    key: "1",
    mgv: "MT2",
    tearch_name: "Phạm Huy Hoàng",
    topic: "Quảng lý KLTN",
    total: 4,
    registered: 10,
    accepted: 3,
  },
];
const handleForm = () => {
  isOpen.value = true;
  console.log(123);
};
const closeModal = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
