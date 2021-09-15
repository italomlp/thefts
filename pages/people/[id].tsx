import React from "react";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { RoughNotation } from "react-rough-notation";

import people from "../../data/people";
import { colorsRGB } from "../../constants/colors";

export async function getStaticPaths() {
  const paths = people.map(({ id }) => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

type Person = {
  id: string;
  name: string;
  avatar: string;
  subtitle: string;
  content: string;
};

export const getStaticProps: GetStaticProps<
  { person: Person },
  { id: string }
> = async ({ params }) => {
  const person: Person = people.find(({ id }) => id === params!.id) as Person;

  return { props: { person } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const People: NextPage<Props> = ({ person }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{person.name} - Furtos - Caker Experience @ CKL</title>
      </Head>
      <div className="container mx-auto items-center px-5 pb-32 pt-8">
        <div className="mb-24 w-full mx-auto md:w-1/2">
          <button
            onClick={router.back}
            className="transition duration-500 ease-in-out hover:bg-gray-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 p-3 shadow-lg bg-gray-300 rounded-full border border-gray-200"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl md:w-1/3">
          <div className="p-6 text-center">
            <div className="h-48 w-48 border-2 bg-gray-50 border-white relative mx-auto -mt-24 rounded-full shadow-xl">
              <Image
                className="flex-shrink-0 object-cover object-center w-32 h-32 rounded-full absolute inset-x-0"
                src={person.avatar}
                alt={person.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="pt-4 my-4 flex justify-center items-center">
              <h2 className="text-xs mr-2 font-semibold tracking-widest text-black uppercase title-font">
                {person.subtitle.split(".")[0]}
              </h2>
              <span className="text-2xl">{person.subtitle.split(".")[1]}</span>
            </div>
            <h4 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
              <RoughNotation
                type="underline"
                strokeWidth={7}
                show
                color={
                  colorsRGB[Math.trunc(Math.random() * 100) % colorsRGB.length]
                }
              >
                <span>{person.name}</span>
              </RoughNotation>
            </h4>
            <p className="mb-3 text-base leading-relaxed text-blueGray-500">
              {person.content}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
