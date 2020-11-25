import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function PrimaryButton({ children, ...props }) {
  const style = useStyles();
  console.log(children);
  console.log(props);
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={style.root}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
