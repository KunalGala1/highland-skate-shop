import Image from 'next/image';
import SmallHeader from '@/app/components/SmallHeader';
import Button from '@/app/components/Button';

const ServicesPage = () => {
  return (
    <>
      <div>
        <Image
          src={'/skate_shop_services.jpg'}
          width={500}
          height={500}
          alt={'alt'}
          className='w-full object-cover h-[500px]'
        ></Image>
      </div>
      <section className='p-8 space-y-16'>
        <div>
          <p>
            If you need new ice skates, or assistance with your current skates,
            we offer a wide range of services. A partial list includes skate
            fitting, sharpening, boot punches or stretching, and blade
            adjustment.
          </p>
        </div>
        <div className='space-y-4'>
          <SmallHeader>Skate Sets</SmallHeader>
          <div className='flex gap-8'>
            <div className='rounded shadow p-4 space-y-4 bg-blue-300'>
              <h3 className='font-bold'>Fixed Blades</h3>
              <p>
                Initial fitting, blade sharpening, first boot punches (as
                needed), heat molding (if applicable).
              </p>
            </div>
            <div className='rounded shadow  bg-blue-300'>
              <div className='p-4 space-y-4'>
                <h3 className='font-bold'>Adjustable Blades</h3>
                <p>
                  Initial fitting, blade sharpening, heat molding (if
                  applicable), first blade adjustment, first boot punches (as
                  needed), set screws.
                </p>
              </div>
              <div className='bg-blue-400 p-4'>
                <p>If blades are seperate, blade mounting is also included.</p>
              </div>
            </div>
          </div>
        </div>
        <div>table...</div>
        <div>
          <p>
            For help with current ice skates (beyond what is included in the
            purchase of new ice skates), there will be a fee for time and
            materials. This will vary depending on the amount of time, the
            materials needed, and the work performed.
          </p>
        </div>
        <div>
          <Button>Request Service</Button>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;
