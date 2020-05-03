import React from 'react';
import Menu from '@tripApp/components/UI/Antd/Menu/Menu';
import ActiveLink from '@tripApp/library/helpers/activeLink';

import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
} from '@tripApp/settings/constant';

const AuthMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <ActiveLink href={`${LOGIN_PAGE}`}>Sign in</ActiveLink>
      </Menu.Item>
      <Menu.Item key="1">
        <ActiveLink href={`${REGISTRATION_PAGE}`}>Sign up</ActiveLink>
      </Menu.Item>
    </Menu>
  );
};

export default AuthMenu;
