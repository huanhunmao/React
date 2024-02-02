// useList.js - Logic/Model 模块
import { useState, useEffect } from 'react';
import { fetchDataFromServer, deleteItemFromServer } from './server'

export function useList() {
    const [items, setItems] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            try{
                // 数据获取的逻辑
                const data = await fetchDataFromServer()
                setItems(data)
            }catch(error){
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    },[])

    const deleteItem =async  itemId => {
        try{
            // 调用删除数据的函数
            await deleteItemFromServer(itemId)

            // 更新状态，触发 UI 重新渲染
            setItems(prevItems => prevItems.filter(item => item.id !== itemId))
        }catch(error){
            console.error('Error deleting item:', error);
        }
    }


    return {
        items,
        deleteItem
    }
}