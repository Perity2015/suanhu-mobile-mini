import {wxUtil} from './wxUtil'

const HOST = 'https://weixin.suanhuw.com';

export const post = (url, data, option) => {
  wxUtil.showLoading(option)
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${HOST}${url}`,
      method: 'POST',
      data: data,
      success: (res) => {
        wxUtil.hideLoading(option)
        const newRes = res.data
        if (newRes.code === 200) {
          resolve(newRes)
        } else {
          wxUtil.showToast(newRes)
          resolve(newRes)
        }
      },
      fail: (res) => {
        wxUtil.hideLoading(option)
        reject(res)
      }
    })
  })
}
