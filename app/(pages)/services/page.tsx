import Image from "next/image";
import SmallHeader from "@/app/components/SmallHeader";
import Button from "@/app/components/Button";
import MainText from "@/app/components/MainText";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <div>
        <Image
          src={"/skate_shop_services.jpg"}
          width={500}
          height={500}
          alt={"alt"}
          unoptimized={true}
          className="w-full object-cover h-[500px]"
        ></Image>
      </div>
      <section className="p-8 space-y-16 max-w-6xl mx-auto">
        <div>
          <MainText>
            If you need new ice skates, or assistance with your current skates,
            we offer a wide range of services. A partial list includes skate
            fitting, sharpening, boot punches or stretching, and blade
            adjustment.
          </MainText>
        </div>
        <div className="space-y-4">
          <SmallHeader>Skate Sets</SmallHeader>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="rounded shadow p-4 space-y-4 bg-blue-300">
              <h3 className="font-bold">Fixed Blades</h3>
              <MainText>
                Initial fitting, blade sharpening, first boot punches (as
                needed), heat molding (if applicable).
              </MainText>
            </div>
            <div className="rounded shadow  bg-blue-300">
              <div className="p-4 space-y-4">
                <h3 className="font-bold">Adjustable Blades</h3>
                <MainText>
                  Initial fitting, blade sharpening, heat molding (if
                  applicable), first blade adjustment, first boot punches (as
                  needed), set screws.
                </MainText>
              </div>
              <div className="bg-blue-400 p-4">
                <MainText>
                  If blades are separate, blade mounting is an additional fee.
                </MainText>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <MainText>A general idea of time needed per service</MainText>
          <table className="table-auto border-collapse p-4 border shadow w-full text-left">
            <colgroup>
              <col className="w-1/2"></col>
              <col className="w-1/2"></col>
            </colgroup>
            <thead className="bg-slate-200/50">
              <tr>
                <th className="p-4 border">Service</th>
                <th className="p-4 border ">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">Skate Sharpening</td>
                <td className="p-4 border">15 min.</td>
              </tr>
              <tr>
                <td className="p-4 border">Blade Adjustment</td>
                <td className="p-4 border">30-60 min.</td>
              </tr>
              <tr>
                <td className="p-4 border">
                  Boot Fitting/Blade Sharpening/Blade Mounting
                </td>
                <td className="p-4 border">60-90 min.</td>
              </tr>
            </tbody>
          </table>

          <MainText>
            Some services may require leaving skates overnight, or even a few
            days.
          </MainText>
        </div>
        <div>
          <MainText>
            For help with current ice skates (beyond what is included in the
            purchase of new ice skates), there will be a fee for time and
            materials. This will vary depending on the amount of time, the
            materials needed, and the work performed.
          </MainText>
        </div>
        <div className="flex justify-center">
          <Button>
            <Link href="/contact">Request Service</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;
