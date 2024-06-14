import * as Yup from 'yup';


export const getContactFormSchema = () =>
    Yup.object().shape({
        email: Yup.string().required(),
        message: Yup.string().required()
    });