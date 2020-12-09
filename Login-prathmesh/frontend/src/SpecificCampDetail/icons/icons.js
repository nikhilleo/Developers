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

function Icons(props) {
  console.log(props);
  const SingleIcon = () => {
    switch (props.name) {
      case "Trekking": {
        console.log("yes");
        return <DirectionsWalkIcon />;
      }
      case "Off Roading": {
        console.log("yes");
        return <DriveEtaIcon />;
      }
      case "Climbing": {
        console.log("yes");
        return <FilterHdrIcon />;
      }
      case "White Water Rafting": {
        console.log("yes");
        return <RowingIcon />;
      }
      case "Wildlife Watching": {
        console.log("yes");
        return <PetsIcon />;
      }
      case "Pets Allowed": {
        console.log("yes");
        return <PetsIcon />;
      }
      case "Cycling": {
        console.log("yes");
        return <DirectionsBikeIcon />;
      }
      case "Swimming": {
        console.log("yes");
        return <PoolIcon />;
      }
      case "Drinking Water": {
        console.log("yes");
        return <LocalDrinkIcon />;
      }
      case "Charging Points": {
        console.log("yes");
        return <BatteryChargingFullIcon />;
      }
      case "Covered Area": {
        console.log("yes");
        return <CameraRearIcon />;
      }
      case "Campfire": {
        console.log("yes");
        return <WhatshotOutlinedIcon />;
      }
      case "Shower": {
        console.log("yes");
        return <BathtubOutlinedIcon />;
      }
      case "Toilet": {
        console.log("yes");
        return <WcOutlinedIcon />;
      }
      case "Tree House": {
        console.log("yes");
        return <HouseOutlinedIcon />;
      }
      case "Tent": {
        console.log("yes");
        return <AccountBalanceIcon />;
      }
      case "Park N Camp": {
        console.log("yes");
        return <LocalParkingIcon />;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <>
      <SingleIcon />
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
