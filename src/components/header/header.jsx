import React, { Component } from 'react'
import './header.css'
import { Modal, Button } from 'antd';
import StorageUtil from '../../tools/storageUtil'
import { fromateDate } from '../../tools/dateUtils'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: fromateDate(Date.now()) }
  }

  // 获取时间
  getTime = () => {
    this.intervalId = setInterval(() => {
      const currentTime = fromateDate(Date.now())
      this.setState({
        currentTime,
        visible: false
      })
    }, 1000)
  }

  componentDidMount() {
    this.getTime()
  }

  // 退出登陆
  loginout = (e) => {
    Modal.confirm({
      content: "确定退出吗？",
      onOk: () => {
        // 删除保存的user数据
        StorageUtil.removeUser();

        // 跳转到login
        this.props.history.push('/login')
      }
    })
  }

  render() {
    const { currentTime } = this.state
    return (
      <div className="admin_header">
        <div className="header_top">
          当前的时间------{currentTime}---------
          <Button type="primary" onClick={this.loginout}>退出登录</Button>
        </div>
        <div className="header_bottom">这是头部下</div>
      </div>
    );
  }
}

export default withRouter(Header);