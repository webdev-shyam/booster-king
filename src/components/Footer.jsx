import { FaFacebook, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-black bg-opacity-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="retro-title text-2xl font-bold mb-4 text-yellow-300">
              Booster King
            </h3>
            <p className="retro-font text-gray-300 leading-relaxed">
              မြန်မာနိုင်ငံ၏ အကောင်းဆုံး Social Media Boosting Service
            </p>

            <div className="flex justify-center items-center gap-[2rem]">
              <a target="_blank"
                href="
https://www.facebook.com/mgkaungkhantlwin19?mibextid=ZbWKwL"
              >
                <FaFacebook className="text-3xl hover:text-blue-300" />
              </a>
              <a target="_blank" href="https://t.me/KaungKaungBoost">
                <FaTelegram className="text-3xl hover:text-blue-300" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="retro-font text-xl font-bold mb-4 text-yellow-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="retro-font text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="retro-font text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="retro-font text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="retro-font text-xl font-bold mb-4 text-yellow-300">
              Contact Info
            </h4>
            <p className="retro-font text-gray-300 mb-2">
              📧 kaungkhantlwin2900@gmail.com
            </p>
            <p className="retro-font text-gray-300 mb-2">📱 +95 9427857123</p>
            <p className="retro-font text-gray-300">
              🕐 24/7 Support Available
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="retro-font text-gray-400">
            © 2025 Booster King. All rights reserved. | မြန်မာနိုင်ငံ၏
            အကောင်းဆုံး Social Media Boosting Service
          </p>
        </div>
      </div>
      <div className="flex justify-end items-center">

      <h4 className="text-gray-500">Designed & Developed by <span className="italic m-2 text-cyan-400">Htet Myo Win</span></h4>
      </div> 
    </footer>
  );
};

export default Footer;
