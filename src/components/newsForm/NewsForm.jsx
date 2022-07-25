import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./newsForm.css";
import { postPrivate, putPrivate } from "../../services/apiServices";
import Alert from "../../services/AlertService";
import axios from "axios";

function NewsForm({ patch, setShowAMForm, getNews }) {


  const [newsFormData, setNewsFormData] = useState({});
  const [file, setFile] = useState();
  const [newName, setNewName] = useState(patch ? patch.name : "");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (patch) {
      axios
        .get(`/news/${patch.id}`)
        .then((res) => {
          setNewsFormData(res.data.payload);
        })
        .catch((err) =>
          Alert.error({ title: "Error ", message: `${err.message}` })
        );
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    } else {
      formData.append("image", patch.image);
    }
    console.log(file);
    formData.append("name", newName);
    formData.append("content", newsFormData.content);
    if (patch) {
      putPrivate(`/news/`, patch.id, formData)
        .then((res) => {
          Alert.success({
            title: "Se modificó la novedad:",
            message: `${newName}`,
          });
          console.log(res)
          getNews();
        })
        .then(setShowAMForm(false))
        .catch((err) =>
          Alert.error({ title: "No se ha podido modificar la novedad..." })
        );
    } else {
      postPrivate(`/news`, formData)
        .then((res) => {
          Alert.success({
            title: `Se ha creado la novedad: `,
            message: `${newName}`,
          });
          getNews()
        }).then(setShowAMForm(false))
        .catch((err) =>
          Alert.error({
            title: "No se pudo crear la novedad: ",
            message: `${err.message}`,
          })
        );
    }
  };

  return (
    <div className="newsForm">
      <h1>{patch ? "Update News" : "Create News"}</h1>
      <div className="inputs">
        <div className="newsTitle newsInput">
          <label>Title</label>
          <input
            type="text"
            className="titleInput"
            value={newName}
            name="name"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="newsImage newsInput">
          <label>Image</label>
          <input type="file" name="image" onChange={(e) => saveFile(e)} />
        </div>
      </div>
      <CKEditor
        className="contentInput"
        editor={ClassicEditor}
        data={newsFormData.content}
        value={newsFormData.content}
        onChange={(e, editor) => {
          const data = editor.getData();
          setNewsFormData({ ...newsFormData, content: data });
        }}
      />
      <button
        className="btn_news_form  btn-primary"
        type="submit"
        onClick={(e) => {
          onSubmit(e);
        }}
      >
        {patch ? "Update News" : "Create News"}
      </button>
    </div>
  );
}

export default NewsForm;
