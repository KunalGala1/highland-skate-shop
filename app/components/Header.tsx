import FigureSkatingBlade from './FigureSkatingBlade';
import Nav from './Nav';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='relative shadow'>
      {/* Figure Skating Blade Graphic */}
      <FigureSkatingBlade />
      <Image
        src={'/wave-haikei.svg'}
        height={100}
        width={500}
        alt={'Wave graphic by Haiku'}
        className='w-full scale-105 absolute bottom-0 left-0 h-2/3 object-cover'
      ></Image>
      {/* Navigation */}
      <Nav />
    </header>
  );
};
export default Header;
