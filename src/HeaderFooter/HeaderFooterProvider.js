import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeaderLayout = () => <header><Header/></header>;
const FooterLayout = () => <footer><Footer/></footer>;

const HeaderFooterProvider = ({ children }) => (
  <>
    <HeaderLayout />
    {children}
    <FooterLayout />
  </>
);

export default HeaderFooterProvider;