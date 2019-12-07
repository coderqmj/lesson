Page({
  data:{
    imgUrls: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575215706182&di=1016cfd65b4db35d6bb068892f56a579&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FTemplet%2F00%2F19%2F65%2F20%2F196520_b6fe7c0a9f3f94282a317fb644ae746b.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Ffw%2F840",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575216334458&di=b8dee98f9f97da45cefa6aa10688bab5&imgtype=0&src=http%3A%2F%2Fddp.ecut.edu.cn%2F_upload%2Farticle%2Fimages%2F82%2Fb1%2F356893964e599ffff2ba4ade37ff%2F361a39fd-abec-41b8-9f92-4117babee1ea.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575216379920&di=9a6c0d04e494c1cf2d53c0e0ab744809&imgtype=0&src=http%3A%2F%2Fjyb.ecut.edu.cn%2F_upload%2Farticle%2Fimages%2F7b%2F61%2F08cb6a7948cd851a94333d04d211%2F979314f9-c770-4f3e-8284-87c38764541b.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575215706182&di=fdc7e964f43d4c1c28fbbf6c3a7d7ff2&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FTemplet%2F00%2F19%2F52%2F14%2F195214_a87e5cfda3f3b26edc70e295d7bab2d1.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Ffw%2F840"
      
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
  },
  onLoad:function(options){
    this.setData({
      msgList: [
        {
          url: "url", title: "校园头条：英语四六级即将到来！"
        },
        {
          url: "url", title: "校园头条：2019年江西省普通高校录取分数出炉！"
        },
        { url: "url", title: "校园头条：我校成立首支无偿献血宣传志愿者服务队" }]
    });
  }
})