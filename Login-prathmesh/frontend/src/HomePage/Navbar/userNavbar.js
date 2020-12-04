import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

import "./style.css";
import { connect } from "react-redux";
import actions from "../../Redux/Action";
import axios from "../../axios";

const { clearUser, clearOwner, clearAdmin } = actions;

function Index(props) {
  var [client, setClient] = useState();
  useEffect(() => {
    console.log(props);

    var checkLoggedIn = async () => {
      if (props.admin.user) {
        setClient(() => ({ type: "admin", user: props.admin.user }));
      } else if (props.user.user) {
        setClient(() => ({ type: "user", user: props.user.user }));
      } else if (props.owner.user) {
        setClient(() => ({ type: "owner", user: props.owner.user }));
      }
    };
    checkLoggedIn();
    console.log(client);
  }, []);

  const history = useHistory();

  const logout = async () => {
    await props.clearAdmin();
    await props.clearOwner();
    localStorage.setItem("auth-token", "");
    await props.clearUser();
    await setClient(undefined);
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Lamp-A-Camp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/CampUserForm1">Home</Link>

          <Nav.Link href="#link">Link</Nav.Link>

          <h5 id="wname">Welcome {client?.user?.firstname}</h5>

          <Button id="logout" onClick={logout}>
            LogOut
          </Button>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
    owner: state.owner,
    admin: state.admin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearAdmin: (data) => {
      dispatch(clearAdmin(data));
    },
    clearOwner: (data) => {
      dispatch(clearOwner(data));
    },
    clearUser: (data) => {
      dispatch(clearUser(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
