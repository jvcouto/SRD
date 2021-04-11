/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
<<<<<<< HEAD
import InteractiveList from '../../pages/dashboard/list';
import { useAuth } from '../../services/authContext';
=======
import SimpleAccordion from '../../pages/dashboard/listexpands';
>>>>>>> 61c448d6eab380b35e84febf3aaedf2234deb7a1

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      s
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    padding: theme.spacing(2),
    flexGrow: 2,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { setIsLogged } = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setIsLogged(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            SRD
          </Typography>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs}>
            <Tab label="Listar Professor" {...a11yProps(0)} />
            <Tab label="Adicionar" {...a11yProps(1)} />
          </Tabs>
          <Button color="inherit" onClick={handleClick}>Logout</Button>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SimpleAccordion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
