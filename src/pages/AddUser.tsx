import { Formik, Form, Field } from 'formik';
import validationSchema from '../ValidationSchema/ValidationSchema';
import { Button, Container, TextField, Typography } from '@mui/material';
import { userCreate } from '../server/FetchData';

// Formik doğrulama şeması


const AddUser = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                User elave et
            </Typography>
            <Formik
                initialValues={{ name: '', email: '', phone: '', website: '', address: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    try {
                        await userCreate(values);
                        resetForm();
                    } catch (error) {
                        console.error('error user', error);
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Field
                            name="name"
                            as={TextField}
                            variant="outlined"
                            label="User"
                            fullWidth
                            margin="normal"
                            error={touched.name && !!errors.name}
                            helperText={touched.name && errors.name}
                        />
                        <Field
                            name="email"
                            as={TextField}
                            variant="outlined"
                            label="E-mail adresi"
                            fullWidth
                            margin="normal"
                            error={touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                        />
                        <Field
                            name="phone"
                            as={TextField}
                            variant="outlined"
                            label="Telefon Nomresi"
                            fullWidth
                            margin="normal"
                            error={touched.phone && !!errors.phone}
                            helperText={touched.phone && errors.phone}
                        />
                        <Field
                            name="address"
                            as={TextField}
                            variant="outlined"
                            label="Adress"
                            fullWidth
                            margin="normal"

                        />
                        <Field
                            name="website"
                            as={TextField}
                            variant="outlined"
                            label="website"
                            fullWidth
                            margin="normal"

                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isSubmitting}
                        >
                            Elave et
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default AddUser;
