import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import ForumIcon from "@material-ui/icons/Forum";
import BookIcon from "@material-ui/icons/Book";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import MoneyIcon from "@material-ui/icons/Money";
import FaceIcon from "@material-ui/icons/Face";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";
import { JobRequestContext } from "../../Contexts/JobRequestContext";
import { AuthContext } from "../../Contexts/AdminAuthContexts";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    minWidth: "30px",
  },
  menuList: {
    paddingBottom: "80px",
  },
  listItem: {
    padding: "5px 10px 10px 5px",
  },
  linkItem: {
    textDecoration: "none",
    color: "#29524A",
  },
  categoryTitle: {
    fontWeight: "medium",
    fontSize: "20px",
    padding: "0",
  },
  count: {
    backgroundColor: "#29524A",
    textAlign: "center",
    color: "#FFFFFF",
    borderRadius: "30px",
  },
}));

const SidebarMenu = () => {
  const classes = useStyles();
  const { jobRequests } = useContext(JobRequestContext);
  const { admin } = useContext(AuthContext);
  return (
    <List component="nav" className={classes.menuList}>
      <ListItem className={`${classes.listItem} `}>
        <ListItemText
          primary="Teachers"
          primaryTypographyProps={{ className: classes.categoryTitle }}
        />
      </ListItem>
      <Divider />
      {/* {(admin.role === "Administrator" || admin.role === "Moderator") && (
        <Link to="/admin/addnewteacher" className={classes.linkItem}>
          <ListItem className={`${classes.listItem} ${classes.active}`} button>
            <ListItemIcon className={classes.menuIcon}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add New Teacher" />
          </ListItem>
        </Link>
      )} */}

      <Link to="/admin/allteachers" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="All Teachers" />
        </ListItem>
      </Link>
      {/* <Link to="/admin/teacherrecord" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Teacher Record" />
        </ListItem>
      </Link> */}
      {/* <ListItem className={classes.listItem}>
        <ListItemText
          primary="Students"
          primaryTypographyProps={{ className: classes.categoryTitle }}
        />
      </ListItem>
      <Divider />
      <Link to="/admin/allstudents" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <PeopleAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="All Students" />
        </ListItem>
      </Link>
      <Link to="/admin/studentrecord" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <FaceOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Student Record" />
        </ListItem>
      </Link> */}
      <ListItem className={classes.listItem}>
        <ListItemText
          primary="Courses"
          primaryTypographyProps={{ className: classes.categoryTitle }}
        />
      </ListItem>
      <Divider />
      <Link to="/admin/allcourses" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <LibraryBooksOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="All Courses" />
        </ListItem>
      </Link>
      {/* <Link to="/admin/coursedetails" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <ImportContactsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Course Details" />
        </ListItem>
      </Link> */}
      {(admin.role === "Administrator" || admin.role === "Moderator") && (
        <Link to="/admin/addnewcourse" className={classes.linkItem}>
          <ListItem className={classes.listItem} button>
            <ListItemIcon className={classes.menuIcon}>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Add New Course" />
          </ListItem>
        </Link>
      )}

      <ListItem className={classes.listItem}>
        <ListItemText
          primary="Others"
          primaryTypographyProps={{ className: classes.categoryTitle }}
        />
      </ListItem>
      <Divider />
      {admin.role === "Administrator" && (
        <Link to="/admin/accounts" className={classes.linkItem}>
          <ListItem className={classes.listItem} button>
            <ListItemIcon className={classes.menuIcon}>
              <MoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Accounts" />
          </ListItem>
        </Link>
      )}
      {(admin.role === "Administrator" || admin.role === "Moderator") && (
        <Link to="/admin/messages" className={classes.linkItem}>
          <ListItem className={classes.listItem} button>
            <ListItemIcon className={classes.menuIcon}>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
        </Link>
      )}

      <Link to="/admin/jobs" className={classes.linkItem}>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.menuIcon}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs Request" />
          <ListItemText
            className={classes.count}
            primary={jobRequests.length > 0 && `+${jobRequests.length}`}
          />
        </ListItem>
      </Link>
    </List>
  );
};

export default SidebarMenu;
