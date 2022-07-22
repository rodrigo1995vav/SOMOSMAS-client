import { useEffect } from "react";
import { useState } from "react";
import Alert from "../../../services/AlertService";
import { getPublic, deletePrivate } from "../../../services/apiServices";
import NewsForm from "../../newsForm/NewsForm";
import EditAddNewFormModal from "./EditAddNewFormModal";
import RowsNew from "./RowsNew";

function TableNew() {
  const [news, setNews] = useState([]);
  const [showAMForm, setShowAMForm] = useState(false);
  const [newData, setNewData] = useState({})
  console.log(news);
  console.log(newData)
  async function getNews() {
    const { data } = await getPublic("/news");
    setNews(data.entries);
  }

<<<<<<< HEAD
const deleteNews = (id,name) => {
    Alert.confirmRequest({title: `¿Desea eliminar la novedad ${name}?`},
    ()=>deletePrivate(`/news/${id}`),
    ()=>Alert.success({ title:'La novedad ha sido eliminada'}))
}

    useEffect(() => {
        getNews()
    }, [])
    return (
        <div style={{ padding: '3rem' }}>  
            <h1 style={{ textAlign:'center', marginBottom: '7rem', fontSize:'3rem' }}> Novedades </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center h2">Nombre</th>
                        <th scope="col" className="text-center h2">Imagen</th>
                        <th scope="col" className="text-center h2">Fecha</th>
                        <th scope="col" className="text-center h2">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.length > 0 && news.map(
                            ({ name, image, id, createdAt }) => (
                                <RowsNew 
                                    key={id} 
                                    name={name} 
                                    image={image} 
                                    createdAt={createdAt} 
                                    deleteNews = {()=>{deleteNews(id,name)}} 
                                />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
=======
  const deleteNews = (id, name) => {
    Alert.confirmRequest(
      { title: `¿Desea eliminar la novedad ${name}?` },
      () => deletePrivate(`/news/${id}`),
      () => {
        Alert.success({ title: "La novedad ha sido eliminada" });
        setNews(news.filter((entry) => entry.id !== id));
      }
>>>>>>> 32427a837a05b721619f15553774a31f181664f2
    );
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      {showAMForm && <EditAddNewFormModal newData={newData} setShowAMForm={setShowAMForm} />}
      <div className="d-flex gap-5 justify-content-center ">
        <div className="align-self-center">
          <h1 className="p-3 ">ABM de novedades</h1>
        </div>
        <div className="p-3">
          <button
            className="btn btn-primary p-3"
            onClick={() => {setShowAMForm(true); setNewData({})}}
          >
            Agregar novedad
          </button>
        </div>
      </div>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" className="text-center h2">
              Nombre
            </th>
            <th scope="col" className="text-center h2">
              Imagen
            </th>
            <th scope="col" className="text-center h2">
              Fecha
            </th>
            <th scope="col" className="text-center h2">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 &&
            news.map(({ name, image,content,type , id, createdAt }) => (
              <RowsNew 
                key={id}
                id={id}
                name={name}
                image={image}
                createdAt={createdAt}
                content={content}
                type={type}
                deleteNews={() => {
                  deleteNews(id, name);
                  
                }}
                setShowAMForm={setShowAMForm}
                setNewData={setNewData}

              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableNew;
