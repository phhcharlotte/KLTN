import React, { useState } from "react";

import { Button, Table } from "antd";
import type { TableProps } from "antd";
import ModalPostTime from "../../../components/modal/postTime";
import { ListStuden } from "../../../types/Admin";

const columns: TableProps<ListStuden>["columns"] = [
  {
    title: "MSV",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Tên Giáo Viên",
    dataIndex: "student_name",
    key: "student_name",
  },
  {
    title: "Khoa",
    dataIndex: "khoa",
    key: "khoa",
  },
  {
    title: "Đã đăng ký",
    dataIndex: "isRegisted",
    key: "isRegisted",
  },
];
const data: ListStuden[] = [
  {
    key: "1",
    stt: "MGV",
    student_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    isRegisted: true,
  },
  {
    key: "2",
    stt: "MGV",
    student_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    isRegisted: true,
  },
  {
    key: "3",
    stt: "MGV",
    student_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    isRegisted: false,
  },
  {
    key: "4",
    stt: "MGV",
    student_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    isRegisted: true,
  },
];
const ListStudent: React.FC = () => {
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="container mx-auto">
      <p>Thời hạn đăng ký là: </p>

      <div className="flex gap-4 mt-8 ">
        <Button onClick={() => handleOpenModal}>
          Tạo thời gian đăng ký đề tài
        </Button>
      </div>

      <div className="mt-4">
        <Table columns={columns} dataSource={data} />
      </div>

      <ModalPostTime
        isModalPostTimeOpen={isOpenModal}
        handleCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ListStudent;
