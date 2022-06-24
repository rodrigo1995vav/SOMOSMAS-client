import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './newsForm.css'

function NewsForm({ patch }) {
    let { id } = useParams()
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    useEffect(async () => {
        if (patch) {
            const newsData = await axios.get(`http://localhost:8080/news/${id}`)
            setTitle(newsData.title)
            setImage(newsData.image)
            setContent(newsData.content)
            setCategory(newsData.category)
        }
    }, []);

    const onSubmit = async () => {
        if (patch) {
            await axios.patch(`http://localhost:8080/news/${id}`, { title, image, content, category })
        } else {
            await axios.post(`http://localhost:8080/news`, { title, image, content, category })
        }
    }

    return (
        <div className="newsForm">
            <h1>{patch ? "Update News" : "Create News"}</h1>
            <div className="inputs">
                <div className="newsTitle newsInput">
                    <label>Title</label>
                    <input
                        type="text"
                        className='titleInput'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="newsImage newsInput">
                    <label>Image</label>
                    <input
                        value={image}
                        type="file"
                        onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="newsCategory newsInput">
                    <label>Category</label>
                    <input
                        type="text"
                        className='categoryInput'
                        value={category}
                        onChange={(e) => { setCategory(e.target.value) }} />
                </div>
            </div>
            <CKEditor
                className='contentInput'
                editor={ClassicEditor}
                data={content}
                value={content}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setContent(data)
                }}
            />
            <button
                className="btn btn-primary"
                type='submit'
                onClick={() => { onSubmit() }}>{patch ? "Update News" : "Create News"}</button>
        </div>
    )
}

export default NewsForm