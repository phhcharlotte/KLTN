import React from "react";

import { Button, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  stt: string;
  student_name: string;
  khoa: string;
  topic: string;
  isRegisted: boolean;
}
const columns: TableProps<DataType>["columns"] = [
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
const data: DataType[] = [
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
  return (
    <div className="container mx-auto">
      <p>Thời hạn đăng ký là: </p>

      <div className="flex gap-4 mt-8 ">
        <Button>Tạo thời gian đăng ký đề tài</Button>
      </div>

      <div className="mt-4">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ListStudent;
