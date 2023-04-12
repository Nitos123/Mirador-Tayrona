import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import useStyles from "./styles";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import dashboard from "../assets/dashboard.svg";
import user from "../assets/user.svg";
import wallet from "../assets/Wallet.svg";
import customer from "../assets/customer.svg";

const mainListItems = (
  <>
    <ListItem button active>
      <ListItemIcon>
        <img src={dashboard} alt="dashboard" />
      </ListItemIcon>
      <ListItemText className="list_item_text" primary="Rooms" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={customer} alt="wallet" />
      </ListItemIcon>
      <ListItemText className="list_item_text" primary="Users" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={wallet} alt="activity" />
      </ListItemIcon>
      <ListItemText className="list_item_text" primary="Reviews" />
    </ListItem>
  </>
);

const DashboardAdmin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="#000"
            noWrap
            className={classes.title}
          >
            Balances
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" id="user_img" src={user} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        id="mainDrawer"
      >
        <div className="draw_bar">
          <h3>Mirador Tayrona Park</h3>
        </div>

        <List>{mainListItems}</List>
      </Drawer>
    </div>
  );
};

export default DashboardAdmin;
