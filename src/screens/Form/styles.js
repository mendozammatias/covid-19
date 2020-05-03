import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  field: {
    marginTop: 20,
  },
  text: {
    fontSize: 17,
  },
  requiredText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(),
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 20,
  },
}));
