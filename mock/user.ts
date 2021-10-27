export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['袁总', '袁老大', '傻妞', '小傻子']
      }
    }
  }
]