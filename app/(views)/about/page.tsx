import { FC } from 'react';
import stringConst from '@/public/locales/he/about.json';

interface IAboutModel {}

const About: FC<IAboutModel> = () => {
  return <div>{stringConst.about_header_1}</div>;
};

export default About;
