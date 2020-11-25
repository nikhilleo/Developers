import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "./Component/Form";
import MainContainer from "./Component/MainContainer";
import Input from "./Component/Input";
import { useData } from "./DataContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "./Component/PrimaryButton";
import parsePhoneNumberFromString from "libphonenumber-js";
import Header from "./Component/Header";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

function Step2() {
  const history = useHistory();
  const { data, setValues } = useData();
  const { register, watch, errors, handleSubmit } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("/step3");
    setValues(data);
  };

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer>
      <Header />
      <Typography>Enter a valid email</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          ref={register}
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultValues={data.hasPhone}
              inputRef={register}
              defauleChecked={data.hasPhone}
              color="primary"
              name="hasPhone"
            />
          }
          label="Do you have phone"
        />

        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton type="submit"> next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step2;
