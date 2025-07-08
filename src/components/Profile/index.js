import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import Header from "../Header";
import ProfileCard from "../ProfileCard";
import "./index.css";

const Profile = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    setUserId(jsonData[1].id);
    setName(jsonData[1].name);
    setEmailId(jsonData[1].email);
    setAddress(jsonData[1].address.city);
    setPhone(jsonData[1].phone);
  };

  return (
    <>
      <Header profilePic="EH" profileName={name} />

      <div className="profile-bg">

        <div className="profile-breadcrumb">
          <Link to="/"><IoIosArrowRoundBack fontSize={24} /> </Link>
          <p>Welcome, {name}</p>
        </div>

        <div className="profile-main-bg">
          <div className="profile-title-div">

            <a className="profile-title-pic">EH</a>
            <div>
              <p className="profile-title-name">{name}</p>
              <p className="profile-title-email">{emailId}</p>
            </div>

          </div>

          <div className="Profile-Cards-Div">
            <ProfileCard cardLabel="User ID" cardInput={userId}/>
            <ProfileCard cardLabel="Name" cardInput={name}/>
            <ProfileCard cardLabel="Email ID" cardInput={emailId}/>
            <ProfileCard cardLabel="Address" cardInput={address}/>
            <ProfileCard cardLabel="Phone" cardInput={phone}/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;
