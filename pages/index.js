import Head from "next/head";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import saya from "../public/fotoaing.png";
import prj1 from "../public/project1.png";
import prj2 from "../public/cika.jpg";

export default function Home() {
  const [modeGelap, setModeGelap] = useState(false);

  const skills = [
    { name: "HTML & CSS", percentage: 90, description: "Mampu membuat tampilan website yang responsif dan menarik." },
    { name: "Java Script", percentage: 75, description: "Menguasai dasar-dasar JavaScript serta pengembangan interaktif pada web." },
    { name: "React.js", percentage: 80, description: "Mampu membangun aplikasi frontend yang modular dengan React.js." },
    { name: "Next.js", percentage: 75, description: "Berpengalaman dalam pembuatan website dengan Next.js untuk SSR dan SSG." },
    { name: "UI/UX Design", percentage: 70, description: "Memahami prinsip desain yang baik untuk meningkatkan pengalaman pengguna." },
    { name: "Tailwind", percentage: 85, description: "Memahami dasar-dasar Vue.js untuk membangun antarmuka pengguna yang dinamis." },
  ];
  const projects = [
    { image: prj1, title: "Job4Student", description: "Job4Student adalah platform web yang membantu pencari kerja menemukan lowongan sesuai keterampilan. Pengguna dapat mencari pekerjaan, memfilter kategori, melihat profil perusahaan, serta mengunggah CV dan melamar langsung." },
    { image: prj2, title: "Cinta Kasih", description: "Cinta Kasih adalah platform web yang memudahkan donasi online untuk berbagai kampanye sosial dengan sistem transparan dan aman." },
  ];

  return (
    <div className={modeGelap ? "dark" : ""}>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Dibuat dengan create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <motion.section 
          className="min-h-screen"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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

  <motion.div 
    className="p-10 py-10 flex flex-col md:flex-row items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.2 }}
  >
    <div className="md:w-2/3">
      <motion.h2 
        className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        Gabid Habib
      </motion.h2>

      <motion.h3 
        className="text-2xl py-2 dark:text-white md:text-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.2 }}
      >

        Frontend Developer.
      </motion.h3>

      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl ">
      Saya adalah seorang Frontend Developer yang bersekolah di SMKN 4 Bandung. Saya memiliki minat besar dalam rekayasa perangkat lunak, terutama dalam desain UI/UX. Saat ini, saya sedang mendalami teknologi frontend seperti React.js, Next.js, dan Vue.js untuk membangun antarmuka web yang modern dan interaktif. Saya selalu berusaha menciptakan pengalaman pengguna yang intuitif dan menarik melalui desain serta kode yang efisien.
      </p>

      <div className="text-5xl flex gap-10 py-3 text-gray-600 dark:text-gray-400">
  <a href="https://github.com/xenuver02" target="_blank" rel="noopener noreferrer">
    <AiFillGithub className="hover:text-gray-800 transition-colors duration-300 hover:scale-110" />
  </a>
  <a href="https://www.instagram.com/xnuver_ck" target="_blank" rel="noopener noreferrer">
    <AiFillInstagram className="hover:text-pink-500 transition-colors duration-300 hover:scale-110" />
  </a>
  <a href="https://wa.me/qr/265YKOZ6Y3VFG1" target="_blank" rel="noopener noreferrer">
    <AiOutlineWhatsApp className="hover:text-green-500 transition-colors duration-300 hover:scale-110" />
</a>

</div>

    </div>


    <div className="md:w-1/3 flex justify-center">
      <motion.div 
        className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:mt-0 md:h-96 md:w-96 shadow-lg hover:scale-105 transition-transform duration-300"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        viewport={{ amount: 0.2 }}
      >
        <Image src={saya} layout="fill" objectFit="cover" />
      </motion.div>
    </div>
  </motion.div>
        </motion.section>

 
        <motion.section 
          className="py-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
         <motion.h3 
  className="text-3xl py-1 dark:text-white mb-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ amount: 0.2 }}
>
  Skills
</motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:bg-teal-500 hover:text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-semibold dark:text-white">{skill.name}</p>
                <div className="w-full bg-gray-300 rounded-full h-5 mt-2 relative overflow-hidden">
                  <motion.div
                    className="bg-teal-500 h-5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  ></motion.div>
                  <motion.span
                    className="absolute right-2 top-0 text-sm font-bold text-gray-700 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">{skill.description}</p>
              </motion.div>
            ))}
          </div>
          
        </motion.section>
        <motion.section className="py-10">
        <motion.h3
    className="text-3xl py-1 dark:text-white mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    Projects
  </motion.h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <h4 className="text-xl font-semibold">{project.title}</h4>
          <p className="text-sm mt-2 text-center">{project.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


      </main>
      
    </div>
  );
}
