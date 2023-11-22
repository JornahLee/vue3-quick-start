/**
 * api接口统一管理
 */
import {get, post, uploadFile} from './MyAxios'

/**
 *
 * @param {string} params
 * 我们定义了一个topics方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */

export default {
    doGetSomething: params => get('/test', params),
    doPostSomething: params => post('/test', params),
    doUploadFile: (filename, file) => {
        return uploadFile('/upload', filename, file)
    }
}

