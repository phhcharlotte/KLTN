import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../apis";
import Input from "../../components/input";

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const res = axiosClient.post("/login", {
      username: userName,
      password: password,
    });
    if (res?.user?.role === "admin") {
      setLoading(false);
      navigate("/home");
    } else if (res?.user?.role === "student") {
      setLoading(false);
      navigate("/home");
    } else {
      setLoading(false);
      navigate("/home");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-96 h-96 p-4 flex flex-col justify-center items-center rounded-xl border-solid border-2">
        <h1 className="mb-4">Đăng Nhập </h1>
        <form className="form">
          <div className="form-item">
            <label>Tên đăng nhập</label>
            <Input
              value={userName}
              onChange={(value) => setUserName(value)}
              placeholder="Tên đăng nhập"
            />
          </div>
          <div className="form-item">
            <label>Mật khẩu</label>
            <Input
              value={password}
              onChange={(value) => setPassword(value)}
              placeholder="Mật khẩu"
              type="password"
            />
          </div>
          <div className="text-center w-full mt-10">
            <Button type="primary" loading={loading} onClick={handleSubmit}>
              Đăng Nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
