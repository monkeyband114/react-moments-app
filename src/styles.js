import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(102, 51, 153,1)',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer: {
          flexDirection:'column-reverse'
        }
      }
      
}));