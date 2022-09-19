import { ref } from 'vue'

export const useMemoList = () => {

    const ls = localStorage.memoList
    const memoListRef = ref([])
    const editId = ref(-1)

    memoListRef.value = ls ? JSON.parse(ls) : []

    const add = (memo, category, user_id) => {
        const id = new Date().getTime()

        memoListRef.value.push({user_id: user_id, id: id, memo: memo, category_id: category, checked: false})
        saveStorage()
    }

    const show = (id) => {
        const item = findById(id)

        editId.value = id
        return item.memo
    }

    const edit = (memo) => {
        const item = findById(editId.value)
        const idx = findIndexById(editId.value)

        item.memo = memo
        memoListRef.value.splice(idx, 1, item)
        saveStorage()
    }

    const del = (id) => {
        const idx = findIndexById(id)

        memoListRef.value.splice(idx, 1)
        saveStorage()
    }

    const check = (id) => {
        const item = findById(id)
        const idx = findIndexById(id)

        item.checked = !item.checked
        memoListRef.value.splice(idx, 1, item)
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