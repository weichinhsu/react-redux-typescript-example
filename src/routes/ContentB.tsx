import React, { useState } from 'react'
import './App.css'
import { useAppSelector } from '../app/hooks'


function ContentB() {
    // 從 Content B 讀取 Content A 中設定的 name，並在頁面上顯示

    return (
        <div>
            <h2>Content B</h2>
        </div>
    );
}

export default ContentB