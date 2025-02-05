import { Box, Input, styled } from "@mui/material"
import StyledButton from "../shared/StyledButton"
import { Form, useFormik } from 'formik';
import * as Yup from 'yup';

const InputField = styled(Input)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid`,
    borderColor: theme.palette.divider,
    borderRadius: '0',
    color: 'white',
    padding: '18px 15px',
    width: '100%',

    fontSize: '16px',
    fontWeight: 'bold',

    '&:hover, & fieldset': {
        borderColor: theme.palette.primary.main
    }
}))

// interface IFormInput {
//     name: string
//     phone: string
//     email: string
//     message: string
// }

const initialValues = {
    name: '',
    phone: '',
    email: '',
    message: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

export default function ContactForm() {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <Box>
            <Form onSubmit={formik.handleSubmit}>
                <InputField id='name' name="name" placeholder="NAME" />
                <InputField id='email' name='email' placeholder="EMAIL" />
                <InputField id='phone' name='phone' placeholder="PHONE NUMBER" />
                <InputField id='message' name='message' placeholder="MESSAGE" multiline
                    sx={{
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'start'
                    }} />

                <StyledButton type='submit' sx={{ mt: '15px' }}> SUBMIT </StyledButton>

            </Form>



        </Box>
    )
}
