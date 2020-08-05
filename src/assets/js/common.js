import { MessageBox, Message } from 'element-ui'
import request from './request'

// 判空
const emptyCheck = (data) => {
  if (data !== '' && typeof (data) !== 'undefined' && data != null) {
    return false
  } else {
    return true
  }
}

// 删除信息提示
const delmessageTip = ({ title = '提示', message = '是否执行删除操作', url, data, vm }) => {
  return new Promise((resolve, reject) => {
    MessageBox({
      title: title,
      message: message,
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }).then(response => {
      request
        .Axios({ url: url.url, data: data })
        .then(response => {
          if (vm) {
            vm.$refs.table.urlRequest()
          }
          resolve(response)
        })
    }).catch(() => {
    })
  })
}

// 信息提示
const messageTip = {
  success (message) {
    Message({
      message: message,
      type: 'success'
    })
  },
  warn (message) {
    Message({
      message: message,
      type: 'warning'
    })
  }
}

export default {
  emptyCheck, // 判空
  delmessageTip, // 删除信息提示
  messageTip // 基本信息提示
}
