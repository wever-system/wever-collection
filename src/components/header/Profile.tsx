import styled from "styled-components";
import profileSvg from "../../assets/profile.svg";

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
  const userId = "User";
  return (
    <ProfileBox>
      <ProfileImage src={profileSvg} alt="profile" />
      <ProfileTxt>Hello, {userId}</ProfileTxt>
    </ProfileBox>
  );
};

export default Profile;
