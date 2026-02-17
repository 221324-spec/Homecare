import { motion } from 'framer-motion';
import { FaHeart, FaEye, FaShieldAlt, FaUsers, FaAward, FaClock, FaCheckCircle, FaArrowRight, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: 'Compassionate Care',
      description: 'Every patient is treated with dignity, respect, and genuine empathy by our dedicated healthcare professionals.'
    },
    {
      icon: FaShieldAlt,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of medical care using evidence-based practices and cutting-edge healthcare technologies.'
    },
    {
      icon: FaUsers,
      title: 'Patient-Centered Approach',
      description: 'Our services are tailored to meet the unique needs of each individual, ensuring personalized care plans.'
    },
    {
      icon: FaAward,
      title: 'Trusted & Reliable',
      description: 'With years of experience and proven success, DoctorOnDoor has become the trusted choice for home healthcare.'
    },
    {
      icon: FaClock,
      title: '24/7 Availability',
      description: 'Round-the-clock support ensures you receive care whenever you need it, including emergency services.'
    },
    {
      icon: FaEye,
      title: 'Quality Assurance',
      description: 'Continuous quality improvement and patient satisfaction monitoring guarantee exceptional service delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-page">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80"></div>
        <div className="relative container text-center">
          <motion.span
            className="badge mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted Since 2019
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About DoctorOnDoor
          </motion.h1>
          <motion.p
            className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Leading the way in compassionate, professional home healthcare services with over 5 years of excellence.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="card bg-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="icon-box icon-box-lg bg-teal-500 text-white mb-6">
                <FaHeart className="text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At DoctorOnDoor, our mission is to provide compassionate, professional, and accessible healthcare services in the comfort of your home. We believe that quality healthcare should be convenient and personalized, ensuring that every patient receives the care they deserve without the stress of hospital visits.
              </p>
            </motion.div>

            <motion.div
              className="card bg-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-box icon-box-lg bg-teal-500 text-white mb-6">
                <FaEye className="text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of home-based healthcare services, setting the standard for compassionate and professional care. We envision a world where healthcare is not just about treatment, but about empowering patients to live healthier, more comfortable lives in their own homes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Why Choose DoctorOnDoor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our commitment to excellence is reflected in every aspect of our service delivery.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="card bg-white group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="icon-box bg-teal-100 text-teal-600 mb-4 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Meet Our Expert Team</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our dedicated healthcare professionals bring years of experience and compassion to every patient interaction. From registered nurses to specialized therapists, our team is committed to providing exceptional care in the comfort of your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-4">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-700">Licensed and certified healthcare professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-4">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-700">Continuous training and professional development</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-4">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-700">Patient-centered care with genuine compassion</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="DoctorOnDoor Professional Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-teal-500 text-white">
                    <FaAward />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">20+</p>
                    <p className="text-sm text-gray-500">Certified Nurses and Caregivers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">Numbers that reflect our commitment to quality healthcare.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years of Service' },
              { number: '100+', label: 'Patients Served' },
              { number: '20+', label: 'Healthcare Professionals' },
              { number: '99%', label: 'Patient Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-teal-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="section">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Commitment to You</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              DoctorOnDoor is committed to excellence in every aspect of our service. From the moment you contact us to the completion of your care, we prioritize your safety, comfort, and satisfaction. Our goal is not just to provide medical services, but to build lasting relationships based on trust and mutual respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                Contact Us Today
                <FaArrowRight />
              </Link>
              <a
                href="tel:+1234567890"
                className="btn btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;