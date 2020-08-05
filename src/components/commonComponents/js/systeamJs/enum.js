const topColor = {
  color: 'black'
}
const topImg = {
  isImg: false,
  img: '../../../../static/img/bghead1920.png'
}
const Menu = {
  fMenu: {
    type: 'master',
    data: [
      {
        index: '1',
        name: '个人中心',
        icon: 'el-icon-user',
        children: [
          {
            index: 'personCenter',
            name: '个人中心'
          }
        ]
      },
      {
        index: '2',
        name: '信息中心',
        icon: 'el-icon-star-off',
        children: [
          // {
          //   index: 'netWork',
          //   name: '硬件中心'
          // },
          {
            index: 'netWork',
            name: '网络中心'
          }
          // {
          //   index: 'netWork',
          //   name: '配置中心'
          // }
        ]
      },
      {
        index: '3',
        name: '系统管理',
        icon: 'el-icon-help',
        children: [
          {
            index: 'userConfig',
            name: '用户管理'
          }
        ]
      }
    ]
  }
}
export default {
  topColor,
  topImg,
  Menu
}
