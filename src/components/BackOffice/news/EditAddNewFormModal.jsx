import React from "react";
import NewsForm from "../../newsForm/NewsForm";

const EditAddNewFormModal = ({newData, setShowAMForm, getNews}) => {
  return (
    <div
      class="modal show fade d-block"
      id="exampleModalCenter"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="w-75 modal-dialog-centered mx-auto" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
            </h5>
            <button
              type="button"
              className="btn btn-primary close"
              style={{fontSize:"162.5%"}}
              data-dismiss="modal"
              aria-label="Close"
              onClick={()=>setShowAMForm(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="">
            <NewsForm patch={newData} setShowAMForm={setShowAMForm} getNews={getNews}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddNewFormModal;
