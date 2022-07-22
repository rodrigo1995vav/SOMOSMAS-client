import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import "./newsForm.css";
import {
  getPrivate,
  getPublic,
  postPrivate,
  putPrivate,
} from "../../services/apiServices";
import Alert from "../../services/AlertService";
import axios from "axios";

function NewsForm({ patch ,setShowAMForm}) {
  console.log(patch);
  let id = patch.id;
  console.log(id);
  const [newsFormData, setNewsFormData] = useState({});
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  console.log(newsFormData.name);
  const updateField = (e) => {
    setNewsFormData({ ...newsFormData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (patch) {
      axios
        .get(`/news/${id}`)
        .then((res) => {
          setNewsFormData(res.data.payload);
          console.log(newsFormData);
        })
        .catch((err) =>
          Alert.error({ title: "Error ", message: `${err.message}` })
        );
    }
  }, []);
  console.log(newsFormData);

  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", newsFormData.name)
    formData.append("content", newsFormData.content)
    formData.append("type",newsFormData.type)
    if (patch) {
      axios.put(`/news/${id}`, formData)
        .then((res) =>
          Alert.success({
            title: "Se modificó la novedad:",
            message: `${newsFormData.name}`,
          })
        )
        .catch((err) =>
          Alert.error({ title: "No se ha podido modificar la novedad..." })
        );
    } else {
      postPrivate(`/news`, newsFormData)
        .then((res) =>
          Alert.success({
            title: `Se ha creado la novedad: `,
            message: `${newsFormData.name}`,
          })
        )
        .catch((err) =>
          Alert.error({
            title: "No se pudo crear la novedad: ",
            message: `${err.message}`,
          })
        );
    }
    setShowAMForm(false)
  };

  return (
    <div className="newsForm">
      <h1>{patch.id ? "Update News" : "Create News"}</h1>
      <div className="inputs">
        <div className="newsTitle newsInput">
          <label>Title</label>
          <input
            type="text"
            className="titleInput"
            value={newsFormData.name}
            name="name"
            onChange={(e) => updateField(e)}
          />
        </div>
        <div className="newsImage newsInput">
          <label>Image</label>
          <input type="file" name="image" onChange={(e) => saveFile(e)} />
        </div>
        <div className="newsCategory newsInput">
          <label>Category</label>
          <input
            type="text"
            className="categoryInput"
            value={newsFormData.type}
            name="category"
            onChange={(e) => updateField(e)}
          />
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
