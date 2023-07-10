import Button from './shared/components/button/button';
import Icon from './shared/components/icon/icon';
import Img from './assets/icons/phone.svg'
export default function Home() {
  const id = 1;
  return (
    <main>
      <Button />
      <Icon iconSrc='phone-call' />
      <img src="./assets/icons/phone.svg" width={50} height={50} alt="" />
      <p>sad</p>
    </main>
  );
}
