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
import ProfessorForm from '../../pages/dashboard/professorForm';
import { useAuth } from '../../services/authContext';
import ProfessorList from '../../pages/dashboard/professorList';
import TecnicoList from '../../pages/dashboard/tecnicoList';
import TecnicoForm from '../../pages/dashboard/tecnicoForm';

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

export default function SimpleTabs(props) {
  // eslint-disable-next-line react/prop-types
  const { professors, setProfessors } = props;

  // eslint-disable-next-line react/prop-types
  const { tecnicos, setTecnicos } = props;
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
            <Tab label="Adicionar Professor" {...a11yProps(1)} />
            <Tab label="Listar T??cnicos" {...a11yProps(2)} />
            <Tab label="Adicionar T??cnico" {...a11yProps(3)} />
          </Tabs>
          <Button color="inherit" onClick={handleClick}>Logout</Button>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProfessorList professors={professors} setProfessors={setProfessors} />
      </TabPanel>
      <TabPanel value={value} index={1} professors={professors} setProfessors={setProfessors}>
        <ProfessorForm professors={professors} setProfessors={setProfessors} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TecnicoList tecnicos={tecnicos} setTecnicos={setTecnicos} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TecnicoForm tecnicos={tecnicos} setTecnicos={setTecnicos} />
      </TabPanel>
    </div>
  );
}
