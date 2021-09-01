import React, { useState, useEffect } from 'react'
import { selectMessage, save } from '../models/message'
import { selectUserList, userAsync } from '../models/user'
import './App.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import ContentA from './ContentA'
import ContentB from './ContentB'

function Home() {
    // 建立 dispatch
    const dispatch = useAppDispatch()
    // 取得儲存在 Store 的 message 資料
    const msg = useAppSelector(selectMessage)
    const userList = useAppSelector(selectUserList)
    // 宣告頁面上有一個 message state 變數，並設定資料型態為string，初始值為''空
    const [message, setMessage] = useState<string>('')

    console.log(userList)

    // 當載入頁面時執行get user的資料(只執行一次)
    useEffect(() => {
        console.log('useEffect')
        dispatch(userAsync())
    }, [])

    return (
        <div className="App">
            {console.log('Rendering')}
            <header className="App-header">
                <h1>Local State</h1>
                <input
                    value={message}
                    // 當更改 input 內容時，觸發 setMessage 方法去改變 message state
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setMessage(e.target.value) }} />
                <p>
                    {message}
                </p>
                <h1>Store State</h1>
                <input
                    value={msg}
                    // 當更改 input 內容時，觸發 dispatch 方法去改變 store 中的 message 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { dispatch(save(e.target.value)) }} />
                <p>
                    {msg}
                </p>
                <div className="content">
                    <ContentA />
                    <ContentB />
                </div>
            </header>
        </div>
    );
}

export default Home
