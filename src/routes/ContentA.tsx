import React, { useState } from 'react'
import './App.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'


function ContentA() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>('Redux')

    return (
        <div>
            <h2>Content A</h2>
            <input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} />
            <p>{name}</p>
        </div>
    );
}

export default ContentA
