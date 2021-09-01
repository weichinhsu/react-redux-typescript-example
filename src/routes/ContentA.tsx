import React, { useState } from 'react'
import { selectMessage, save } from '../models/message'
import './App.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'


function ContentA() {
    // 建立 dispatch
    const dispatch = useAppDispatch()

    // 宣告頁面上有一個 message state 變數，並設定資料型態為string，初始值為''空
    const [name, setName] = useState<string>('')

    return (
        <div>
            <h2>Content A</h2>
        </div>
    );
}

export default ContentA
