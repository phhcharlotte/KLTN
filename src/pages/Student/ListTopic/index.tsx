import React from "react";

import { Button, Input, Table } from "antd";
import type { TableProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  stt: string;
  teacher_name: string;
  khoa: string;
  topic: string;
  quanlity: number;
  registered: number;
  accepted: number;
}
const columns: TableProps<DataType>["columns"] = [
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
];
const data: DataType[] = [
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
  return (
    <>
      <div className="flex">
        <Input placeholder="Basic usage" suffix={<SearchOutlined />} />
        <Button>Tìm Kiếm</Button>
        <Button>Đăng ký đề tài</Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ListTopicPages;