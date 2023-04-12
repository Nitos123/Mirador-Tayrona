import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import dashboard from "./assets/dashboard.svg";
import wallet from "./assets/Wallet.svg";
import activity from "./assets/Activity.svg";

export const mainListItems = (
  <>
    <ListSubheader className="mainText" inset>
      Main pages
    </ListSubheader>

    <ListItem button active>
      <ListItemIcon>
        <img src={dashboard} alt="dashboard" />
      </ListItemIcon>
      <ListItemText className="list_item_text" primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={wallet} alt="wallet" />
      </ListItemIcon>
      <ListItemText className="list_item_text" primary="Balances" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={activity} alt="activity" />
      </ListItemIcon>
      <ListItemText className="list_item_text" primary="Analytics" />
    </ListItem>
  </>
);
