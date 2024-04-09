import React, { useContext } from "react";
import { Button, Form, Input } from 'antd';
import { LoginForm } from "../types/types";
import UserContext from "../utils/UserContext";
import LoginButtonContext from "../utils/LoginButtonContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { setUserName } = useContext(UserContext);
  const { setLoginButton } = useContext(LoginButtonContext);

  const navigate = useNavigate();

  const onFinish = async (value: LoginForm) => {
    // const data = await fetch(FETCH_MENU_URL);
    // const json = await data.json();

    setUserName!(value.username);
    setLoginButton!("Logout");
    navigate("/");
  }

  return (
    <Form
      className="w-[31.25rem] h-max"
      labelCol={{ span: 8}} wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item<LoginForm> label="Username" name="username" rules={[
        { required: true, message: 'Please enter your username' }
      ]}>
        <Input />
      </Form.Item>

      <Form.Item<LoginForm> label="Password" name="password" rules={[
        { required: true, message: 'Please enter your password'}
      ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="button">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;