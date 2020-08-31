import React, { Fragment, useState } from "react";
import { Container,
    Row,
    Col,
    Table,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input, } from "reactstrap";
import './QuantityButton.style.css';

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const onDeduct = () => {
    if (quantity > 1) {
      setQuantity((quantity) => --quantity);
    }
    console.log("quantity: ", quantity);
  };

  const onIncrease = () => {
    setQuantity((quantity) => ++quantity);
    console.log("quantity: ", quantity);
  };

  return (
    <Fragment>
      <div className="xs_input_number quantity max-width-50 full-height border">
        <InputGroup>
          <InputGroupAddon addonType="prepend" onClick={onDeduct}>
            <InputGroupText>-</InputGroupText>
          </InputGroupAddon>
          <Input type="number" value={quantity} name={quantity} />
          <InputGroupAddon addonType="prepend" onClick={onIncrease}>
            <InputGroupText>+</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </Fragment>
  );
};

export default QuantityButton;
