<template>
  <div class="topic">
    <div class="topic__title">
      <p>Đề tài:</p>
    </div>
    <main>
      <p class="text">Số sinh viên đã đăng kí:</p>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        class="topic__table">
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'detail'">
            <div>
              <a-button type="primary" @click="openDetail">Chi tiết</a-button>
            </div>
          </template>
        </template>
      </a-table>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sivbar",
});
const columns = [
  {
    title: "MSV",
    dataIndex: "name",
    key: "name",
    width: 80,
  },
  {
    title: "Tên Sinh Viên",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Thời gian đăng ký",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Xem thông tin chi tiết",
    dataIndex: "detail",
    key: "address 2",
  },
];
const data = [
  {
    key: "1",
    name: "MT2",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "MV3",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "DC4",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
  },
];
const openDetail = () => {
  console.log(123);
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
