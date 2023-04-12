import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSmall: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#A6ABB2",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  containerBal: {
    padding: "1.5rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  balnce: {
    paddingTop: "20px",
    color: "#2A2A2A",
    fontWeight: 700,
    fontSize: "36px",
  },
  small_bal: {
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: " 0.1px",
    color: "#A6ABB2",
  },
  fund: {
    // borderBottom: '1px solid #EBEBEB',
    paddingBottom: "20px",
  },
  fundValue: {
    paddingTop: "30px",
    paddingBottom: "10px",
    letterSpacing: " 0.1px",
    color: "#2A2A2A",
    fontWeight: 700,
    fontSize: "36px",
  },
  funds_hold: {
    backgroundColor: "#F5F5F5",
  },
  balance_container: {
    paddingBottom: "40px",
  },
  line: {
    position: "relative",
    width: "350px",
    top: ".1rem",
    right: " 6rem",
    background: "#EBEBEB",
    height: "1px",
  },
}));
