import React from "react";
import HeaderBar from "./header/HeaderBar";
import Footer from "./footer/footer";
export default function Layout(props) {
  return (
    <React.Fragment>
      <div className="layout-wrap">
        <HeaderBar background={props.background} />
        <div className="centra-margin">

          {props.children}

        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
