const Mock = require('mockjs')
const Random = Mock.Random

const userInfoData = function () {
  let person = []
  for (let index = 0; index < 10; index++) {
    person.push(
      {
        userID: index,
        name: Random.cname(),
        phone: /^[1][3,4,5,7,8][0-9]{9}$/,
        address: Random.county(true)
      }
    )
  }
  return {
    data: person,
    total: 10
  }
}

Mock.mock('http://localhost:8080/api/Login', 'post', param => {
  return {
    result: '登录成功'
  }
})

Mock.mock('http://localhost:8080/api/getUserConfig', 'post', userInfoData())

Mock.mock('http://localhost:8080/api/userConfigInitEdit', 'post', param => {
  return JSON.parse(param.body).data
})

Mock.mock('http://localhost:8080/api/userConfigAdd', 'post', param => {
  return {
    result: '添加成功'
  }
})

Mock.mock('http://localhost:8080/api/userConfigEdit', 'post', param => {
  return {
    result: '操作成功'
  }
})

Mock.mock('http://localhost:8080/api/userConfigDelete', 'post', param => {
  return {
    result: '删除成功'
  }
})

// 网络中心
const messageCenterData = function (listNum) {
  let allTemp = []
  let dataTemp = []
  for (let count = 0; count < listNum; count++) {
    dataTemp = []
    for (let index = 0; index < 5; index++) {
      dataTemp.push(
        {
          url: Random.url(),
          domain: Random.domain(),
          ip: Random.ip(),
          address: Random.county(true),
          date: Random.date()
        }
      )
    }
    allTemp.push({
      name: 'tableData' + count,
      data: dataTemp,
      column: [
        { prop: 'url', label: '网络地址' },
        { prop: 'domain', label: '域名' },
        { prop: 'ip', label: 'IP地址' },
        { prop: 'date', label: '时间' }
      ]
    })
  }
  return allTemp
}
Mock.mock('http://localhost:8080/api/netWork/tableDataList', 'post', messageCenterData(2))

Mock.setup({
  timeout: 0 - 800
})
