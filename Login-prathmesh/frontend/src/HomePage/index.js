import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import backImg1 from "../Assets/40041066-travel-landmark.jpg";
import { Link, useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import actions from "../Redux/Action";
import Footer from "../Admin/Footer/Footer";
import Navbar from "./Navbar";
import "./style.css";
import axios from "../axios";

const { setCampAmenities, setSpecific } = actions;

function Index(props) {
  const history = useHistory();
  var [campDetails, setCampDetails] = useState([]);
  useEffect(() => {
    axios
      .get("/admin/get_pending_camps")
      .then((res) => {
        setCampDetails(res.data);
      })
      .catch((err) => {
        {
          console.log(err);
          console.log(err);
        }
      });
  }, []);

  const handleClick = async (campName) => {
    console.log(campName);
    let camp_name = campName;
    let token = localStorage.getItem("auth-token");

    axios
      .get("/get_a_camp", {
        method: "GET",
        headers: {
          Authorization: token,
          camp_name: campName,
        },
      })
      .then((res) => {
        console.log(res);
        props.setSpecific(res.data);
        history.push("/specificCamp");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  console.log(campDetails);
  return (
    <div className="main">
    <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
  </ol>
 
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
          alt="First slide"/>
        <div class="mask rgba-black-light"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Light mask</h3>
        <p>First text</p>
      </div>
    </div>
    <div class="carousel-item">
 
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
          alt="Second slide"/>
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Strong mask</h3>
        <p>Secondary text</p>
      </div>
    </div>
    <div class="carousel-item">
      
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
          alt="Third slide"/>
        <div class="mask rgba-black-slight"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Slight mask</h3>
        <p>Third text</p>
      </div>
    </div>
  </div>
</div>
  
  



<div class="container-fluid mt-5" >
	<div class="row">
		<div class="col-sm-12">
			<div id="inam" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						 <div class="container">
						 	<div class="row">
						 		<div class="col-sm-12 col-lg-4">
						 			<div class="card">
						 				<img src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top"/>
						 				<div class="card-body">
						 					<h4 class="card-title">“Life is better by the camp fire”</h4>
						 					<p class="card-text">Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle.</p>
						 					<button type="button" class="btn btn-warning">Read More</button>
						 					
						 				</div>
						 				
						 			</div>
						 			
						 		</div>
						 		<div class="col-sm-12 col-lg-4">
						 			<div class="card" >
						 				<img src="https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top"/>
						 				<div class="card-body">
						 					<h4 class="card-title">“Life is better by the camp fire”</h4>
						 					<p class="card-text">Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle.</p>
						 					<button type="button" class="btn btn-warning">Read More</button>
						 					
						 				</div>
						 				
						 			</div>
						 			
						 		</div>
						 		<div class="col-sm-12 col-lg-4">
						 			<div class="card" >
						 				<img src="https://images.unsplash.com/photo-1511993807578-701168605ad3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top"/>
						 				<div class="card-body">
						 					<h4 class="card-title">“Life is better by the camp fire”</h4>
						 					<p class="card-text">Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle.</p>
						 					<button type="button" class="btn btn-warning">Read More</button>
						 					
						 				</div>
						 				
						 			</div>
						 			
						 		</div>
						 		
						 	</div>
						 	
						 </div>

						
					</div>
					<div class="carousel-item">
						 <div class="container">
						 	<div class="row">
						 		<div class="col-sm-12 col-lg-4">
						 			<div class="card ">
						 				<img src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top"/>
						 				<div class="card-body">
						 					<h4 class="card-title">“Life is better by the camp fire”</h4>
						 					<p class="card-text">Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle.</p>
						 					<button type="button" class="btn btn-warning">Read More</button>
						 					
						 				</div>
						 				
						 			</div>
						 			
						 		</div>
						 		<div class="col-sm-12 col-lg-4">
						 			<div class="card" >
						 				<img src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top"/>
						 				<div class="card-body">
						 					<h4 class="card-title">“Life is better by the camp fire”</h4>
						 					<p class="card-text">Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle.</p>
						 					<button type="button" class="btn btn-warning">Read More</button>
						 					
						 				</div>
						 				
						 			</div>
						 			
						 		</div>
						 		<div class="col-sm-12 col-lg-4 ">
						 			<div class="card ">
						 				<img src="https://images.unsplash.com/photo-1525811902-f2342640856e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top"/>
						 				<div class="card-body">
						 					<h4 class="card-title">“Life is better by the camp fire”</h4>
						 					<p class="card-text">Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle.</p>
						 					<button type="button" class="btn btn-warning">Read More</button>
						 					
						 				</div>
						 				
						 			</div>
						 			
						 		</div>
						 		
						 	</div>
						 	
						 </div>

						
					</div>
					
				</div>
				<a href="#inam" class="carousel-control-prev "  data-slide="prev">
					<span class="carousel-control-prev-icon mr-5"></span>
				</a>
				<a href="#inam" class="carousel-control-next" data-slide="next">
					<span class="carousel-control-next-icon ml-5 "></span>
				</a>
				
			</div>
			
		</div>
		
	</div>
	
    </div>
   <div className="mt-5">
    <footer>
        <Footer />
      </footer>
   </div>
      </div>
    

  );
}

function mapStateToProps(state) {
  return {
    campAmenities: state.campAmenities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampAmenities: (data) => {
      dispatch(setCampAmenities(data));
    },
    setSpecific: (data) => {
      dispatch(setSpecific(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

