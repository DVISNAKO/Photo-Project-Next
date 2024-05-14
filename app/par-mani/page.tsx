import Image from "@/node_modules/next/image";
import { LanguageProps } from "../utils/type";
import IMG from "./about.jpeg";

const About = ({ language }: LanguageProps) => {
  return (
    <div className="es:my-10 flex-col mx-5 md:mx-10 mb-5 h-full flex gap-5 es: md:flex-row justify-center items-center">
      <div className="es:mt-10 w-1/2 h-[600px] md:max-w-[550px] mr-5 flex justify-center flex-col items-center">
        <h2 className="text-xl font-bold">
          {language ? (
            <>Prieks iepazīties, mani sauc Laine!</>
          ) : (
            <>Приятно познакомится, я Лайне!</>
          )}
        </h2>
        <br />
        <p className="indent-5 text-lg">
          {language ? (
            <>
              Es esmu pabeigusi Rēzeknes Mākslas un dizaina vidusskolu, kurā
              ieguvu kvalifikāciju - foto dizaina speciālists. Pati sevi vēl
              joprojām uzskatu par fotogrāfu iesācēju. Fotogrāfijā man patīk
              eksperimentēt, neesmu fans ierastajām, mākslīgajām bildēm, kuras
              kaut kur mājās rāmītī ir katram otrajam.
            </>
          ) : (
            <>
              Я закончила Резекненскую среднюю школу искусства и дизайна, где
              получила квалификацию – специалист по фотодизайну. Я до сих пор
              считаю себя начинающим фотографом. Я люблю экспериментировать в
              фотографии, я не фанат обычных, искусственных фотографий, которые
              есть у каждого второго в рамке где-нибудь дома.
            </>
          )}
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
