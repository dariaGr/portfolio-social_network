import s from './FormsControls.module.css';
import { Field } from 'redux-form';

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div>
                {children}
            </div>
            <span>
                {hasError && error}
            </span>
        </div>
    );
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;

    return (
      <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    );
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;

    return (
      <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    );
};

export const createField = (placeholder, name, validators, component, type, text='') => (
    <>
        <Field validate={validators} component={component} name={name} type={type} placeholder={placeholder} />{text}
    </>
);
