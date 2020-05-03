import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  welcomeImage: {
    margin: '0 auto 16px',
    width: 150,
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: theme.spacing(2),
  },
}));
