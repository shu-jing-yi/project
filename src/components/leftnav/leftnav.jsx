import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import menulist from '../../config/menuConfig'

const { SubMenu } = Menu;
class Ieftnav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.menunods = this.getMenuNodes_map(menulist)
  }

  // 递归调用参数menulist列表里的数据，动态显示
  getMenuNodes_map = (menulist) => {
    // class组件props里面包含(location,history,match)三大对象
    const path = this.props.location.pathname

    return menulist.map(item => {
      if (!item.children) {  // 如果没有子路由
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {  // 如果有子路由
        // 查找一个与当前请求路径匹配的子Item
        const cItem = item.children.find(
          (cItem) => path.indexOf(cItem.key) === 0
        );
        // 如果存在, 说明当前item的子列表需要打开
        if (cItem) {
          this.openKey = item.key;
        }
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes_map(item.children)}
          </SubMenu>
        )
      }
    })
  }

  render() {
    const path = this.props.location.pathname
    const openKey = this.openKey;
    console.log(path)
    return (
      <div>
        <Menu
          selectedKeys={[path]}
          mode="inline"
          theme="dark"
        >
          {this.menunods}
          <>
            {/* <Menu.Item key="1">
            <Link to="/home">
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/category">
                <Icon type="bars" />
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/product">
                <Icon type="tool" />
                <span>商品管理</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Link to="/user">
              <Icon type="user" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/role">
              <Icon type="safety" />
              <span>角色管理</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="area-chart" />
                <span>图形管理</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Link to="/charts/bar">
                <Icon type="bar-chart" />
                <span>柱状图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/charts/line">
                <Icon type="line-chart" />
                <span>折叠图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/charts/pie">
                <Icon type="pie-chart" />
                <span>饼图</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="95">
            <Link to="/order">
              <Icon type="solution" />
              <span>订单管理</span>
            </Link>
          </Menu.Item> */}
          </>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Ieftnav);