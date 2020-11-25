import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "../Assests/image1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));

function Header() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <img src={headerImage} alt="image" />
    </div>
  );
}

export default Header;
