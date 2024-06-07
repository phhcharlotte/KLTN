import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BookOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";
import ListTopicPages from "../pages/Student/ListTopic";
import ReportKLTN from "../pages/Student/Report";
import LoginPage from "../pages/login";

const { Header, Content, Sider } = Layout;

const STUDENT_LAYOUT: (ItemType & { path: string })[] = [
  {
    key: "1",
    icon: <BookOutlined />,
    label: "Đăng ký đề tài",
    path: "/home",
  },
  {
    key: "2",
    icon: <VerticalAlignTopOutlined />,
    label: "Nộp báo cáo khoá luận",
    path: "/report",
  },
];

const StudentLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthenticated(true);
    }, 3000);
  }, []);

  if (!authenticated) {
    return <LoginPage />;
  }

  return (
    <Layout className="min-h-screen">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div className="demo-logo" />
        <div
          className="text-white"
          onClick={() => {
            setAuthenticated(false);
          }}>
          Log out
        </div>
      </Header>
      <Content style={{ padding: "24px 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "90%",
          }}>
          <Sider style={{ background: colorBgContainer }} width={250}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%" }}
              items={STUDENT_LAYOUT.map((i) => ({
                ...i,
                onClick: () => navigate(i.path),
              }))}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Routes>
              <Route path="/home" element={<ListTopicPages />} />
              <Route path="/report" element={<ReportKLTN />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default StudentLayout;
