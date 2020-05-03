import React from 'react';
import Logo from '@tripApp/components/UI/Logo/Logo';
import Footers from '@tripApp/components/Footer/Footer';
import LogoImage from '@tripApp/assets/images/logo-alt.svg';
import FooterMenu from './FooterMenu';

const Footer = ({ path }) => {
  return (
    <Footers
      path={path}
      logo={
        <Logo
          withLink
          linkTo="/"
          src={LogoImage}
          title="TripFinder."
        />
      }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} ReaQ, Inc.`}
    />
  );
};

export default Footer;
