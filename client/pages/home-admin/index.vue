<template>
  <div class="list-topic">
    <div class="list-topic__search">
      <a-input placeholder="Nhập tên tên giáo viên ..." />
      <app-button type="primary">Search</app-button>
      <app-button type="primary" @click="handleForm">Đăng ký đề tài</app-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      class="table-topic">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'topic'">
          <div class="table-topic__topic" @click="openDetail">
            {{ record.topic }}
          </div>
        </template>
        <template v-if="column.dataIndex === 'action'">
          <div class="table-topic__button">
            <app-button type="detail" @click="openDetail" class="btn"
              >Chi tiết</app-button
            >
            <app-button type="primary" class="btn">Edit</app-button>
            <app-button
              type="delete"
              danger
              @click="openModalDelete"
              class="btn"
              >Delete</app-button
            >
          </div>
        </template>
      </template>
    </a-table>
    <div class="pagination">
      <a-pagination />
    </div>
    <modal-topic v-if="isOpen" @close="closeModal" />
    <modal-delete
      v-if="isDelete"
      @close="closeModalDelete"
      @delete="deleteRow" />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "sivbar",
});
const isOpen = ref(false);
const isDelete = ref(false);
const router = useRouter();
const columns = [
  {
    title: "STT",
    dataIndex: "name",
    key: "name",
    width: 80,
  },
  {
    title: "Tên đề tài",
    dataIndex: "topic",
    key: "topic",
  },
  {
    title: "Số lượng SV/đề tài",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Đã đăng ký đề tài",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Chỉnh sửa/ Xoá",
    dataIndex: "action",
    key: "address 3",
    ellipsis: true,
  },
];
const data = [
  {
    key: "1",
    name: "MT2",
    topic: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "MV3",
    topic: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "DC4",
    topic: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const handleForm = () => {
  isOpen.value = true;
  console.log(123);
};
const closeModal = () => {
  isOpen.value = false;
};
const closeModalDelete = () => {
  isOpen.isDelete = false;
};

const openModalDelete = () => {
  isDelete.value = true;
};
const deleteRow = () => {
  console.log(123);
};
const openDetail = () => {
  router.push({
    name: "home-admin-id",
    params: {
      id: 123,
    },
  });
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
