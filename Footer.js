import React, {useState, useEffect} from 'react';
import useStyles from './styles';
export default function Footer() {
    const classes = useStyles();
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
    <div className={classes.footer}>
    Hade &copyRight - {date}
    </div>
    
    </>
  );
}