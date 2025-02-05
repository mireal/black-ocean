import { Box, Input, styled } from "@mui/material";
import StyledButton from "../shared/StyledButton";
import { useFormik } from "formik";
import * as Yup from "yup";

const InputField = styled(Input)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid`,
  borderColor: theme.palette.divider,
  borderRadius: "0",
  color: "white",
  padding: "18px 15px",
  width: "100%",

  fontSize: "16px",
  fontWeight: "600",

  "&:hover, & fieldset": {
    borderColor: theme.palette.primary.main,
  },
}));

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Invalid name").required("Name is required"),
  phone: Yup.string()
    .min(8, "Invalid phone number")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});

export default function ContactForm() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log({ values, actions });
      // alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });
  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        display="flex"
        flexDirection="column"
        gap="15px"
      >
        <InputField
          id="name"
          name="name"
          value={formik.values.name}
          error={formik.touched.name && !!formik.errors.name}
          onChange={formik.handleChange}
          placeholder="NAME"
        />

        <InputField
          id="email"
          name="email"
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          onChange={formik.handleChange}
          placeholder="EMAIL"
        />

        <InputField
          id="phone"
          name="phone"
          value={formik.values.phone}
          error={formik.touched.phone && !!formik.errors.phone}
          onChange={formik.handleChange}
          placeholder="PHONE NUMBER"
        />

        <InputField
          id="message"
          name="message"
          value={formik.values.message}
          error={formik.touched.message && !!formik.errors.message}
          onChange={formik.handleChange}
          placeholder="MESSAGE"
          multiline
          sx={{
            minHeight: "200px",
            display: "flex",
            alignItems: "start",
          }}
        />

        <StyledButton fullWidth type="submit" sx={{ mt: "15px" }}>
          SUBMIT
        </StyledButton>
      </Box>
    </>
  );
}
