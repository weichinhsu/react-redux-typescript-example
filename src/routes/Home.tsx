import React, { useState, useEffect } from 'react';
import { selectMessage, save } from '../models/message'
import './App.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';


function Home() {
    // 建立 dispatch
    const dispatch = useAppDispatch()
    // 取得儲存在 Store 的 message 資料
    const msg = useAppSelector(selectMessage)
    // 宣告頁面上有一個 message state 變數，並設定資料型態為string，初始值為''空
    const [message, setMessage] = useState<string>('')

    return (
        <div className="App">
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
            </header>
        </div>
    );
}

export default Home;
