import axios from 'axios'

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// } else if (process.env.NODE_ENV === 'debug') {
//     axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// } else if (process.env.NODE_ENV === 'production') {
//     axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// }
axios.defaults.baseURL = 'http://127.0.0.1:5000'

// 设置请求超时时间
axios.defaults.timeout = 10000

// 设置post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么 验证token之类的
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.error(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

function successHook() {
    // message.success('请求成功')
}

function failedHook() {
    // message.success('请求失败')
}


// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param status
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
            successHook()
        }).catch(err => {
            reject(err.data)
            failedHook()
        })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
                successHook()
            })
            .catch(err => {
                reject(err.data)
                failedHook()
            })
    })
}

export function uploadFile(url, filename, file) {
    return new Promise((resolve, reject) => {
        let data = new FormData(); //创建form对象
        data.append('file', file);//通过append向form对象添加数据
        axios.post(url, data,
            {
                headers: {"Content-Type": "multipart/form-data"}
            })
            .then(res => {
                resolve(res.data)
                successHook()
            })
            .catch(err => {
                reject(err.data)
                failedHook()
            })
    })
}

