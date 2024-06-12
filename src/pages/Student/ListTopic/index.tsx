import React, { useState } from "react";

import { Button, Input, Table } from "antd";
import type { TableProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ModalRegisterTopic from "../../../components/modal/registerTopic";

import { ListRegisterTopic } from "../../../types/Students";

const columns: TableProps<ListRegisterTopic>["columns"] = [
  {
    title: "MGV",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Tên Giáo Viên",
    dataIndex: "teacher_name",
    key: "teacher_name",
  },
  {
    title: "Khoa",
    dataIndex: "khoa",
    key: "khoa",
  },
  {
    title: "Đề tài",
    dataIndex: "topic",
    key: "topic",
  },
  {
    title: "Số lượng",
    dataIndex: "quanlity",
    key: "quanlity",
  },
  {
    title: "Đã đăng ký",
    dataIndex: "registered",
    key: "registered",
  },
  {
    title: "Đã chấp nhận",
    dataIndex: "accepted",
    key: "accepted",
  },
  {
    title: "Đã chấp nhận",
    dataIndex: "accepted",
    render: () => <Button type="primary">Đăng ký</Button>,
  },
];
const data: ListRegisterTopic[] = [
  {
    key: "1",
    stt: "MGV",
    teacher_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    quanlity: 3,
    registered: 10,
    accepted: 1,
  },
  {
    key: "2",
    stt: "MGV",
    teacher_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    quanlity: 3,
    registered: 10,
    accepted: 1,
  },
  {
    key: "3",
    stt: "MGV",
    teacher_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    quanlity: 3,
    registered: 10,
    accepted: 1,
  },
  {
    key: "4",
    stt: "MGV",
    teacher_name: "John Brown",
    khoa: "Toan-Tin",
    topic: "New York No. 1 Lake Park",
    quanlity: 3,
    registered: 10,
    accepted: 1,
  },
];
const ListTopicPages: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="container mx-auto">
      <p>Thời hạn đăng ký là: </p>

      <div className="flex gap-4 mt-8 ">
        <Input
          style={{ width: "30%" }}
          placeholder="Nhập tên giáo viên"
          suffix={<SearchOutlined />}
        />
        <Button>Tìm Kiếm</Button>
        <Button onClick={handleOpenModal}>Đăng ký đề tài</Button>
      </div>

      <div className="mt-4 border-solid border-2 rounded-md">
        <Table columns={columns} dataSource={data} />
      </div>
      <ModalRegisterTopic
        isModalOpen={isOpen}
        handleCancle={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ListTopicPages;
