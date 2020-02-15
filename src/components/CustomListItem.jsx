import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const CustomListItemIcon = ({ children }) =>

    <ListItemIcon style={{ minWidth: "60px" }}>{ children }</ListItemIcon>;

export default CustomListItemIcon;