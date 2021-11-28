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
  }, {
    url: '/api/getDefaultList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [{
          userName: '无敌风火轮',
          userPhoto: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fec%2Fca%2Fd8%2Feccad87a334d082b8ff200ae01157e44.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640706315&t=d0d3ea923333fe28817ba3c6f090b56e',
          title: '转让无敌风火轮一个，9成新',
          subtitle: '转让无敌风火轮一个，9成新',
          createDate: '2021-11-10',
          img: 'http://pic.baike.soso.com/p/20140605/20140605093150-1805176075.jpg'
        }, {
          userName: 'winter',
          userPhoto: 'http://up.enterdesk.com/edpic/52/c9/24/52c924bd5db63b23aeb4ebb41de4192e.jpg',
          title: '精装一居业主直租',
          subtitle: '百子湾地铁站旁，精装一居室，2000元/月',
          createDate: '2021-11-13',
          img: 'http://pic.51yuansu.com/pic3/cover/03/06/73/5b35d57a16bf7_610.jpg'
        }, {
          userName: '猜猜我是sei',
          userPhoto: 'http://inews.gtimg.com/newsapp_bt/0/8383759298/0.jpg',
          title: '9成新二手iphone',
          subtitle: '9成新二手iphone，发票配件齐全，上门送货，当场验收',
          createDate: '2021-11-17',
          img: 'https://img0.baidu.com/it/u=2173735485,854425428&fm=224&fmt=auto&gp=0.jpg'
        }, {
          userName: '无敌风火轮',
          userPhoto: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fec%2Fca%2Fd8%2Feccad87a334d082b8ff200ae01157e44.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640706315&t=d0d3ea923333fe28817ba3c6f090b56e',
          title: '转让无敌风火轮一个，9成新',
          subtitle: '转让无敌风火轮一个，9成新，有意者联系，骗子勿扰，谢谢',
          createDate: '2021-11-28',
          img: 'http://pic.baike.soso.com/p/20140605/20140605093150-1805176075.jpg'
        }]
      }
    }
  }
]