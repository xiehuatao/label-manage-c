import {Button, Checkbox, Form, Input, message} from 'antd';
import React from 'react';
import Wrapper from "./styled";
import {useHistory} from "react-router-dom";

const login = () => {

  const history = useHistory();

  const onFinish = (values: any) => {
    const {password,username} = values;
    if(password === '123456' && username === 'admin') {
      message.success("登录成功");
      history.push('/manage/classify-manage');
    } else {
      message.error("登录失败，请检查账户及密码是否争取");
    }
  };

  return (
    <Wrapper>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="账户"
          name="username"
          rules={[{
            required: true,
            message: '请输入账户'},
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{
            required: true,
            message: '请输入密码'},
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>

  );
};

export default login;