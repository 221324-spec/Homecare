import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHeartbeat,
  FaSyringe,
  FaUserMd,
  FaRunning,
  FaFlask,
  FaStethoscope,
  FaArrowRight,
  FaPhone,
  FaCheckCircle
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      name: 'Home Nursing Care',
      desc: 'Comprehensive nursing services at your doorstep with certified professionals. From wound care to medication management.',
      icon: FaHeartbeat,
      link: '/services/home-nursing',
      color: 'from-teal-500 to-teal-600',
      features: ['24/7 availability', 'Certified nurses', 'Personalized care']
    },
    {
      name: 'Injection Services',
      desc: 'Safe and hygienic injection administration by trained medical staff in the comfort of your home.',
      icon: FaSyringe,
      link: '/services/injection-services',
      color: 'from-blue-500 to-blue-600',
      features: ['IV therapy', 'Vaccinations', 'Medication injections']
    },
    {
      name: 'Elderly & Patient Care',
      desc: 'Dedicated care for seniors and patients with personalized attention and compassionate support.',
      icon: FaUserMd,
      link: '/services/elderly-care',
      color: 'from-purple-500 to-purple-600',
      features: ['Daily assistance', 'Companionship', 'Health monitoring']
    },
    {
      name: 'Physiotherapy at Home',
      desc: 'Professional physiotherapy sessions tailored to your recovery needs and rehabilitation goals.',
      icon: FaRunning,
      link: '/services/physiotherapy',
      color: 'from-orange-500 to-orange-600',
      features: ['Post-surgery rehab', 'Pain management', 'Mobility training']
    },
    {
      name: 'Patient Sampling & Lab Tests',
      desc: 'Convenient lab tests and sampling services without leaving home. Quick and accurate results.',
      icon: FaFlask,
      link: '/services/patient-sampling',
      color: 'from-cyan-500 to-cyan-600',
      features: ['Blood tests', 'Urine analysis', 'Home sample collection']
    },
    {
      name: 'Regular Health Checkups',
      desc: 'Routine health monitoring and comprehensive checkups to keep you and your family healthy.',
      icon: FaStethoscope,
      link: '/services/health-checkups',
      color: 'from-pink-500 to-pink-600',
      features: ['Vital signs', 'Health screening', 'Preventive care']
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-page">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80" 
            alt="Healthcare services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        </div>
        
        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                Professional Healthcare
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Quality Care,<br />
                <span className="text-teal-400">Right at Home</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Experience comprehensive medical care delivered by certified professionals in the comfort of your home. We bring the hospital to you.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-teal-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">6+ Services</p>
                    <p className="text-gray-400 text-sm">Comprehensive care</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <FaUserMd className="text-teal-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Expert Team</p>
                    <p className="text-gray-400 text-sm">Certified professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Service Quick Cards */}
            <motion.div
              className="hidden lg:grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.slice(0, 4).map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={index}
                    to={service.link}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/20 transition-all group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-3`}>
                      <IconComponent className="text-white text-lg" />
                    </div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-teal-300 transition-colors">{service.name}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{service.desc.substring(0, 60)}...</p>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="badge mb-4">What We Offer</span>
            <h2 className="text-gray-900 mb-4">Comprehensive Care Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is designed to provide the highest quality healthcare with convenience and compassion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="card group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`icon-box icon-box-primary mb-6 bg-gradient-to-br ${service.color}`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="text-teal-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 group/link"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">Ready to Experience Quality Care?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your healthcare needs and find the perfect service for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-white">
                Get Started Today
              </Link>
              <a href="tel:+1234567890" className="btn btn-outline-white">
                <FaPhone />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;