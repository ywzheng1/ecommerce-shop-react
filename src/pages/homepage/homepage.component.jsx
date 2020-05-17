  
import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles'
import HeroImage from '../../components/hero-image/hero-image';
import NewsFeed from '../../components/news-feed/news-feed';

const HomePage = () => (
  <HomePageContainer>
    <HeroImage />
    <Directory />
  </HomePageContainer>
);

export default HomePage;