import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeartbeat, FaArrowRight, FaClock, FaShieldAlt, FaUserMd } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Need Healthcare at Home?</h3>
              <p className="text-teal-100">Get in touch with us for professional medical care.</p>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold px-8 py-3 rounded-full hover:bg-teal-50 transition-all hover:shadow-lg"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-gray-800">
            {[
              { icon: FaClock, title: '24/7 Available', desc: 'Round the clock healthcare support' },
              { icon: FaShieldAlt, title: 'Licensed & Certified', desc: 'All professionals are verified' },
              { icon: FaUserMd, title: 'Expert Care Team', desc: 'Experienced medical professionals' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-teal-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                  <FaHeartbeat className="text-white text-lg" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">DoctorOnDoor</span>
                  <p className="text-teal-400 text-xs">Healthcare Services</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Bringing professional healthcare services to your doorstep with compassion and expertise.
              </p>
              <div className="flex items-center gap-2">
                {[
                  { icon: FaFacebookF, color: 'hover:bg-blue-600' },
                  { icon: FaTwitter, color: 'hover:bg-sky-500' },
                  { icon: FaInstagram, color: 'hover:bg-pink-600' },
                  { icon: FaLinkedinIn, color: 'hover:bg-blue-700' },
                ].map(({ icon: Icon, color }, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-10 h-10 bg-gray-800/80 text-gray-400 rounded-xl flex items-center justify-center hover:text-white ${color} transition-all duration-300`}
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'Our Services' },
                  { to: '/about', label: 'About Us' },
                  { to: '/contact', label: 'Contact Us' },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  { to: '/services/home-nursing', label: 'Home Nursing' },
                  { to: '/services/elderly-care', label: 'Elderly Care' },
                  { to: '/services/physiotherapy', label: 'Physiotherapy' },
                  { to: '/services/health-checkups', label: 'Health Checkups' },
                  { to: '/services/injection-services', label: 'Injection Services' },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800/80 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <FaPhone className="text-teal-400 text-sm" />
                  </div>
                  <span className="text-sm">03462239579</span>
                </a>
                <a href="mailto:info@doctorandoor.com" className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800/80 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <FaEnvelope className="text-teal-400 text-sm" />
                  </div>
                  <span className="text-sm">info@doctorondoor.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-gray-800/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-teal-400 text-sm" />
                  </div>
                  <span className="text-sm pt-2">Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DoctorOnDoor. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link to="#" className="text-gray-500 hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-gray-500 hover:text-teal-400 transition-colors">Terms of Service</Link>
              <Link to="#" className="text-gray-500 hover:text-teal-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;