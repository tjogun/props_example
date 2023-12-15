import React from "react";
import InfoCard from "../InfoCard/InfoCard";

export default class AboutMe extends React.Component {
  render() {
    const infoArr = this.props.info;

    return (
      <>
        {infoArr.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </>
    );
  }
}
