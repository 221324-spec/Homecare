import { motion } from 'framer-motion';
import { FaRunning, FaUserInjured, FaBrain, FaBone, FaHeartbeat, FaShieldAlt, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Physiotherapy = () => {
  const services = [
    {
      icon: FaBone,
      title: 'Musculoskeletal Rehab',
      description: 'Treatment for joint pain, muscle strains, sprains, and orthopedic conditions.'
    },
    {
      icon: FaUserInjured,
      title: 'Sports Injury Recovery',
      description: 'Specialized rehabilitation for athletes and sports-related injuries.'
    },
    {
      icon: FaBrain,
      title: 'Neurological Therapy',
      description: 'Rehabilitation for stroke recovery, Parkinson\'s, and neurological conditions.'
    },
    {
      icon: FaRunning,
      title: 'Post-Surgical Rehab',
      description: 'Accelerated recovery programs following orthopedic surgeries.'
    },
    {
      icon: FaHeartbeat,
      title: 'Chronic Pain Management',
      description: 'Evidence-based treatments for persistent pain conditions.'
    },
    {
      icon: FaShieldAlt,
      title: 'Geriatric Physiotherapy',
      description: 'Mobility improvement and fall prevention for seniors.'
    }
  ];

  const benefits = [
    'Convenient home-based treatment sessions',
    'Personalized rehabilitation programs',
    'Licensed and experienced physiotherapists',
    'State-of-the-art portable equipment',
    'Faster recovery in familiar environment',
    'Ongoing progress monitoring and adjustment'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-page">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Physiotherapy & Rehabilitation"
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
            <span className="text-teal-200 text-sm font-medium">Rehabilitation Services</span>
          </motion.div>
          
          <motion.div
            className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaRunning className="text-white text-3xl" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Physiotherapy & Rehabilitation
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional physiotherapy services delivered in the comfort of your home, helping you recover faster and regain mobility through personalized rehabilitation programs.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Physiotherapy Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert rehabilitation care using evidence-based techniques to restore function, reduce pain, and improve quality of life.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Who Can Benefit from Home Physiotherapy</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our physiotherapy services are designed for patients who need rehabilitation but prefer the convenience and comfort of home-based treatment.
              </p>
              <div className="space-y-3">
                {[
                  'Post-surgical patients requiring rehabilitation',
                  'Individuals with sports or work-related injuries',
                  'Patients with chronic pain conditions',
                  'Elderly individuals with mobility issues',
                  'Those recovering from strokes or neurological conditions',
                  'Athletes needing performance enhancement or injury recovery'
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
                  <FaRunning className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Evidence-Based Treatment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our licensed physiotherapists use the latest evidence-based techniques and portable equipment to provide effective rehabilitation in the comfort of your home.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Home Physiotherapy</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">Experience professional rehabilitation care that fits your lifestyle and accelerates your recovery.</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Standards & Safety</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your safety and comfort are our top priorities. All our physiotherapists are licensed professionals with extensive experience in home-based care.
              </p>
              <div className="space-y-3">
                {[
                  'Licensed and certified physiotherapists',
                  'Sterilized portable equipment',
                  'Comprehensive liability insurance',
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How Physiotherapy Sessions Work</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Initial Assessment', desc: 'Comprehensive evaluation of your condition, medical history, and functional abilities.' },
                  { step: '2', title: 'Personalized Treatment Plan', desc: 'Custom rehabilitation program designed specifically for your needs and goals.' },
                  { step: '3', title: 'Regular Therapy Sessions', desc: 'Consistent treatment with progress monitoring and program adjustments as needed.' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Recovery Journey?</h2>
            <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
              Book a comprehensive physiotherapy assessment today and take the first step towards improved mobility and pain relief in the comfort of your home.
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

export default Physiotherapy;