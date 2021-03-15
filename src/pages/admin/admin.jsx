import React, { Component } from 'react'
import StorageUtil from '../../tools/storageUtil'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../../components/header/header'
import Home from '../home/home'
import Product from '../product/product'
import Category from '../category/category'
import User from '../user/user';
import Role from '../role/role'
import Line from '../charts/line'
import Bar from '../charts/bar'
import Pie from '../charts/pie'
import Order from '../order/order'
import Leftnav from '../../components/leftnav/leftnav'

const { Footer, Sider, Content } = Layout;
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    // 判断是否登录
    const user = StorageUtil.getUser()
    console.log(user)
    if (!user || !user._id) {  // 如果用户或者id不存在
      return <Redirect to="/login" />  // 跳转到login页面
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <Leftnav></Leftnav>
        </Sider>
        <Layout>
          <Header></Header>
          <Content>
            <Switch>
              <Redirect to="/home" exact from="/" />
              <Route path="/home" component={Home} />
              <Route path="/product" component={Product} />
              <Route path="/category" component={Category} />
              <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/charts/pie" component={Pie} />
              <Route path="/order" component={Order} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;