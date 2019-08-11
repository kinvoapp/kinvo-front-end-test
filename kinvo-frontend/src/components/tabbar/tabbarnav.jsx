import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const TabBarNav = ({ navLabel, className, onChangeActiveTab }) => {
  return (
    <Button
      type="button"
      onClick={() => {
        onChangeActiveTab(navLabel);
      }}
    >
      {navLabel}
    </Button>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func
};

TabBarNav.defaultProps = {
  navLabel: "Tab",
  className: "",
  onChangeActiveTab: () => {}
};

export default TabBarNav;
