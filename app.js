//app.js是小程序的脚本代码。
//我们可以在这个文件中监听并处理小程序的生命周期函数、声明全局变量。
//调用框架提供的丰富的 API，如本例的同步存储及同步读取本地数据。

//app.json 是对整个小程序的全局配置。我们可以在这个文件中配置小程序是由哪些页面组成，配置小程序的窗口背景色，配置导航条样式，配置默认标题。
//app.json 的 pages 中的第一个页面是小程序的首页。
//！！！注意！！！ app.json 文件不可添加任何注释。 


//https://image.baidu.com/channel/listjson?pn=0&rn=1&tag1=%E7%BE%8E%E5%A5%B3&tag2=%E5%85%A8%E9%83%A8&ie=utf8



App({
    onLaunch: function () {
//        console.log('App Launch')
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserInfo:function(cb){
        var that = this
        if(this.globalData.userInfo){
            typeof cb == "function" && cb(this.globalData.userInfo)
        }else{
            //调用登录接口
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    onShow: function () {
//        console.log('App Show')
    },
    onHide: function () {
//        console.log('App Hide')
    },
    globalData:{
        userInfo:null
    },
    globalPage:1,
    globalName:'福利',
    globalType:'common'
})