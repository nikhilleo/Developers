import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../Header/admin";
import OwnerNavbar from "../../../Navbar/Navbar";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../../../axios";

function Home() {
  var [campDetails, setCampDetails] = useState();
  useEffect(() => {
    axios
      .get("/admin/get_rejected_camps")
      .then((res) => {
        console.log(res);
        setCampDetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <Navbar />

      <div
        style={{
          background:
            "url(https://images7.alphacoders.com/101/thumb-1920-1011523.jpg)",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <div className="ownerMAinBody">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="navbar__container__home">
              <div className="navbar__menu__home">
                <li className="navbar__li">
                  <Link
                    to="/Admin__Booking/Pending"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="mainHeader">BOOKING</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/Delete__Admin__camp/Active__Camps"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">Delete Camps</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/Admin__Account__settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">ACCOUNT</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} align="center">
          <Grid item xs={12}>
            <p
              style={{
                fontSize: "27px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Camps Pending
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} className="ownerDashboardBodys" spacing={10}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Link
              to="/Admin__Booking/Pending"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                }}
              >
                Pending Camps
              </span>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="/Admin__Booking/Accepted"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                }}
              >
                Accepted
              </span>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="/Admin__Booking/Rejected"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Rejected
              </span>
            </Link>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid
          style={{
            background: "linear-gradient(45deg, black, transparent)",
            width: "80%",
            display: "flex",
            backgroundSize: "cover",
            flexDirection: "column",
            margin: "auto",
            align: "center",
          }}
        >
          {campDetails?.camp_booking?.[0] == undefined || campDetails == [] ? (
            <Grid container xs={12} justify="center" alignItems="center">
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid item xs={12} align="center">
                <h1>No Camps Rejected Yet!</h1>
              </Grid>
            </Grid>
          ) : (
            campDetails?.camp_booking?.map?.((item, index) => {
              console.log(item);
              return (
                <Grid container xs={12}>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Grid item xs={2}>
                    <DoneIcon
                      style={{
                        cursor: "pointer",
                        color: "green",
                      }}
                    />
                    <Grid item xs={1}></Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      className="Owner__Dashboard__photos"
                      src={item?.camp?.camp_images?.[0]}
                      style={{ marginLeft: "-6vw" }}
                    ></img>
                    <Grid container xs={12} style={{ visibility: "hidden" }}>
                      .
                    </Grid>{" "}
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid container xs={2}>
                    <Grid item xs={12}>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontSize: "2rem",
                            color: "white",
                            textOverflow: "ellipsis",
                            overflowWrap: "anywhere",
                          }}
                        >
                          {item?.camp?.camp_name}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12} style={{ color: "White" }}>
                        <span>
                          {item?.camp?.camp_location} ({item?.camp?.camp_state})
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontSize: "2rem",
                            color: "white",
                          }}
                        >
                          {`${item?.camper_details?.firstname} ${item?.camper_details?.lastname}`}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ color: "white" }}>
                          {item?.camper_details?.address}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ color: "white" }}>
                          {item?.camper_details?.mobile}
                        </span>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid container xs={2}>
                    <Grid item xs={12}>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontSize: "2rem",
                            color: "white",
                          }}
                        >
                          Camping Dates
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Check In Date: &emsp;&ensp;
                        </span>
                        <span style={{ color: "white" }}>
                          {" "}
                          {item?.camp?.check_in}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Check Out Date: &ensp;
                        </span>
                        <span style={{ color: "white" }}>
                          {" "}
                          {item?.camp?.check_out}{" "}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>

                      <Grid item xs={12}>
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontSize: "2rem",
                            color: "white",
                          }}
                        >
                          Selected Types
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "10rem",
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        <span className="div">
                          {item?.a_details?.map((item, index) => (
                            <>
                              <Grid item xs={12}>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    color: "white",
                                  }}
                                >
                                  Type: &emsp; &emsp; &emsp; &emsp; &emsp;
                                </span>
                                <span style={{ color: "white" }}>
                                  {item?.name}{" "}
                                </span>
                              </Grid>
                              <Grid item xs={12}>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    color: "white",
                                  }}
                                >
                                  No. Of People: &emsp; &ensp;
                                </span>
                                <span style={{ color: "white" }}>
                                  {item?.noOfPeople}{" "}
                                </span>
                              </Grid>
                              <Grid item xs={12}>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    color: "white",
                                  }}
                                >
                                  Total Price:&emsp; &ensp; &ensp;&ensp;&ensp;
                                </span>
                                <span style={{ color: "white" }}>
                                  {item?.totalPrice}
                                </span>
                              </Grid>
                              <Grid
                                container
                                xs={12}
                                style={{ visibility: "hidden" }}
                              >
                                .
                              </Grid>{" "}
                            </>
                          ))}
                        </span>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Divider style={{ color: "black" }} />
                </Grid>
              );
            })
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Home;

