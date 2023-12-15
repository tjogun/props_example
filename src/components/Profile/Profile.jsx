import List from "../List/List";
import AboutMe from "../AboutMe/AboutMe";
import "./Profile.scss";

export default function Profile() {
  const myInfo = {
    name: "Tomo Jogun",
    location: "ZG",
    age: 32,
    colors: [
      { id: 1, name: "red" },
      { id: 2, name: "green" },
      { id: 3, name: "yellow" },
    ],
    info: [
      { id: 1, label: "Hobby", value: "Tennis" },
      { id: 2, label: "Gender", value: "M" },
      { id: 3, label: "Planet", value: "Mars" },
    ],
  };

  return (
    <>
      <div className="c-profile">
        <h1 className="c-profile__title">Profile</h1>
        <p>
          <b>Name:</b> {myInfo.name}
        </p>
        <p>
          <b>Location:</b> {myInfo.location}
        </p>
        <p>
          <b>Age: </b> {myInfo.age}
        </p>
        <h2 className="c-profile__title">Favorite colors: </h2>
        <List colors={myInfo.colors}></List>
        <h2 className="c-profile__title">About me:</h2>
        <AboutMe info={myInfo.info}></AboutMe>
      </div>
    </>
  );
}
