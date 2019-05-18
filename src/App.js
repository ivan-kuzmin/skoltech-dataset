import React from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import { MediaProvider } from './contexts/MediaContext';
import { DownloadsProvider } from './contexts/DownloadsContext';
import Header from './components/Header';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <MediaProvider>
      <DownloadsProvider>
        <Container className="h-100 p-0 pt-lg-5 d-flex flex-column">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Skoltech Dataset</title>
          </Helmet>
          <Header />
          <Navbar />
          <Content />
          <Footer />
        </Container>
      </DownloadsProvider>
    </MediaProvider>
  </Router>
);

export default App;