// import { Button, Divider, Grid } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../../../HomePage/Navbar/index";
// import ClearIcon from "@material-ui/icons/Clear";
// import axios from "../../../../axios";
// import AdminNavbar from "../../../Navbar/Navbar";

// function Home() {
//   var [rejectedCamps, setRejectedCamps] = useState();
//   useEffect(() => {
//     axios
//       .get("/admin/get_rejected_camps")
//       .then((res) => {
//         console.log(res);
//         setRejectedCamps(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <AdminNavbar />
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container xs={12} align="center">
//         <Grid item xs={12}>
//           <p
//             style={{ fontSize: "23px", color: "#5e5e80", fontWeight: "bolder" }}
//           >
//             Booking
//           </p>
//         </Grid>
//       </Grid>
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container xs={12} align="center">
//         <Grid item xs={3}></Grid>
//         <Grid item xs={2}>
//           <Link to="/Admin__Booking/Pending" style={{ textDecoration: "none" }}>
//             <span
//               style={{
//                 cursor: "pointer",
//                 color: "black",
//                 fontSize: "18px",
//               }}
//             >
//               Pending For Approval
//             </span>
//           </Link>
//         </Grid>
//         <Grid item xs={2}>
//           <Link
//             to="/Admin__Booking/Accepted"
//             style={{ textDecoration: "none" }}
//           >
//             <span
//               style={{
//                 cursor: "pointer",
//                 color: "black",
//                 fontSize: "18px",
//               }}
//             >
//               Accepted
//             </span>
//           </Link>
//         </Grid>
//         <Grid item xs={2}>
//           <Link
//             to="/Admin__Booking/Rejected"
//             style={{ textDecoration: "none" }}
//           >
//             <span
//               style={{
//                 cursor: "pointer",
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bolder",
//               }}
//             >
//               Rejected
//             </span>
//           </Link>
//         </Grid>
//         <Grid container style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//       </Grid>
//       <Divider style={{ color: "black" }} />
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>

//       <Grid container>
//         <Grid item xs={2}></Grid>
//         <Grid container xs={1}>
//           <img
//             src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             className="photos"
//           />{" "}
//           <Grid item xs={1} style={{ position: "absolute" }}>
//             <ClearIcon style={{ cursor: "pointer" }} color="error" />
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid item sm={11} xs={10}>
//             <p
//               style={{
//                 overflow: "hidden",
//                 whiteSpace: "no-wrap",
//                 textOverflow: "ellipsis",
//                 fontWeight: "bolder",
//               }}
//             >
//               item.camp_name
//             </p>
//           </Grid>
//           <Grid item xs={1}>
//             <Button variant="contained" style={{ background: "#d68080" }}>
//               Details
//             </Button>
//           </Grid>
//           <Grid item sm={11} xs={10}>
//             <p
//               style={{
//                 overflow: "hidden",
//                 whiteSpace: "no-wrap",
//                 textOverflow: "ellipsis",
//               }}
//             >
//               location
//             </p>
//           </Grid>{" "}
//         </Grid>
//         <Grid item xs={1}></Grid>
//       </Grid>
//       <Grid item xs={1}></Grid>
//     </div>
//   );
// }

// export default Home;
