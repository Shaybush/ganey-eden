'use client';

import React, { FC } from 'react';
import { navbarLinksConfig } from './config/sidebar.config';

interface ISidebarModel {}

const Sidebar: FC<ISidebarModel> = () => {
  const navbarLinks = navbarLinksConfig;

  return <React.Fragment>side bar</React.Fragment>;
};

export default Sidebar;
