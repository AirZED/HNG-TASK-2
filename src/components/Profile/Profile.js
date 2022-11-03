//Imported Styles
import classes from "./Profile.module.css";

//imported Asset
import ProfileImage from "../../assets/profileImage.jpg";

const Profile = (props) => {
  return (
    <header className={classes.header}>
      <svg
        className={classes.more}
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
        <path
          d="M21 21.8333C21.4602 21.8333 21.8333 21.4602 21.8333 21C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21C20.1666 21.4602 20.5397 21.8333 21 21.8333Z"
          stroke="#98A2B3"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.8333 21.8333C27.2935 21.8333 27.6666 21.4602 27.6666 21C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4602 26.3731 21.8333 26.8333 21.8333Z"
          stroke="#98A2B3"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1666 21.8333C15.6269 21.8333 16 21.4602 16 21C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21C14.3333 21.4602 14.7064 21.8333 15.1666 21.8333Z"
          stroke="#98A2B3"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="1"
          y="1"
          width="40"
          height="40"
          rx="20"
          stroke="#D0D5DD"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 3"
        />
      </svg>

      <img src={ProfileImage} alt="Profile_Image" id="profile__img" />
      <h2 id="twitter">Mfonisoh01</h2>
      <h2 id={classes.slack}>MfonisoUkpabio</h2>
    </header>
  );
};

export default Profile;
