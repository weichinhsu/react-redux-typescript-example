import React, { useState, useEffect } from 'react';
import { selectMessage, save } from '../models/message'
import './App.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';


function Home() {
    const msg = useAppSelector(selectMessage)
    const dispatch = useAppDispatch()
    const [message, setMessage] = useState<string>('')

    const mapCulture = (val: any) => {
        return (
            <div key={val.title}>
                <p>{val.title}</p>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Local State</h1>
                <input
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setMessage(e.target.value) }} />
                <p>
                    {message}
                </p>
                <h1>Store State</h1>
                <input
                    value={msg}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { dispatch(save(e.target.value)) }} />
                <p>
                    {msg}
                </p>
            </header>
        </div>
    );
}

export default Home;
