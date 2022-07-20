import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getPrivate, postPrivate, putPrivate } from '../../services/apiServices';
import Alert from '../../services/AlertService';


export const ActivitiesForm = ({ update }) => {

    let { id } = useParams()
    const [activitiesFormData, setActivitiesFormData] = useState({
        name: '',
        image: '',
        content: '',
    })

    const updateField = (e) => {
        setActivitiesFormData({ ...activitiesFormData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (update) {
            getPrivate(`/activities/${id}`)
                .then(res => res.json())
                .then(res => setActivitiesFormData(res))
                .catch(err => Alert.error({ title: 'Error ', message: `${err.message}` }))
        }
    }, [id, update]);

    const onSubmit = (e) => {
        e.preventDefault()
        if (update) {
            putPrivate(`/activities/${id}`, activitiesFormData)
                .then(res => Alert.success({ title: 'Se modificó la actividad:', message: `${activitiesFormData.name}` }))
                .catch(err => Alert.error({ title: 'No se ha podido modificar la actividad...' }))
        } else {
            postPrivate(`/activities`, activitiesFormData)
                .then(res => Alert.success({ title: `Se ha creado la actividad: `, message: `${activitiesFormData.name}` }))
                .catch(err => Alert.error({ title: 'No se pudo crear la actividad: ', message: `${err.message}` }))
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center m-5'>Actividades</h1>
            <div>
                <form className='my-5'>
                    <div className="form-group fs-2 m-5">
                        <label htmlFor="name" className='mb-3'>Titulo</label>
                        <input
                            type="text"
                            className='form-control fs-4'
                            value={activitiesFormData.name}
                            onChange={(e) => { updateField(e) }} />
                    </div>
                    <div className="form-group fs-2 m-5">
                        <CKEditor
                            className='form-control'
                            editor={ClassicEditor}
                            data={activitiesFormData.content}
                            value={activitiesFormData.content}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setActivitiesFormData({ ...activitiesFormData, content: data })
                            }}
                        />
                    </div>
                    <div className="form-group fs-2 m-5">
                        <div class="input-group">
                            <label class="input-group-text fs-2" for="inputGroupFile01">Imagen</label>
                            <input
                                type="file"
                                class="form-control fs-2"
                                value={activitiesFormData.image}
                                name='image'
                                id="inputGroupFile01"
                                onChange={(e) => updateField(e)} />
                        </div>
                    </div>
                    <button
                        className="btn btn-danger fs-4"
                        type='submit'
                        onClick={(e) => { onSubmit(e) }}
                        style={{ width: 120, borderRadius: 30 }}>{update ? "Actualizar" : "Crear"}</button>
                </form>
            </div>
        </div>
    )
}
