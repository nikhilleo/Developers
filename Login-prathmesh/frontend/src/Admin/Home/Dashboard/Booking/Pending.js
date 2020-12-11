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
  var [pendingCampData, setPendingCampData] = useState();
  useEffect(() => {
    axios
      .get("/admin/get_pending_camps")
      .then((res) => {
        console.log(res);
        setCampDetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  console.log(pendingCampData);

  const handleAcceptCamp = (camp_name) => {
    console.log(camp_name);
    axios
      .post("/admin/accept_camp", { camp_name: camp_name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleRejectCamp = (camp_name) => {
    axios
      .post("/admin/reject_camp", { camp_name: camp_name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  console.log(campDetails);
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
                  fontWeight: "bolder",
                }}
              >
                Camps
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
          {campDetails?.[0] == undefined || campDetails == [] ? (
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
                <h1>No booking yet, stay tuned!</h1>
              </Grid>
            </Grid>
          ) : (
            campDetails?.map?.((item, index) => {
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
                      onClick={() => {
                        handleAcceptCamp(item.camp_name);
                      }}
                    />
                    <Grid item xs={1}></Grid>
                    <ClearIcon
                      style={{
                        cursor: "pointer",
                        color: "red",
                        border: "none !important",
                      }}
                      onClick={() => handleRejectCamp(item.camp_name)}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      className="Owner__Dashboard__photos"
                      src={item?.camp_images?.[0]}
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
                          {item?.camp_name}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12} style={{ color: "White" }}>
                        <span>
                          {item?.camp_location} ({item?.camp_state})
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
                          {`${item?.manager_name}`}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ color: "white" }}>{item?.address}</span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ color: "white" }}>
                          {item?.manager_contact}
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
                          {item?.check_in}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Check Out Date: &ensp;
                        </span>
                        <span style={{ color: "white" }}>
                          {" "}
                          {item?.check_out}{" "}
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
// import AdminNavbar from "../../../Navbar/Navbar";
// import DoneIcon from "@material-ui/icons/Done";
// import ClearIcon from "@material-ui/icons/Clear";
// import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import axios from "../../../../axios";

// function Home() {
//   var [pendingCampData, setPendingCampData] = useState();
//   useEffect(() => {
//     axios
//       .get("/admin/get_pending_camps")
//       .then((res) => {
//         console.log(res);
//         setPendingCampData(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   }, []);
//   console.log(pendingCampData);

//   const handleAcceptCamp = (camp_name) => {
//     console.log(camp_name);
//     axios
//       .post("/admin/accept_camp", { camp_name: camp_name })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };

//   const handleRejectCamp = (camp_name) => {
//     axios
//       .post("/admin/reject_camp", { camp_name: camp_name })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };

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
//                 fontWeight: "bolder",
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
//               style={{ cursor: "pointer", color: "black", fontSize: "18px" }}
//             >
//               Rejected
//             </span>
//           </Link>
//         </Grid>
//         <Grid container style={{ visibility: "hidden" }}>
//           .
//         </Grid>{" "}
//       </Grid>
//       <Divider style={{ color: "black" }} />
//       <Grid container xs={12} style={{ visibility: "hidden" }}>
//         .
//       </Grid>

//       <Grid container>
//         <Grid item xs={2}></Grid>
//         {pendingCampData?.map((item, index) => (
//           <>
//             <Grid container xs={1}>
//               <img src={item?.camp_images[0]} className="photos" />{" "}
//               <Grid item xs={1} style={{ position: "absolute" }}>
//                 <HelpOutlineIcon style={{ cursor: "pointer" }} />
//               </Grid>
//               <Grid container xs={12} style={{ visibility: "hidden" }}>
//                 .
//               </Grid>
//               <Grid item sm={11} xs={10}>
//                 <p
//                   style={{
//                     overflow: "hidden",
//                     whiteSpace: "no-wrap",
//                     textOverflow: "ellipsis",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   {item?.camp_name}
//                 </p>
//               </Grid>
//               <Grid item sm={1} xs={10}>
//                 <DoneIcon
//                   style={{ cursor: "pointer", color: "green" }}
//                   onClick={() => {
//                     handleAcceptCamp(item.camp_name);
//                   }}
//                 />
//               </Grid>
//               <Grid item sm={11} xs={10}>
//                 <p
//                   style={{
//                     overflow: "hidden",
//                     whiteSpace: "no-wrap",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {item?.camp_location}
//                 </p>
//               </Grid>{" "}
//               <Grid item sm={1} xs={10}>
//                 <ClearIcon
//                   color="error"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => {
//                     handleRejectCamp(item.camp_name);
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <Grid item xs={1}></Grid>
//           </>
//         ))}
//       </Grid>
//       <Grid item xs={1}></Grid>
//     </div>
//   );
// }

// export default Home;
