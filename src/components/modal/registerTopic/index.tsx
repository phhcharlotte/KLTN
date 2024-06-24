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
            <label>Tên giáo viên</label>
            <Input value={userName} onChange={(value) => setUserName(value)} />
          </div>
          <div className="form-item">
            <label>Đề tài</label>
            <Input value={password} onChange={(value) => setPassword(value)} />
          </div>
          <div className="form-item">
            <label>Mô tả</label>
            <Input value={password} onChange={(value) => setPassword(value)} />
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
