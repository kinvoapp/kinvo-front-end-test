import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Route, MemoryRouter } from 'react-router';

const breadcrumbNameMap = 
{
  '/resumo': 'Resumo Da Carteira',
  '/produtos': 'Meus Produtos',
  '/proventos': 'Meus Proventos',
  '/ativos': 'Classe Ativos',
  '/ativos/acao':'Ação',
  '/ativos/fundo':'Fundo',
  '/ativos/imobiliario':'Fundo Imobiliário',
  '/ativos/rendafixa':'Fundo Renda Fixa',  
  '/rentabilidade': 'Rentabilidade Real',
  '/carreira': 'Projeção de Carreira',
  '/risco': 'Risco x Retorno',
  '/cobertura': 'Cobertura do FGC'
};

function ListItemLink(props) 
{
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: 
  {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
  },
  lists: 
  {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: 
  {
    paddingLeft: theme.spacing(4),
  },
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function Menu() 
{
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter((x) => x);

            return (
              <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter color="inherit" to="/">
                  Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
        <nav className={classes.lists} aria-label="mailbox folders">
          <List>
            <ListItemLink to="/inbox" open={open} onClick={handleClick} />
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/inbox/important" className={classes.nested} />
              </List>
            </Collapse>
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
          </List>
        </nav>
      </div>
    </MemoryRouter>
  );
}
