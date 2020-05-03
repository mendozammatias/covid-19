import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  content: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  stayAtHomeImg: {
    height: 'auto',
    width: '100%',
  },
  text: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      textAlign: 'center',
    },
  },
}));
