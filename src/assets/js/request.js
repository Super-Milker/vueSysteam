import axios from 'axios'
import Qs from 'qs'
import store from '@/store/store.js'
import { MessageBox, Message } from 'element-ui'
import urlConfig from '../../../static/js/config'
// baseURL =   ' http://' + document.location.host + '/url_help/'
const Axios = ({ url, method = 'post', baseURL = 'http://localhost:8080', contentType = 'application/json; charset=UTF-8', data, param, timeout = 10000, responseType = 'json', maxContentLength = 2000, adapter, tip = true }) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      baseURL: baseURL,
      headers: {
        'Authorization': 'bearer ' + window.sessionStorage.getItem('token'),
        'Content-Type': contentType
      },
      param: param,
      data: data,
      timeout: timeout,
      responseType: responseType,
      maxContentLength: maxContentLength,
      adapter: adapter,
      // adapter: function (config) {
      //   // console.log(config)
      //   // 模拟服务，返回mock数据
      //   return new Promise((resolve, reject) => {
      //     const resInfo = {
      //       data: { name: '666' },
      //       status: 200,
      //       statusText: 'OK'
      //     }
      //     // 调用响应函数
      //     setTimeout(() => {
      //       resolve(resInfo)
      //     }, 1000)
      //   })
      // },
      // 在请求之前对data传参进行格式转换
      // transformRequest: [function (data) {
      //   if (contentType !== 'multipart/form-data') { data = Qs.stringify({ data: JSON.stringify(data) }) } else {
      //     // data = { data }
      //   }
      //   return data
      // }],
      validateStatus: function (status) {
        if (status === 200) {
        }
        if (status === 500) {
          Message({
            message: '服务器好像走神了',
            type: 'error'
          })
        }
        return status
      }
    }).then(response => {
      if (response.status === 200) {
        if (tip === true) {
          Message({
            message: response.data.result,
            type: 'success'
          })
        }
        resolve(response)
      }
    }).catch(error => {
      Message({
        message: '发生了未知的错误',
        type: 'error'
      })
      reject(error)
    })
  })
}

const Concurrent = (obj) => {
  return new Promise((resolve, reject) => {
    axios.all(obj)
      .then(axios.spread((...response) => {
        resolve(response)
      })).catch(error => {
        reject(error)
      })
  })
}

// 添加请求拦截器
axios.interceptors.request.use(request => {
  // 在发送请求之前做些什么
  return request
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  // response.data.data = ''
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  Axios,
  Concurrent
}
