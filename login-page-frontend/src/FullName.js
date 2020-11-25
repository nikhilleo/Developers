import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "./Component/Form";
import MainContainer from "./Component/MainContainer";
import Input from "./Component/Input";
import PrimaryButton from "./Component/PrimaryButton";
import { Typography } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "./DataContext";
import Header from "./Component/Header";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^([^0-9]*)$/, "first name should not contain numbers")
    .required("First name is required"),
  lastname: yup
    .string()
    .matches(/^([^0-9]*)$/, "last name should not contain numbers")
    .required("last name is required"),
});

function FullName() {
  const { setValues, data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstname: data.firstname, lastname: data.lastname },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/Email");
    setValues(data);
  };
  return (
    <MainContainer>
      <Header />
      <Typography component="h2" variant="h5">
        Enter Your Full Name
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="firstname"
          type="text"
          label="first name"
          error={!!errors.firstname}
          helperText={errors?.firstname?.message}
        />
        <Input
          ref={register}
          name="lastname"
          type="text"
          label="last name"
          error={!!errors.lastname}
          helperText={errors?.lastname?.message}
        />
        <PrimaryButton type="submit">next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default FullName;
