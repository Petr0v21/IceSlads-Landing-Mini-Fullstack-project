import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import './CreatePost.css'

const CreatePost = ({active, setActive}) => {
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        name: '', phone: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, clearError, message])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const url = 'http://localhost:5000/posts/create'

    const postsHandler = async () => {
        try {
            console.log('send')
            const data = await request(url, 'POST', { ...form })
            console.log(data.massage)
            alert('Готово!')
            setActive(false)
        } catch (e) {
            console.log(e)
        }
    }
    const getPost = async () => {
        fetch('/posts/findpost', { method: 'GET' })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <div className={active ? 'modal' : 'modal_active'} onClick={() => setActive(false)} >
            <div className={active ? 'modal_content' : 'modal_content_active'} onClick={(e) => e.stopPropagation()}>
                <div>
                    <input
                        type="text"
                        placeholder="Имя"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={changeHandler} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Номер Телефона"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={changeHandler} />
                </div>
                <div>
                    <button onClick={() => postsHandler()} disabled={loading} className="ButtonSendPost">Send</button>
                </div>
                <div>
                    <button onClick={() => getPost()} disabled={loading} className="ButtonSendPost">Get</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost