<template>
  <div class="list-topic">
    <div class="list-topic__search">
      <a-input placeholder="Nhập tên tên giáo viên ..." />
      <a-button type="primary">Search</a-button>
      <a-button type="primary" @click="handleForm">Đăng ký đề tài</a-button>
    </div>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
    </a-table>
    <div class="pagination">
      <a-pagination show-less-items @change="onChangePagin" />
    </div>
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
    dataIndex: "teacher_name",
    key: "teacher_name",
    width: 250,
  },
  {
    title: "Khoa",
    dataIndex: "department",
    key: "department",
    width: 150,
  },
  {
    title: "Đề tài",
    dataIndex: "topic",
    key: "topic",
  },
  {
    title: "Số lượng SV/đề tài",
    dataIndex: "total",
    key: "total",
    width: 120,
  },
  {
    title: "Đã đăng ký đề tài",
    dataIndex: "registed",
    key: "registed",
    width: 120,
  },
  {
    title: "Đã được đồng ý",
    dataIndex: "agreed",
    key: "agreed",
    width: 120,
  },
];
const data = [
  {
    key: "1",
    mgv: "MT2",
    teacher_name: "Nguyễn Thúc Thùy Tiên",
    department: "Toán-tin",
    total: "0/3",
    registed: 10,
    agreed: 5,
  },
  {
    key: "2",
    mgv: "MV3",
    teacher_name: 42,
    department: "Toán-tin",
    total: "0/3",
    registed: 10,
    agreed: 5,
  },
  {
    key: "3",
    mgv: "DC4",
    department: "Toán-tin",
    teacher_name: 32,
    total: "0/3",
    registed: 10,
    agreed: 5,
  },
];
const handleForm = () => {
  isOpen.value = true;
  console.log(123);
};
const closeModal = () => {
  isOpen.value = false;
};
const onChangePagin = () => {
  console.log(123);
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
