import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useLocation, Switch } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Screens/Home/Home';
import AboutUs from './Screens/AboutUs';
import Tracks from './Screens/Tracks';
import Prizes from './Screens/Prizes';
import Timeline from './Screens/Timeline';
import Judges from './Screens/Judges';
import Sponsor from './Screens/Sponsors/Sponsors';
import FAQ from './Screens/FAQs';
import Team from './Screens/Meet_the_team/Team';
import ContactUs from './Screens/ContactUs';
import { makeStyles} from '@material-ui/core';
import MouseParticles from "react-mouse-particles";
import Loading from './Screens/Loading/Loading'
import NotFound from './Screens/NotFound'
const useStyles= makeStyles({
  root: {
    height: '100%',
    minHeight: '60vh',
    '@media (max-width:599px)': {
      minHeight: '80vh',
    }
  },
  
})

function ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

function App() {
  const [loading, setLoading] = useState(true)
  const classes= useStyles();
  useEffect(() => {
    let first_visit = localStorage.getItem('first_visit');
    if(!first_visit){
      setLoading(true);
  
      localStorage.setItem('first_visit',1);
    }
    window.onunload = () => {
        // Clear the local storage
        localStorage.clear()
    }
    setTimeout(() => setLoading(false), 4000)
  }, [])
  return (
    <Router>
      {!loading ? (
        <ScrollToTop>
          <Header />
          <main className={classes.root}>
            <MouseParticles
                g={1}
                color="random"
                cull="MuiSvgIcon-root,MuiButton-root"
                level={6}
              />
            <div>
              <Switch>

                <Route path='/' component={Home} exact />
                <Route path='/aboutUs' component={AboutUs} exact />
                <Route path='/tracks' component={Tracks} exact />
                <Route path='/prizes' component={Prizes} exact />
                <Route path='/timeline' component={Timeline} />
                <Route path='/Judges' component={Judges} exact />
                <Route path='/faq' component={FAQ} exact />
                <Route path='/sponsors' component={Sponsor} exact />
                <Route path='/team' component={Team} exact />
                <Route path='/contactUs' component={ContactUs} exact />
                <Route path='/events/:id' component={Event} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </main>
          <Footer />
        </ScrollToTop>  
      ): (
        <Loading />
      )}
      
    </Router>
  );
}

export default App;
