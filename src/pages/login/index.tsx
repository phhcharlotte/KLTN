import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../apis";
import Input from "../../components/input";

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axiosClient.post("/login", {
        username: userName,
        password: password,
      });
      localStorage.setItem("token", res?.data?.token);
      if (res?.data?.user?.role === "admin") {
        setLoading(false);
        navigate("/list-student");
      } else if (res?.data?.user?.role === "student") {
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
        navigate("/list-topic");
      }
    } catch (error: any) {
      setError(error.response.data.msg);
    } finally {
      setLoading(false);
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
          <div className="form-item">
            {error && <p style={{ color: "red" }}>{error}</p>}
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
