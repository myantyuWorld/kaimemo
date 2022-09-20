import axios from 'axios'

// あの日見たaxios機能を僕たちはまだ知らない
// https://sapper-blog-app.vercel.app/blog/axios
const api = () => {

    const instance = axios.create({
        baseURL : "http://localhost:3000/",
        timeout: 5000
    })

    // こちらはレスポンスに処理を挟み込む
    // 第1引数には正常終了時(デフォルトでは200系を受け取ったとき)に呼ばれるコールバック関数を受け取る
    // 第2引数にはエラー発生時に呼ばれるコールバック関数を受け取る
    instance.interceptors.request.use(response => {
        console.log(response.data)
        // 同様にresponseをreturnする必要がある
        return response
    }, err => {
        // 何らかのエラー処理
        console.err(err)
        return Promise.reject(err)
    })

    return instance
}

const get = (path, params = null) => {
    let options = null
    if (params) {
        options = {
            params
        }
    }
    return api().get(path, options)
}

const post = (path, params = null) => {
    let options = null
    if (params) {
        options = {
            params,
        }
    }
    return api().post(path, params)
}

const put = (path, params = null) => {
    return api().put(path, params)
}

const del = (path) => {
    return api().delete(path)
}

export const apiBase = {
    get, 
    post,
    put,
    del,
}