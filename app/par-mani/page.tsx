import Image from "@/node_modules/next/image";
import IMG1 from "../image/ParMani/IMG_3932.jpg";
import IMG2 from "../image/ParMani/IMG_4000.jpg";
import AboutDesc from "./AboutDesc";
import AboutTitle from "./AboutTitle";

const About = () => {
  const titleLV = "PAR MANI";
  const titleRus = "ОБО МНЕ!";
  const descLV =
    " Es esmu pabeigusi Rēzeknes Mākslas un dizaina vidusskolu, kurā ieguvu kvalifikāciju - foto dizaina speciālists. Pati sevi vēl joprojām uzskatu par fotogrāfu iesācēju. Fotogrāfijā man patīk eksperimentēt, neesmu fans ierastajām, mākslīgajām bildēm, kuras kaut kur mājās rāmītī ir katram otrajam.";
  const descRus =
    " Я закончила Резекненскую среднюю школу искусства и дизайна, где получила квалификацию – специалист по фотодизайну. Я до сих пор считаю себя начинающим фотографом. Я люблю экспериментировать в фотографии, я не фанат обычных, искусственных фотографий, которые есть у каждого второго в рамке где-нибудь дома.";

  return (
    <div className="es:my-6 mr-12 flex-col md:mx-10 mb-5 flex es: md:flex-row justify-center items-center">
      <div className="flex justify-center mx-5 flex-col">
        <div className="es:mt-10 max-w-[300px] pt-5 md:mb-24">
          <AboutTitle titleLV={titleLV} titleRus={titleRus} />
        </div>
        <div className="">
          <div className="es:mb-0 pt-5 md:mb-5 text-lg">
            <h1>Prieks iepazīties, mani sauc Laine!</h1>
          </div>
          <div className="es:mb-5 md:w-[350px]">
            <AboutDesc descLV={descLV} descRus={descRus} />
          </div>
        </div>
      </div>
      <div>
        <div className="es:mb-10 mt-10 w-[250px] md:w-96 rotate-6 mb-32 -z-0">
          <Image alt="par-mani" src={IMG1} />
        </div>
        <div className="es:mb-20 md:ml-40 w-48 -rotate-6 mt-20 -z-0">
          <Image alt="par-mani" src={IMG2} />
        </div>
      </div>
    </div>
  );
};

export default About;
