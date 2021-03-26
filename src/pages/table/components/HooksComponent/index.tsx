import React, { useState, useEffect } from 'react'

export default function HooksComponent() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])
    const _useState = useState(0)
    console.log(_useState)

    useEffect(() => {
        console.log('useEffect')
        document.title = `you '${count}`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
