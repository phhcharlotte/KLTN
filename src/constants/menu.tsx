import { BookOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";

type MenuItem = ItemType & { path: string };

export const MenuStudent: MenuItem[] = [
  {
    key: "1",
    label: "Danh sách khoá luận",
    path: "/",
  },
  {
    key: "2",
    label: "Báo cáo khoá luận",
    path: "/",
  },
];
export const MENU_TEACHER: MenuItem[] = [
  {
    key: "1",
    label: "Đăng đề tài ",
    path: "/",
  },
  {
    key: "2",
    label: "",
    path: "/",
  },
];

export const MENU_ADMIN: MenuItem[] = [
  {
    key: "1",
    label: "Đăng đề tài ",
    path: "/",
  },
  {
    key: "2",
    label: "",
    path: "/",
  },
];

export const STUDENT_LAYOUT: MenuItem[] = [
  {
    key: "1",
    icon: <BookOutlined />,
    label: "Đăng ký đề tài",
    path: "/",
  },
  {
    key: "2",
    icon: <VerticalAlignTopOutlined />,
    label: "Nộp báo cáo khoá luận",
    path: "/report",
  },
];
