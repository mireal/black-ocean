import { Box, Input, styled } from "@mui/material";
import StyledButton from "../shared/StyledButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

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

export default function ContactForm() {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t("form.validation.name.min"))
      .max(50, t("form.validation.name.max"))
      .matches(/^[a-zA-Z\s]+$/, t("form.validation.name.match"))
      .required(t("form.validation.name.required")),

    phone: Yup.string()
      .matches(
        /\+?(\d{1,2})?[ .-]?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})/,
        t("form.validation.phone.match"),
      )
      .required(t("form.validation.phone.required")),

    email: Yup.string()
      .email(t("form.validation.email.email"))
      .required(t("form.validation.email.required")),

    message: Yup.string()
      .min(10, t("form.validation.message.min"))
      .max(500, t("form.validation.message.max"))
      .required(t("form.validation.message.required")),
  });

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
          placeholder={t("form.placeholder.name")}
        />

        <InputField
          id="email"
          name="email"
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          onChange={formik.handleChange}
          placeholder={t("form.placeholder.email")}
        />

        <InputField
          id="phone"
          name="phone"
          value={formik.values.phone}
          error={formik.touched.phone && !!formik.errors.phone}
          onChange={formik.handleChange}
          placeholder={t("form.placeholder.phone")}
        />

        <InputField
          id="message"
          name="message"
          value={formik.values.message}
          error={formik.touched.message && !!formik.errors.message}
          onChange={formik.handleChange}
          placeholder={t("form.placeholder.message")}
          multiline
          sx={{
            minHeight: "200px",
            display: "flex",
            alignItems: "start",
          }}
        />

        <Box
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "primary.light",
          }}
        >
          {Object.values(formik.errors)[0]}
        </Box>

        <StyledButton fullWidth type="submit" sx={{ mt: "15px" }}>
          {t("form.button")}
        </StyledButton>
      </Box>
    </>
  );
}
