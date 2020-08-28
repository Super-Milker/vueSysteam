// 系统API
const SysteamApi = {
  getMenuCheck: 'RiverCour/GetUserRoleList',
  // 用户管理
  userConfig: {
    List: '/api/getUserConfig',
    Edit: '/api/userConfigEdit',
    Add: '/api/userConfigAdd',
    Delete: '/api/userConfigDelete',
    InitEdit: '/api/userConfigInitEdit'
  },
  // 信息中心
  informationCenter: {
    netWork: {
      tableDataList: '/api/netWork/tableDataList'
    }
  }
}

export default {
  SysteamApi
}
