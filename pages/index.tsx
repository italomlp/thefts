import type { NextPage } from "next";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import tailwindColors from "tailwindcss/colors";
import Head from "next/head";

import { colors, colorsRGB } from "../constants/colors";

import people from "../data/people";
import { useCurrentColor } from "../hooks/useCurrentColor";

type Props = {
  links: Array<{
    id: string;
    name: string;
  }>;
};

const Home: NextPage<Props> = ({ links }) => {
  const { setCurrentColor } = useCurrentColor();

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Head>
        <title>Furtos - Caker Experience @ CKL</title>
      </Head>
      <div className="bg-white p-8 rounded shadow-xl">
        <div className="flex flex-col">
          <section className="text-blueGray-700 ">
            <div className="container flex flex-col items-center px-5 py-8 mx-auto">
              <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                <div className="mb-6">
                  <RoughNotation
                    type="highlight"
                    show
                    color={tailwindColors.pink[900]}
                  >
                    <h1 className="py-2 px-4 text-2xl font-semibold tracking-tighter text-white sm:text-5xl title-font">
                      Você é um artista!
                    </h1>
                  </RoughNotation>
                </div>
                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
                  Se você está aqui, é porque é especial, e te considero um
                  artista. E eu quero roubar algo de você!
                </p>
              </div>

              <div className="w-full mb-12 text-left ">
                <p className="mb-4 text-base font-medium leading-relaxed text-blueGray-700 ">
                  Recentemente eu li um livro chamado{" "}
                  <span className="italic font-bold">
                    Roube como um artista
                  </span>
                  , e muitas das ideias que o autor{" "}
                  <span className="italic">Austin Kleon</span> apresenta me
                  inspiraram para tentar sempre melhorar. Estou roubando a ideia
                  dele, adaptando com o meu toque, para dizer a você que me lê,
                  que também estou roubando de você!
                </p>
                <p className="mb-4 text-base font-medium leading-relaxed text-blueGray-700 ">
                  Só para ficar mais claro, isso significa que você é importante
                  para mim, e há características suas que admiro e até gostaria
                  de adaptá-las para minha vida. Esse é o conceito de
                  &quot;roubar&quot; (como um artista), em que nos inspiramos no
                  melhor dos outros para melhorar a nós mesmos, e sempre
                  adaptando ao nosso próprio jeito. Aah, e vale dizer também que
                  a ideia é não cometer plágio, por isso a importância da
                  adaptação individual.
                </p>
                <p className="mb-2 text-base font-medium leading-relaxed text-blueGray-700 ">
                  Ficou curioso? Clique no seu nome abaixo para descobrir qual o{" "}
                  <span className="font-bold">furto</span> que
                  estou/estive/estarei cometendo, e você nem saberia:
                </p>
                <p className="mb-16 text-base font-medium leading-relaxed text-blueGray-700 ">
                  (PS: Se seu nome não está na lista, clique em{" "}
                  <span className="font-bold">WIP</span>).
                </p>

                <section className="text-blueGray-700">
                  <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-3 items-center">
                    {links.map(({ id, name }, index) => {
                      const color = colors[index % colors.length];
                      const colorRGB = colorsRGB[index % colors.length];
                      return (
                        <div
                          key={id}
                          onClick={() => {
                            setCurrentColor(colorRGB);
                          }}
                        >
                          <Link href={`/people/${id}`}>
                            <a
                              className={`py-3 px-6 text-white font-bold rounded-lg shadow-lg block md:inline-block w-32 text-center transition duration-300 ease-in-out hover:bg-white hover:text-${color} bg-${color} border-${color} border-2 transform hover:-translate-y-1 hover:scale-110 active:border-white`}
                            >
                              {name}
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      links: people.map(({ name, id }) => ({ name, id })),
    },
  };
}

export default Home;
