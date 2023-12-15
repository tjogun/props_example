import React from "react";
import "./InfoCard.scss";

export default class InfoCard extends React.Component {
  render() {
    const { info } = this.props;

    function getClassName() {
      return info.id === 2
        ? info.value === "M"
          ? "c-info--male"
          : "c-info--female"
        : "c-info--default";
    }

    return (
      <>
        <p className={getClassName()}>
          {info.label}: {info.value}
        </p>
      </>
    );
  }
}
