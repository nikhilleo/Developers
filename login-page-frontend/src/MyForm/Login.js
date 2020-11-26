import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import image from "../Assests/image1.jpg";

function Main() {
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }} spacing={10}>
        <Grid item xs={12} sm={6}>
          <img
            src={image}
            style={{ width: "100%", height: "80%", objectFit: "cover" }}
            alt={"image"}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <TextField
              id="outlined-helperText"
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              id="outlined-helperText"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            {/* <TextField label="Username" margin="normal" />
            <TextField label="Password" type="password" margin="normal" /> */}

            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained">
              LOG IN
            </Button>
            <div style={{ height: 20 }} />
            <Button>Create new account?</Button>
          </div>
          <div />
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
