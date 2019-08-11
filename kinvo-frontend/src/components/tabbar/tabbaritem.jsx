import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { TabBarItemBox } from "./styles";

const TabBarItem = ({ children, label, activeTab, ...attrs }) => {
  const classes = classNames("tab-bar-item", { active: activeTab === label });

  return (
    <TabBarItemBox className={classes} {...attrs}>
      {children}
    </TabBarItemBox>
  );
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string
};

TabBarItem.defaultProps = {
  children: null,
  activeTab: ""
};

export default TabBarItem;
