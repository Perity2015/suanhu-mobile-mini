export const wxUtil = {
  showLoading: (option) => {
    if (getOptionSuccess(option)) {
      wx.showLoading({title: '加载中...'})
    }
  },
  hideLoading: (option) => {
    if (getOptionSuccess(option)) {
      wx.hideLoading()
    }
  },
  showToast: (res) => {
    wx.showToast({
      title: res.msg,
      icon: 'none',
      duration: 2000
    })
  },
  wxPay: (data) => {
    return new Promise((resolve, reject) => {
      wx.requestPayment({
        ...data,
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          if (res.errMsg !== 'requestPayment:fail cancel') {
            wxUtil.showToast({msg: '支付失败'})
          }
          reject(res)
        }
      })
    })
  }
}

const getOptionSuccess = (option) => {
  return option ? option.loading : false
}
