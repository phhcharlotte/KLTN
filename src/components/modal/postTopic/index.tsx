import React from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";

type RegisterTopic = {
  isModalOpen: boolean;
  handleCancle: () => void;
};

type FieldType = {
  username?: string;
  password?: string;
};

const ModalPostTopic: React.FC<RegisterTopic> = ({
  isModalOpen,
  handleCancle,
}) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title=""
        open={isModalOpen}
        onCancel={handleCancle}
        closeIcon={false}
        footer={false}>
        <p className="text-center text-xl font-bold mb-2">Đăng đề tài</p>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item<FieldType>
            label="Đề tài"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Yêu cầu"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={handleCancle}>
              Huỷ bỏ
            </Button>
            <Button type="primary" htmlType="submit" className="ml-4">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPostTopic;
