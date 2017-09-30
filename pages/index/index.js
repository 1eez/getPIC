var appInstance = getApp();
var RequestData = require('../../js/RequestData.js') ;
var IMGSRC = '';

Page({

  data:{
    GankDatas:[],
    loadingHidden : false,
    modalHidden : true,
    bodyHeight : 0,
  },

  onLoad:function(options){
    reda(this,appInstance.globalType, appInstance.globalName);
    var that = this
  },

  //保存图片
  onSavePic :function(event){
    IMGSRC = event.currentTarget.dataset.imgsrc;
    this.setData({
      "modalHidden" : false,
      "modalImgSrc" : IMGSRC
    })
  },
  //图片取消
  modalChange : function (event) {
    this.setData({
     "modalHidden" : true,
    })
  },

  modalconfirm : function (event) {
    wx.downloadFile({
      url: IMGSRC,
      type: 'image',
      success: function(res) {
        // console.log(res.tempFilePath)
      }
    })
  },

});

function reda(_self, type,value){
  RequestData.init({
      "value" : value,
      "type" : type,
      "page" : appInstance.globalPage
    },function(data){
        _self.setData({
          "GankDatas" : data,
          "loadingHidden" : true
        });
        appInstance.globalPage++;
    });
}

function trim(str) {
    return str.replace(/^(\s*)|(\s*)$/g,"");
}