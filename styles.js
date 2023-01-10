import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: '20px'
  },

  icon: {
    marginRight: '20px',
  },

  buttons: {
    marginTop: '40px'
  }, 

 cardGrid: {
    padding: '20px'
 },

 card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
 },

 cardMedia: {
    paddingTop: '56.25%'

 },

 cardContent: {
    flexGrow: 1
 },
 footer: {
   textAlign: 'center',
   padding: '20px',
   marginTop: '10px',
   backgroundColor: theme.palette.background.paper

 }



}));

export default useStyles;