import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

const CropRecomendation = () => {
  const [state,changeState] = useState();
  const [soiltype,changeSoilType] = useState();
  const [irrigation,changeIrrigation] = useState();
  const [area,changeArea] = useState();
  const [temp,changeTemp] = useState();
  const [method,changeMethod] = useState();
  const [PH,changePH] = useState();
  const [budget,changeBudget] = useState();
  const [currentcrop,changeCurrentCrop] = useState();
  const [preference,changePreference] = useState();











  return (
    <div className="container">
      <Nav></Nav>
      <form className="crop-recomendation-form login-form mt-3">
        <h2 className="text-center">Crop Recommendation</h2>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
            <label for="state">State </label>
        <select id="state" name="state" className="form-select" value={state}
          onChange={(e) => {
            changeState(e.target.value);
          }}>
          <option value="select">Select</option>
          <option value="AndhraPradesh">AndhraPradesh</option>
          <option value="Arunachal Pradesh"> Arunachal Pradesh</option>
          <option value="Assam"> Assam</option>
          <option value="audi"> Chhattisgarh</option>
          <option value="audi"> Goa</option>
          <option value="audi"> Gujarat</option>
          <option value="audi">Haryana</option>
          <option value="audi"> Himachal Pradesh</option>
        </select>
       
            </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="soiltype">Soil type </label>
        <select id="soiltype" name="soiltype" className="form-select" value={soiltype}
          onChange={(e) => {
            changeSoilType(e.target.value);
          }}>
          <option value="select">Select</option>
          <option value="clay">clay</option>
          <option value="foam"> foam</option>
          <option value="sandy"> sandy</option>
        </select>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="irrigation">Source of irrigation </label>
        <select id="irrigation" name="irrigation" className="form-select" value={irrigation}
          onChange={(e) => {
            changeIrrigation(e.target.value);
          }}>
          <option value="select">Select</option>
          <option value="well">well</option>
          <option value="river">river</option>
          <option value="rainfed">rainfed</option>
        </select>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="area">Area in acres </label>
        <input type="number" className="form-control"  name="area" value={area}  onChange={(e) => {
            changeArea(e.target.value);
          }}></input>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="temperature">Average Temperature in degrees</label>
        <input type="number" className="form-control"  name="temp" value={temp} onChange={(e) => {
            changeTemp(e.target.value);
          }}></input>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="currentcrop">current crop</label>
        <input type="text" className="form-control" name="currentcrop"  value={currentcrop} onChange={(e) => {
            changeCurrentCrop(e.target.value);
          }}></input>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="preference">your preference</label>
        <input type="text" className="form-control" name="preference" value={preference} onChange={(e) => {
            changePreference(e.target.value);
          }}></input>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="method">Farming Method</label>
        <select id="method" name="method" className="form-select" value={method} onChange={(e) => {
            changeMethod(e.target.value);
          }}>
          <option value="select">Select</option>
          <option value="Organic">Organic Farming</option>
          <option value="river">Conventional Farming</option>
        </select>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="PH">Soil PH</label>
        <input type="number" className="form-control"  name="PH" value={PH} onChange={(e) => {
            changePH(e.target.value);
          }}></input>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
        <label for="budget">Budget</label>
        <input type="number" className="form-control" name="budget"  value={budget} onChange={(e) => {
            changeBudget(e.target.value);
          }}></input>
        </div>
        
        </div>
        <button className="btn crop-btn">Get Crop</button>
      </form>
    </div>
  );
};

export default CropRecomendation;
