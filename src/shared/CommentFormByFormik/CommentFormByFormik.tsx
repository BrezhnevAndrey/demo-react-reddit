import React from "react";
import styles from "./commentformbyformik.less";
import { ErrorMessage, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { TRootState } from "../../store/reducer";
import * as Yup from "yup";
import { InputText } from "./InputText";

export function CommentFormByFormik() {
  const value = useSelector<TRootState, string>((state) => state.commentText);

  return (
    <Formik
      initialValues={{ comment: value }}
      validationSchema={Yup.object({
        comment: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <InputText class={styles.input} name="comment" as="textarea" />
        <ErrorMessage name="comment" />

        <button
          className={styles.button}
          type="submit"
          aria-label="Комментировать"
        >
          Комментировать
        </button>
      </Form>
    </Formik>
  );
}
