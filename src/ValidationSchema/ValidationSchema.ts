import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name write please me'),
    email: Yup.string()
        .email('Email write plese me')
        .required('Email write plese me'),
    phone: Yup.string()
        .required('Phone Number write plese me'),

});

export default validationSchema;
