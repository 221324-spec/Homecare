import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaClock, FaShieldAlt, FaCheckCircle, FaStethoscope, FaSyringe, FaClipboardList, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeNursing = () => {
  const services = [
    {
      icon: FaStethoscope,
      title: 'Vital Signs Monitoring',
      description: 'Regular monitoring of blood pressure, heart rate, temperature, and oxygen levels.'
    },
    {
      icon: FaSyringe,
      title: 'Medication Management',
      description: 'Safe administration of medications and management of complex drug regimens.'
    },
    {
      icon: FaClipboardList,
      title: 'Wound Care',
      description: 'Professional wound dressing, assessment, and treatment to promote healing.'
    },
    {
      icon: FaHeartbeat,
      title: 'IV Therapy',
      description: 'Intravenous therapy, catheter care, and infusion management.'
    },
    {
      icon: FaUserMd,
      title: 'Patient Education',
      description: 'Teaching patients and families about health conditions and self-care.'
    },
    {
      icon: FaShieldAlt,
      title: 'Care Coordination',
      description: 'Coordinating with physicians and other healthcare providers for comprehensive care.'
    }
  ];

  const benefits = [
    'Convenient care in your own home',
    'Personalized attention from certified nurses',
    'Reduced risk of hospital-acquired infections',
    'Family involvement in care decisions',
    'Cost-effective compared to hospital stays',
    'Emotional support and companionship'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-page">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Home Nursing Services"
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
            <span className="text-teal-200 text-sm font-medium">Professional Healthcare</span>
          </motion.div>
          
          <motion.div
            className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaHeartbeat className="text-white text-3xl" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Home Nursing Services
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional nursing services delivered in the comfort of your home, ensuring personalized care and faster recovery.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Nursing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our certified nurses provide a wide range of professional healthcare services tailored to your needs.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Who Benefits from Home Nursing Care</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Home nursing care is ideal for patients who need professional medical attention but prefer the comfort and familiarity of their own home environment.
              </p>
              <div className="space-y-3">
                {[
                  'Elderly patients requiring regular monitoring',
                  'Post-surgical patients needing wound care',
                  'Individuals with chronic conditions',
                  'Patients managing complex medication regimens',
                  'Those requiring palliative or end-of-life care',
                  'Family caregivers needing professional support'
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
                  <FaUserMd className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Certified Professional Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our nurses are licensed, experienced professionals with specialized training in home healthcare. They bring compassion, expertise, and dedication to every patient interaction.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Home Nursing Care</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">Experience healthcare that prioritizes your comfort, convenience, and well-being.</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Safety & Hygiene Standards</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your safety is our top priority. All our nurses follow strict hygiene protocols and infection control measures.
              </p>
              <div className="space-y-3">
                {[
                  'Comprehensive hand hygiene protocols',
                  'Personal protective equipment usage',
                  'Proper medical waste disposal',
                  'Regular equipment sterilization'
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
                  { step: '1', title: 'Initial Assessment', desc: 'We evaluate your needs and create a personalized care plan.' },
                  { step: '2', title: 'Care Planning', desc: 'Our team coordinates with your healthcare providers.' },
                  { step: '3', title: 'Ongoing Care', desc: 'Regular visits with continuous monitoring and adjustment.' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Quality Home Nursing Care?</h2>
            <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
              Contact us today to schedule your initial assessment and discover how our professional nursing services can improve your quality of life.
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

export default HomeNursing;