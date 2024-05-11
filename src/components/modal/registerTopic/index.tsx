import React from "react";
import { Button, Checkbox, Form, FormProps, Input, Modal } from "antd";

type RegisterTopic = {
  isModalOpen: boolean;
  handleCancle: (value: boolean) => void;
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const ModalRegisterTopic: React.FC<RegisterTopic> = ({
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
        onCancel={() => handleCancle}
        closeIcon={false}
        footer={false}>
        <h2 className="tex">Đăng ký đề tài</h2>
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
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={() => handleCancle}>
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

export default ModalRegisterTopic;