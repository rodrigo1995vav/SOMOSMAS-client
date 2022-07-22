import React from 'react'
import { useFormik } from 'formik';


export default function EditOrganization() {
      
    const handleSubmit = (values) => {
        console.log(values);
        // Aqui se envia el formulario 
        // al backend con una accion que se despacharia
        // al reducer para actualizar el state.

    }
    
    
    const formik = useFormik({
    initialValues: {
      name: "",
      logo: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) errors.name = "Ingrese el nombre de su Organización";
      if (!values.logo) errors.logo = "Ingrese su Logo";

      return errors;
    },
    onSubmit:  (values, {resetForm}) =>{ 
        handleSubmit(values)
        resetForm()}
    
  });
 
  return (
    
     <>
     <div className="container-sm text-center"  style={{marginTop: '160px', width: '750px', height: '750'}}>
      
      <h2>Edite el nombre y el logo de su organización:</h2>
      <br/>
      <form  className="input-group-lg mb-3"
      onSubmit={formik.handleSubmit}>
        
        <input
          name="name"
          placeholder="Nombre de su organización"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          key={1}
          className="form-control rounded-pill"
          aria-describedby="inputGroup-sizing-lg"
        />
                
        {formik.errors.name ? (
          <div style={{ color: "red" }}> {formik.errors.name} </div>
        ) : null}
        
        <br />

        
        <input
          name="logo"
          placeholder="logo"
          type="file"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.logo}
          key={2}
          className="form-control rounded-pill"
        />
        
        {formik.errors.logo ? (
          <div style={{ color: "red" }}> {formik.errors.logo} </div>
        ) : null}
        
        <br />
        <div className="d-grid">
        <button className="btn btn-danger rounded-pill btn-lg" type="submit">
        Enviar información
        </button>
        </div>
        </form>
        </div>
    </>
  );
 }