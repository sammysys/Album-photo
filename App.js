import React from 'react'
import Footer from './Footer';
import useStyles from './styles';
import Body from './components/Body';
import Head from './components/Head';


const App = () => {
  const classes = useStyles();
  return (
    <>     
      <main>
        <Head />
        <Body />
        <Footer className={classes.footer}/>
      </main>
    </>
  )
}

export default App