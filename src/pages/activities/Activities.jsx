import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';


export const Activities = ({ patch }) => {

    let { id } = useParams()
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    useEffect(async () => {
        if (patch) {
            const activitiesData = await axios.get(`http://localhost:8080/activities/${id}`)
            setName(activitiesData.name)
            setContent(activitiesData.content)
        }
    }, []);

    const onSubmit = async () => {
        if (patch) {
            await axios.patch(`http://localhost:8080/activities/${id}`, { name, content })
        } else {
            await axios.post(`http://localhost:8080/activities`, { name, content })
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center m-5'>Activities</h1>
            <div>
                <form className='my-5'>
                    <div className="form-group fs-2 m-5">
                        <label htmlFor="name" className='mb-3'>Nombre</label>
                        <input
                        type="text"
                        className='form-control fs-4'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="form-group fs-2 m-5">
                        <CKEditor
                            className='form-control'
                            editor={ClassicEditor}
                            data={content}
                            value={content}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setContent(data)
                            }}
                        />
                    </div>
                    <button
                className="btn btn-danger fs-4"
                type='submit'
                onClick={() => { onSubmit() }}
                style={{width: 120, borderRadius: 30}}>{patch ? "Actualizar" : "Crear"}</button>
                </form>
            </div>
        </div>
    )
}
