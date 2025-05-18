import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  FireIcon,              // changed from LeafIcon
  UsersIcon,
  SparklesIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import RossJamesImg from "../assets/ross-james.jpg";
import DeependraMehtaImg from "../assets/deependra-mehta.jpg";
import AnimatedCounter from './ui/AnimatedCounter';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    title: "Innovation",
    description: "Leading with breakthrough technology and creative solutions.",
    icon: <LightBulbIcon className="h-6 w-6" />,
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
  },
  {
    title: "Sustainability",
    description: "Environmental impact is central to every decision we make.",
    icon: <GlobeAltIcon className="h-6 w-6" />,
  },
  {
    title: "Collaboration",
    description: "Working with farmers, scientists, and industry leaders.",
    icon: <HandThumbUpIcon className="h-6 w-6" />,
  },
];

const stats = [
  {
    title: "CO₂ Saved",
    value: 25000,
    suffix: " tons",
    description: "Annually reduced emissions through clean fuels.",
    icon: <FireIcon className="h-8 w-8 text-green-600" />, // replaced LeafIcon
  },
  {
    title: "Partners Worldwide",
    value: 75,
    suffix: "",
    description: "Global network of collaborators and clients.",
    icon: <UsersIcon className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Patents Filed",
    value: 12,
    suffix: "",
    description: "Technologies developed in sustainable fuel innovation.",
    icon: <SparklesIcon className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Facilities Built",
    value: 5,
    suffix: "",
    description: "Strategic locations for efficient biofuel production.",
    icon: <BuildingOffice2Icon className="h-8 w-8 text-green-600" />,
  },
];

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Agri-BioFuels Global
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the renewable energy sector by creating sustainable aviation and maritime fuels from agricultural waste.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Agri-BioFuels facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-2xl font-bold">Est. 2020</p>
              <p className="text-sm">Leading the Green Revolution</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2020 by Ross James and Deependra Mehta, Agri-BioFuels Global emerged from a shared vision to transform agricultural waste into sustainable aviation fuel. Our journey began with a groundbreaking partnership with Licella, whose CAT-HTR technology formed the foundation of our innovative approach.
            </p>
            <p className="text-gray-600">
              Today, we're at the forefront of the sustainable fuel revolution, working with farmers, airlines, and shipping companies to create a cleaner future for transportation while empowering agricultural communities worldwide.
            </p>
          </motion.div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Leadership Team
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{ name: "Ross James", role: "Founder & CEO", bio: "With over 20 years in renewable energy, Ross leads our mission to revolutionize sustainable fuel production.", image: RossJamesImg },
              { name: "Deependra Mehta", role: "Co-Founder & CTO", bio: "A pioneer in biomass conversion technology, Deependra drives our technical innovation and process optimization.", image: DeependraMehtaImg }]
              .map((person, idx) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800">{person.name}</h4>
                    <p className="text-green-600 mb-4">{person.role}</p>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Our Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{stat.title}</h3>
              <div className="text-3xl font-bold text-center text-gray-900 mb-3">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2000}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix}
              </div>
              <p className="text-sm text-gray-600 text-center">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
