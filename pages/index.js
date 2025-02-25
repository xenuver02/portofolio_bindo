import Head from "next/head";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import saya from "../public/fotoaing.png";
import prj1 from "../public/project1.png";
import prj2 from "../public/cika.jpg";


export default function Home() {
  const [modeGelap, setModeGelap] = useState(false);

  const skills = [
    { name: "HTML & CSS", percentage: 90, description: "Mampu membuat tampilan website yang responsif dan menarik." },
    { name: "JavaScript", percentage: 75, description: "Menguasai dasar-dasar JavaScript serta pengembangan interaktif pada web." },
    { name: "React.js", percentage: 80, description: "Mampu membangun aplikasi frontend yang modular dengan React.js." },
    { name: "Next.js", percentage: 75, description: "Berpengalaman dalam pembuatan website dengan Next.js untuk SSR dan SSG." },
    { name: "UI/UX Design", percentage: 70, description: "Memahami prinsip desain yang baik untuk meningkatkan pengalaman pengguna." },
    { name: "Vue.js", percentage: 60, description: "Memahami dasar-dasar Vue.js untuk membangun antarmuka pengguna yang dinamis." },
  ];

  return (
    <div className={modeGelap ? "dark" : ""}>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Dibuat dengan create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setModeGelap(!modeGelap)}
                  className="cursor-pointer text-2xl transition-transform duration-300 hover:rotate-180"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:scale-105 transition-transform"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 py-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Gabid Habib
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Frontend Developer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
              Halo, nama saya Gabid Habib. Saya berusia 18 tahun dan bersekolah di SMKN 4 Bandung. Saya tertarik dengan rekayasa perangkat lunak, terutama desain UI/UX. Saat ini, saya sedang mempelajari React.js, Next.js dan Vue.js.
              </p>
              <div className="text-5xl flex gap-10 py-3 text-gray-600 dark:text-gray-400">
              <AiFillGithub className="hover:text-gray-800 transition-colors duration-300 hover:scale-110" />
<AiFillInstagram className="hover:text-pink-500 transition-colors duration-300 hover:scale-110" />
<AiFillFacebook className="hover:text-blue-600 transition-colors duration-300 hover:scale-110" />

              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:mt-0 md:h-96 md:w-96 shadow-lg hover:scale-105 transition-transform duration-300">
                <Image src={saya} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
         <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:bg-teal-500 hover:text-white">
                <p className="text-lg font-semibold dark:text-white">{skill.name}</p>
                <div className="w-full bg-gray-300 rounded-full h-3 mt-2 relative">
                  <div
                    className="bg-teal-500 h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <span className="absolute right-2 top-0 text-sm font-bold text-gray-700 dark:text-white">{skill.percentage}%</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 mt-12">
          <h3 className="text-3xl py-1 dark:text-white">My Projects</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {[{ img: prj1, name: "Website Job4student" }, { img: prj2, name: "Website CIKA" }].map((project, index) => (
              <div key={index} className="basis-1/3 flex-1 relative group">
                <Image
                  className="rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105 shadow-md"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  src={project.img}
                />
                <p className="text-center text-lg font-semibold mt-2 dark:text-white">{project.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}