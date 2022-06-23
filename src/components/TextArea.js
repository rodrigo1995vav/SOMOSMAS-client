import { ErrorMessage, useField } from "formik"

/**
 * field contains the formik functions: onChange,
 * onBlur, etc. 
 */

export const CustomTextArea = ({...props}) => {

    const [field ] = useField( props );

    return (
        <div className="textArea-field_324af">
            <textarea
              {...field} 
              {...props} 
            />
            
            <ErrorMessage name={ props.name } component="span"/>
        </div>
    )
}