import { ErrorMessage, useField } from "formik"

/**
 * field contains the formik functions: onChange,
 * onBlur, etc. 
 */

export const CustomTextInput = ({...props}) => {

    const [field ] = useField( props );

    return (
        <div className="textInput-field_324af">
            <input 
              {...field} 
              {...props} 
            />
            
            <ErrorMessage name={ props.name } component="span"/>
        </div>
    )
}