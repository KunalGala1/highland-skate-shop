import Image from 'next/image';

const FigureSkatingBlade = () => {
  return (
    <div className='relative z-10 px-4'>
      <Image
        src={'/figure-skating-blade.svg'}
        height={500}
        width={100}
        alt={'Figure skating blade banner image'}
        className='w-full'
      ></Image>
    </div>
  );
};
export default FigureSkatingBlade;
