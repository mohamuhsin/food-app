import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="table full of meals" />
      </div>
    </Fragment>
  );
};
export default Header;
