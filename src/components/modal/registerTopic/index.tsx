import React, { useState } from "react";
import { Button, Modal } from "antd";
import Input from "../../input";

type RegisterTopic = {
  isModalOpen: boolean;
  handleCancle: () => void;
};

const ModalRegisterTopic: React.FC<RegisterTopic> = ({
  isModalOpen,
  handleCancle,
}) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <Modal
        title=""
        open={isModalOpen}
        onCancel={handleCancle}
        closeIcon={false}
        footer={false}>
        <p className="text-center text-xl font-bold mb-2">Đăng ký đề tài</p>
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
            <Button type="primary" onClick={handleCancle}>
              Huỷ bỏ
            </Button>
            <Button type="primary" htmlType="submit" className="ml-4">
              Đăng ký
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalRegisterTopic;
