import { useMemberStore } from '@/stores'
import type { Data } from '@/types/RequestData'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //1.拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //2.请求超时拦截，默认60秒现在改为10秒
    options.timeout = 10000
    //3.设置请求头
    options.header = {
      ...options.header, //定义过来的header保留下来
      'source-client': 'miniapp',
    }
    //4.添加Token
    const memeberStore = useMemberStore()
    const token = memeberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    // console.log(options, 123)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 用于解析返回后的数据 Add By xuzhenyu 2025-05-03
 * @returns
 */
// const http = <T>(options: UniApp.RequestOptions) <T>返回值自定义,前面调用http的方式定义了<string[]>返回方式是以string数组的形式出现
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        //状态码2xx开头
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memeberStore = useMemberStore()
          memeberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'error',
            title: (res.data as Data<T>).msg || '请求错误!',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(error) {
        uni.showToast({
          title: '网络错误，请换个网络试下吧！',
          icon: 'error',
        })
        reject(error)
      },
    })
  })
}
