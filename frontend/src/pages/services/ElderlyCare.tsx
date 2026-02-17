import { motion } from 'framer-motion';
import { FaUserFriends, FaHeart, FaHandsHelping, FaWalking, FaUtensils, FaShieldAlt, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ElderlyCare = () => {
  const services = [
    {
      icon: FaHandsHelping,
      title: 'Daily Living Assistance',
      description: 'Help with bathing, dressing, grooming, and personal hygiene to maintain dignity and independence.'
    },
    {
      icon: FaHeart,
      title: 'Health Monitoring',
      description: 'Regular vital signs monitoring, medication management, and health condition tracking.'
    },
    {
      icon: FaUserFriends,
      title: 'Companionship',
      description: 'Social interaction, conversation, and emotional support to combat loneliness.'
    },
    {
      icon: FaWalking,
      title: 'Mobility Support',
      description: 'Assistance with walking, transfers, and fall prevention strategies.'
    },
    {
      icon: FaUtensils,
      title: 'Nutrition & Meals',
      description: 'Meal planning, preparation assistance, and nutritional guidance.'
    },
    {
      icon: FaShieldAlt,
      title: 'Safety & Security',
      description: 'Home safety assessments and emergency response coordination.'
    }
  ];

  const benefits = [
    'Personalized care plans tailored to individual needs',
    'Trained and compassionate caregivers',
    'Flexible scheduling options',
    'Family peace of mind',
    'Improved quality of life',
    'Professional healthcare coordination'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-page">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=2078&q=80"
            alt="Elderly Care & Support"
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
            <span className="text-teal-200 text-sm font-medium">Compassionate Care</span>
          </motion.div>
          
          <motion.div
            className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaUserFriends className="text-white text-3xl" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elderly Care & Support
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Compassionate, personalized care for seniors and patients, ensuring dignity, comfort, and quality of life in the familiar surroundings of home.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Elderly Care Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional care that respects dignity and promotes independence while ensuring safety and well-being.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Who Benefits from Our Elderly Care</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our elderly care services are designed for seniors who want to maintain their independence while receiving the support they need.
              </p>
              <div className="space-y-3">
                {[
                  'Seniors living alone who need daily assistance',
                  'Elderly individuals recovering from illness or surgery',
                  'Those with mobility limitations or chronic conditions',
                  'Patients requiring medication management',
                  'Individuals needing companionship and social interaction',
                  'Families seeking professional care for aging loved ones'
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
                  <FaHeart className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Compassionate Care Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our caregivers treat every individual with respect, dignity, and genuine care. We understand that each person has unique needs and preferences, and we tailor our services accordingly.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Elderly Care Services</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">Experience professional care that enhances quality of life and provides peace of mind.</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Safety & Trust Standards</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your safety and security are our highest priorities. All our caregivers undergo comprehensive background checks and training.
              </p>
              <div className="space-y-3">
                {[
                  'Thorough background verification',
                  'CPR and first aid certification',
                  'Ongoing training and supervision',
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How Our Care Services Work</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Initial Assessment', desc: 'We evaluate your needs and create a personalized care plan.' },
                  { step: '2', title: 'Caregiver Matching', desc: 'We match you with a compatible caregiver who meets your requirements.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Provide Quality Care for Your Loved One?</h2>
            <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss care needs and arrange a complimentary assessment. Let us help you find the perfect care solution for your family.
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

export default ElderlyCare;