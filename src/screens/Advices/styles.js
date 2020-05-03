import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  welcomeImage: {
    margin: '0 auto 16px',
    width: 150,
  },
  card: {
    border: '1px solid rgb(225, 232, 238)',
    borderRadius: 0,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 1px',
    margin: '20px 0px 0',
  },
  cardTitle: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    color: 'rgb(67, 72, 77)',
    fontWeight: 'bold',
    paddingBottom: theme.spacing(),
  },
  cardContent: {
    maxWidth: 400,
    padding: theme.spacing(2),
  },
  thumbnail: {
    height: 'auto',
    width: '100%',
  },
}));
