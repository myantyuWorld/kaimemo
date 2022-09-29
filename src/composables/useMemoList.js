import { ref } from 'vue'
import { apiBase } from './api.js'
import { useRoute } from 'vue-router'

export const useMemoList = () => {

    // const ls = localStorage.memoList
    const memoListRef = ref([])
    const editId = ref(-1)
    const route = useRoute()
    const userId = route.query.user_id

    apiBase.get('goods', { user_id: userId })
    .then((response) => {
        const ls = response.data
        memoListRef.value = ls ? ls : []
    })

    const add = (memo, category) => {
        const now = new Date()
        const memoObj = {
            user_id: userId, 
            memo: memo, 
            category_id: category, 
            checked: "0",
        }
        memoListRef.value.push(memoObj)
        apiBase.post('goods', memoObj)
        .then((response) => {
            console.log(response.data)
        })
        saveStorage()
    }

    const show = (id) => {
        const item = findById(id)

        editId.value = id
        return item.memo
    }

    const edit = (memo) => {
        const memoObj = findById(editId.value)
        const idx = findIndexById(editId.value)

        memoObj.memo = memo
        memoListRef.value.splice(idx, 1, memoObj)
        apiBase.post('goods', memoObj)
        .then((response) => {
            console.log(response.data)
        })
        saveStorage()
    }

    const del = (id) => {
        const idx = findIndexById(id)

        console.log(`memoのid : ${id}`)
        memoListRef.value.splice(idx, 1)
        apiBase.del('goods', {id: id})
        saveStorage()
    }

    const check = (id) => {
        const item = findById(id)
        const idx = findIndexById(id)

        item.checked = !item.checked
        memoListRef.value.splice(idx, 1, item)

        // 物理削除としたい（checked =trueとする
        // TBD : POST OR PUT
        saveStorage()
    }
    
    //
    // --------------------------------------------------------------------
    //
    const saveStorage = () => {
        localStorage.memoList = JSON.stringify(memoListRef.value)
    }

    const findById = (id) => {
        return memoListRef.value.find((memo) => memo.id === id)
    }

    const findIndexById = (id) => {
        return memoListRef.value.findIndex((memo) => memo.id === id)
    }

    return {
        memoListRef, 
        add, 
        show, 
        edit,
        del,
        check,
    }
}