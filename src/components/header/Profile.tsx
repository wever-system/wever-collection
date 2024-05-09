import styled from "styled-components";
import profileSvg from "../../assets/profile.svg";
import { useEffect, useState } from "react";
import { ipcRenderer } from "electron";

const ProfileBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const ProfileTxt = styled.p`
  font-size: 1.2rem;
  padding-left: 10px;
`;

const Profile = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    ipcRenderer.on("get-user-name-reply", (_, arg) => {
      setUserName(arg);
    });

    ipcRenderer.send("get-user-name", "test@test.com");
  }, []);
  return (
    <ProfileBox>
      <ProfileImage src={profileSvg} alt="profile" />
      <ProfileTxt>Hello, {userName}</ProfileTxt>
    </ProfileBox>
  );
};

export default Profile;
