import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router-dom'
import './newsForm.css'
import { getPrivate, postPrivate, putPrivate } from '../../services/apiServices';
import Alert from '../../services/AlertService';

function NewsForm({ patch }) {
    let { id } = useParams()
    const [newsFormData, setNewsFormData] = useState({ 
                                                       title:'', 
                                                       image:'',
                                                       content:'',
                                                       category:''
                                                     })

    const updateField = (e) => {

            setNewsFormData({...newsFormData,[e.target.name]: e.target.value}); };
    
    useEffect(() => {
        if (patch) {
            getPrivate(`/news/${id}`)
                .then(res => res.json())
                .then(res => setNewsFormData(res))
                .catch(err => Alert.error({title:'Error ', message :`${err.message}`}))
        }
    },[id,patch]);

    const onSubmit = (e) => {
        e.preventDefault()
        if (patch) {
            putPrivate(`/news/${id}`, newsFormData)
            .then(res => Alert.success({ title:'Se modificó la novedad:', message : `${newsFormData.title}`}))
            .catch(err=> Alert.error({title:'No se ha podido modificar la novedad...'}))
        } else {
            postPrivate(`/news`, newsFormData)
            .then(res => Alert.success({ title:`Se ha creado la novedad: `, message : `${newsFormData.title}` }))
            .catch(err=> Alert.error({title:'No se pudo crear la novedad: ', message :`${err.message}`}))
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
                        value={newsFormData.title}
                        name='title'
                        onChange={(e) =>  updateField(e)} />
                </div>
                <div className="newsImage newsInput">
                    <label>Image</label>
                    <input
                        value={newsFormData.image}
                        type="file"
                        name='image'
                        onChange={(e) =>  updateField(e)}/>
                </div>
                <div className="newsCategory newsInput">
                    <label>Category</label>
                    <input
                        type="text"
                        className='categoryInput'
                        value={newsFormData.category}
                        name='category'
                        onChange={(e) =>  updateField(e)} />
                </div>
            </div>
            <CKEditor 
                className='contentInput'
                editor={ClassicEditor}
                data={newsFormData.content}
                value={newsFormData.content}
                onChange={(e, editor) => {
                    const data = editor.getData()
                    setNewsFormData({...newsFormData, content: data })
                }}
            />
            <button
                className="btn btn-primary"
                type='submit'
                onClick={(e) => { onSubmit(e) }}>{patch ? "Update News" : "Create News"}</button>
        </div>
    )
}

export default NewsForm