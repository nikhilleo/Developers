import React from "react";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import RowingIcon from "@material-ui/icons/Rowing";
import PoolIcon from "@material-ui/icons/Pool";
import PetsIcon from "@material-ui/icons/Pets";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import CameraRearIcon from "@material-ui/icons/CameraRear";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import "../style.css";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

function Icons(props) {
  console.log(props);
  var str = props?.name?.replace("_", " ");
  console.log(str);
  const SingleIcon = () => {
    switch (str) {
      case "Trekking": {
        console.log("yes");
        return <DirectionsWalkIcon id="acceptIcon" />;
      }
      case "Off Roading": {
        console.log("yes");
        return <DriveEtaIcon id="acceptIcon" />;
      }
      case "Climbing": {
        console.log("yes");
        return <FilterHdrIcon id="acceptIcon" />;
      }
      case "White Water Rafting": {
        console.log("yes");
        return <RowingIcon id="acceptIcon" />;
      }
      case "Wildlife Watching": {
        console.log("yes");
        return <PetsIcon id="acceptIcon" />;
      }
      case "Pets Allowed": {
        console.log("yes");
        return <PetsIcon id="acceptIcon" />;
      }
      case "Cycling": {
        console.log("yes");
        return <DirectionsBikeIcon id="acceptIcon" />;
      }
      case "Swimming": {
        console.log("yes");
        return <PoolIcon id="acceptIcon" />;
      }
      case "Drinking water": {
        console.log("yes");
        return <LocalDrinkIcon id="acceptIcon" />;
      }
      case "Charging Points": {
        console.log("yes");
        return <BatteryChargingFullIcon id="acceptIcon" />;
      }
      case "Covered Area": {
        console.log("yes");
        return <CameraRearIcon id="acceptIcon" />;
      }
      case "Campfire": {
        console.log("yes");
        return <WhatshotOutlinedIcon id="acceptIcon" />;
      }
      case "Shower": {
        console.log("yes");
        return <BathtubOutlinedIcon id="acceptIcon" />;
      }
      case "Toilet": {
        console.log("yes");
        return <WcOutlinedIcon id="acceptIcon" />;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <>
      <SingleIcon style={{ border: "none" }} />
      {/* <DirectionsBikeIcon />
      <DriveEtaIcon />
      <FilterHdrIcon />
      <RowingIcon />
      <PoolIcon />
      <PetsIcon />
      <DirectionsWalkIcon />
      <LocalDrinkIcon />
      <BatteryChargingFullIcon />
      <CameraRearIcon />
      <WhatshotOutlinedIcon />
      <BathtubOutlinedIcon />
      <WcOutlinedIcon />
      <HouseOutlinedIcon />
      <LocalParkingIcon />
      <AccountBalanceIcon /> */}
    </>
  );
}

export default Icons;
