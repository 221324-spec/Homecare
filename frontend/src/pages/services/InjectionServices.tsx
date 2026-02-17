import { motion } from 'framer-motion';
import { FaSyringe, FaShieldAlt, FaUserMd, FaClock, FaCheckCircle, FaHeartbeat, FaMedkit, FaStethoscope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InjectionServices = () => {
  const services = [
    {
      icon: FaSyringe,
      title: 'Insulin Injections',
      description: 'Safe administration of insulin for diabetes management with proper dosage and technique.'
    },
    {
      icon: FaMedkit,
      title: 'Antibiotic Injections',
      description: 'Intramuscular and intravenous antibiotic administration for infection treatment.'
    },
    {
      icon: FaHeartbeat,
      title: 'Hormone Therapy',
      description: 'Hormone replacement therapy injections administered by certified professionals.'
    },
    {
      icon: FaShieldAlt,
      title: 'Vitamin Supplements',
      description: 'Vitamin B12, iron, and other essential vitamin injections for deficiency treatment.'
    },
    {
      icon: FaStethoscope,
      title: 'Pain Management',
      description: 'Pain relief injections including corticosteroids and analgesics.'
    },
    {
      icon: FaUserMd,
      title: 'Vaccinations',
      description: 'Routine vaccinations and immunizations administered in the comfort of your home.'
    }
  ];

  const benefits = [
    'Sterile and safe injection administration',
    'Convenient home-based service',
    'Certified healthcare professionals',
    'Proper waste disposal and safety protocols',
    'Patient education and aftercare',
    'Flexible scheduling options'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-page">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
            alt="Injection Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-teal-800/90 to-teal-700/85"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            <span className="text-teal-200 text-sm font-medium">Medical Services</span>
          </motion.div>
          
          <motion.div
            className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaSyringe className="text-white text-3xl" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Injection Services
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Safe, hygienic, and professional injection administration in the comfort of your home.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Injection Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional administration of all types of injections with the highest standards of safety and care.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="card bg-white group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Who It's For</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Who Benefits from Home Injection Services</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our injection services are designed for patients who require regular injections but prefer the convenience and comfort of home-based care.
              </p>
              <div className="space-y-3">
                {[
                  'Diabetic patients requiring insulin injections',
                  'Patients undergoing antibiotic treatment',
                  'Individuals on hormone replacement therapy',
                  'Elderly patients with mobility challenges',
                  'Those requiring vitamin supplementation',
                  'Patients needing pain management injections'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card bg-gradient-to-br from-teal-50 to-teal-100/50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Sterile & Safe Environment</h3>
                <p className="text-gray-600 leading-relaxed">
                  All injections are administered using sterile equipment and following strict aseptic protocols. Our nurses are trained in the latest injection techniques and safety standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="container">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Injection Services</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">Experience professional healthcare with the convenience of home-based services.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-200 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Process */}
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
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Safety & Sterility Standards</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your safety is our highest priority. We follow CDC guidelines and maintain the strictest standards of infection control.
              </p>
              <div className="space-y-3">
                {[
                  'Sterile single-use equipment',
                  'Personal protective equipment',
                  'Proper sharps disposal',
                  'Emergency response protocols'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <FaCheckCircle className="text-teal-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card bg-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <FaClock className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How the Service Works</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Prescription Review', desc: 'We verify your prescription and discuss your specific needs.' },
                  { step: '2', title: 'Home Visit', desc: 'Our nurse arrives with all necessary sterile supplies and medications.' },
                  { step: '3', title: 'Safe Administration', desc: 'Injection administered using proper technique and aftercare provided.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Schedule Your Injection Service?</h2>
            <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your injection needs and schedule a convenient home visit with our certified healthcare professionals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Get Started
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InjectionServices;