import { useFormikContext, Field } from "formik";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../store/reducer";
import styles from "./inputtext.less";

interface IInputInterface {
  name: string;
  as?: string;
  class?: string;
}
export function InputText(props: IInputInterface) {
  const context = useFormikContext();
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    context.setValues({ comment: event.target.value });
    dispatch(updateComment(event.target.value));
  }
  return (
    <Field
      onChange={handleChange}
      className={props.class}
      name="comment"
      as="textarea"
    />
  );
}
