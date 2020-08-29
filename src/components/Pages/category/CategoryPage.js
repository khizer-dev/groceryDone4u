import React, { Fragment } from "react";
import { Container } from "reactstrap";
import TabWithIcon from "./tab-with-icon/TabWithIcon";
import Tab from '../../homepage/gadget/Gadget';
import CombineTab from '../../homepage/combine-gadget/CombineGadget';
import CombineGadget from "../../homepage/combine-gadget/CombineGadget";
import VerticalmultiTab from '../../homepage/multiverticalgadget/MultiVerticalGadget';

const CategoryPage = () => {
  return (
    <Fragment>
      <Container>
        <TabWithIcon />
        <Tab  title={"Best Deals"}/>
        <CombineGadget />
        <VerticalmultiTab />
      </Container>
    </Fragment>
  );
};

export default CategoryPage;
