import Image from "@/node_modules/next/image";
import IMG from "./about.jpeg";

const About = () => {

  return (
    <div className="es:my-10 mx-5 md:mx-10 mb-5 h-full flex gap-5 es:flex-col md:flex-row justify-center items-center">
    <div className="es:mt-10 w-1/2 h-[600px] md:max-w-[550px] mr-5 flex justify-center flex-col items-center">
     
          <h2 className="text-xl font-bold">
            Prieks iepazīties, mani sauc Laine!
          </h2>
          <br />
          <p className="indent-5 text-lg">
            Es esmu pabeigusi Rēzeknes Mākslas un dizaina vidusskolu, kurā
            ieguvu kvalifikāciju - foto dizaina speciālists. Pati sevi vēl
            joprojām uzskatu par fotogrāfu iesācēju. Fotogrāfijā man patīk
            eksperimentēt, neesmu fans ierastajām, mākslīgajām bildēm, kuras
            kaut kur mājās rāmītī ir katram otrajam.
          </p>
      
    </div>
    <div className="es:mt-20 md:mr-5 w-1/2 flex justify-center flex-col items-center">
      <Image
        className="h-[400px] min-w-[450px] object-cover hover:translate-y-2"
        src={IMG}
        alt="photo"
       
      />
    </div>
  </div>
);
};

export default About;
