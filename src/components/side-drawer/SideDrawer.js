import React, { Fragment, useState } from "react";
import Sidebar from "react-sidebar";
import Content from './side-drawer-content/SideDrawerContent';
import "./SideDrawer.style.css";

const SideDrawer = (props) => {
  const [sideBar, setsideBar] = useState(false);

  const sideBarHanlder = (open) => setsideBar(open);

  return (
    <Fragment className="pos-fixed">
      <Sidebar
        pullRight={true}
        sidebar={<Content/>}
        open={sideBar}
        onSetOpen={sideBarHanlder}
        styles={{ sidebar: { background: "white" ,zIndex: 200,
        position: "fixed",
        top: 0,
        bottom: 0,
        transition: "transform .3s ease-out",
        WebkitTransition: "-webkit-transform .3s ease-out",
        willChange: "transform",
        overflowY: "auto",
        maxWidth: "30%",
        minWidth: "30%" } }}
      >
        <span className="side-btn" onClick={() => sideBarHanlder(true)}><i className="fa fa-cart-arrow-down fa-3x"></i></span>
     
      </Sidebar>
    </Fragment>
  );
};

export default SideDrawer;
