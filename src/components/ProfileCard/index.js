import "./index.css";

const ProfileCard = (props) => {
    const {cardLabel, cardInput} = props
  return (
    <div className="Profile-Card-Bg">
      <label className="Profile-Card-Label">{cardLabel}</label>
      <input disabled value={cardInput} className="Profile-Card-Input"/>
    </div>
  );
};

export default ProfileCard;
