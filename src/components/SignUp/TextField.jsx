import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ placeholder, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="sign-up p-2 mx-auto">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
        placeholder={placeholder}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
