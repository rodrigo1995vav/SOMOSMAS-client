import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import TableCategories from "../../../components/BackOffice/categories/TableCategories";
import { Loader } from "../../../components/Loader";
import Paginator from "../../../components/Paginator";
import { getAllCategories } from "../../../store/slices/categories/getAllCategories";

export default function CategoriesList() {
  const { categories, loading, error } = useSelector(
    (state) => state.allCategories
  );
  const dispatch = useDispatch();
  const query = useParams();
  const page = query.page || 1;

  useEffect(() => {
    dispatch(getAllCategories(page));
  }, [page]);

  if (loading) {
    console.log(loading);
    return <Loader />;
  }

  if (error.errorState) {
    return <h1>Upss hubo un error!!</h1>;
    //hay que hacer errores lindos , tambien tengo el error en el objeto por si las dudas , me parecio correcto no mostrarlo
  }

  return (
    <div>
      {categories ? (
        <>
          <TableCategories dataCategories={categories.categories} />
          <div className="my-5">
            <Paginator
              currentPage={page}
              pageCount={categories.total_pages}
              justify={"center"}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
