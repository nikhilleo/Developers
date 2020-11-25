import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import FileInput from "./Component/FileInput";
import Form from "./Component/Form";
import Header from "./Component/Header";
import MainContainer from "./Component/MainContainer";
import PrimaryButton from "./Component/PrimaryButton";
import { useData } from "./DataContext";

function Step3() {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });
  const onSubmit = (data) => {
    history.push("/result");
    setValues(data);
  };
  return (
    <MainContainer>
      <Header />
      <Typography>Upload a file</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step3;
