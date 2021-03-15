import React, { Component } from 'react'
import Header from './header/header';
import { Form, Icon, Input, Button, message } from 'antd'
import { reqLogin } from '../../api/index'
import StorageUtil from '../../tools/storageUtil'
import './login.css'
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // 登录按钮
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { username, password } = values;
        const result = await reqLogin(username, password)
        // result.status为1，密码不正确
        // result.status为0，密码正确
        if (result.status === 0) {
          message.success("登陆成功");
          const user = result.data
          StorageUtil.saveUser(user)
          this.props.history.push("/");
        }
      }
    });
  };

  // 表单密码验证
  validatePwd = (rule, value, callback) => {
    console.log("validatePwd()", rule, value);
    if (!value) {
      callback("密码必须输入");
    } else if (value.length < 4) {
      callback("密码长度不能小于4位");
    } else if (value.length > 12) {
      callback("密码长度不能大于12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("密码必须是英文、数字或下划线组成");
    } else {
      callback(); // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  };

  render() {
    // 判断是否登录
    const user = StorageUtil.getUser()
    console.log(user)
    if (user && user._id) {
      return <Redirect to="/" />  // 跳转到admin页面
    }

    // 从form表单实例中获取getFieldDecorator
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login_page">
        <Header />
        <div className="login_bj">
          <div className="login_content">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ validator: this.validatePwd }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
              </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);