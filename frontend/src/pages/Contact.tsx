import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUserMd, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: 'Home Nursing Care',
    patientCondition: '',
    location: '',
    preferredTime: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('Booking request submitted successfully!');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          serviceRequired: 'Home Nursing Care',
          patientCondition: '',
          location: '',
          preferredTime: ''
        });
      } else {
        setSubmitStatus('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Error submitting booking. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 234 567 890', 'Emergency: 911']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@doctorandoor.com', 'support@doctorandoor.com']
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Service Area',
      details: ['City-wide coverage', 'Surrounding areas available']
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: ['24/7 Emergency Care', '8 AM - 8 PM Daily']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-page">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80"></div>
        <div className="relative container text-center">
          <motion.span
            className="badge mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Get in touch with our healthcare professionals. We're here to provide the care you need, when you need it.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  className="card bg-white text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="icon-box icon-box-lg bg-teal-100 text-teal-600 mx-auto mb-4 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Book Service</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-8">Request DoctorOnDoor Service</h2>
              <form onSubmit={handleSubmit} className="card bg-white space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="serviceRequired" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option>Home Nursing Care</option>
                    <option>Injection Services</option>
                    <option>Elderly & Patient Care</option>
                    <option>Physiotherapy at Home</option>
                    <option>Patient Sampling & Lab Tests</option>
                    <option>Regular Health Checkups</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="patientCondition" className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Condition
                  </label>
                  <textarea
                    id="patientCondition"
                    name="patientCondition"
                    value={formData.patientCondition}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none"
                    placeholder="Please describe the patient's condition and specific care needs..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your address"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="datetime-local"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Request DoctorOnDoor Service
                </button>
                {submitStatus && (
                  <p className={`mt-4 text-center font-medium ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitStatus}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Emergency Contact & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Emergency Contact */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="icon-box icon-box-lg bg-white/20 text-white mr-4">
                      <FaUserMd className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold">Emergency Care</h3>
                  </div>
                  <p className="text-red-100 mb-6">
                    For medical emergencies, please call 911 immediately. For urgent healthcare needs outside regular hours, contact our emergency line.
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors duration-300"
                  >
                    <FaPhone className="mr-2" />
                    Emergency: +1 234 567 890
                  </a>
                </div>

                {/* Service Information */}
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="icon-box icon-box-lg bg-white/20 text-white mr-4">
                      <FaCalendarAlt className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold">Quick Response</h3>
                  </div>
                  <p className="text-teal-100 mb-6">
                    We typically respond to service requests within 2-4 hours during business hours. Emergency services are available 24/7.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-teal-200 mr-3" />
                      <span className="text-teal-50">Licensed healthcare professionals</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-teal-200 mr-3" />
                      <span className="text-teal-50">Fully insured services</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-teal-200 mr-3" />
                      <span className="text-teal-50">Quality guaranteed care</span>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="card bg-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose DoctorOnDoor?</h3>
                  <div className="space-y-4">
                    {[
                      'Experienced and certified healthcare professionals',
                      'Personalized care plans tailored to your needs',
                      'Convenient home-based services',
                      '24/7 emergency support available'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-3 mt-0.5">
                          <FaCheckCircle className="text-sm" />
                        </div>
                        <p className="text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Location</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Visit Our Office</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Located in the heart of the city, our modern office facility is equipped with the latest healthcare coordination technology. Our administrative team is ready to assist you with scheduling, insurance questions, and any other healthcare needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-gray-700">123 Healthcare Avenue, Medical District</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-4">
                    <FaClock />
                  </div>
                  <span className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-box icon-box-sm bg-teal-100 text-teal-600 mr-4">
                    <FaPhone />
                  </div>
                  <span className="text-gray-700">+1 234 567 890 (Main Office)</span>
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
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="DoctorOnDoor Office Facility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our home healthcare services.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'How quickly can I get home healthcare services?',
                answer: 'We typically schedule initial assessments within 24-48 hours of your call. Emergency and urgent care services are available 24/7.'
              },
              {
                question: 'Do you accept insurance?',
                answer: 'Yes, we accept most major insurance plans including Medicare, Medicaid, and private insurance. Our billing team will help verify your coverage.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'We provide services throughout the city and surrounding areas. Contact us to confirm service availability in your location.'
              },
              {
                question: 'Can I choose my healthcare provider?',
                answer: 'Whenever possible, we accommodate patient preferences for specific healthcare providers based on availability and qualifications.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;