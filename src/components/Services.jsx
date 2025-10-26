import { FaFacebook, FaInstagram, FaTelegram, FaYoutube, FaTiktok } from "react-icons/fa6";

const serviceCategories = [
  {
    title: "Telegram Services",
    icon: <FaTelegram />,
    items: [
      { name: "Channel Subscribers", price: "1K - 8000 MMK", warranty: "90 days warranty" },
      { name: "Group Subscribers", price: "1K - 8000 MMK", warranty: "90 days warranty" },
      { name: "Poll Vote", price: "1K - 2500 MMK" },
      { name: "React", price: "1K - 800 MMK" },
      { name: "View", price: "1K - 300 MMK" },
    ],
  },
  {
    title: "YouTube Services",
    icon: <FaYoutube />,
    items: [
      { name: "Subscribers", price: "1K - 40000 MMK", warranty: "Lifetime warranty" },
      { name: "Like", price: "1K - 3000 MMK" },
      { name: "View", price: "1K - 15000 MMK" },
      { name: "Monetization Views", price: "Custom MMK" },
    ],
  },
  {
    title: "Facebook Services",
    icon: <FaFacebook />,
    items: [
      { name: "Page Followers", price: "1K - 6500 MMK" },
      { name: "Account Followers", price: "1K - 6500 MMK" },
      { name: "Post Share", price: "1K - 11000 MMK" },
      { name: "React", price: "1K - 1500 MMK" },
      { name: "Video Views", price: "1K - 1000 MMK" },
    ],
  },
  {
    title: "Instagram Services",
    icon: <FaInstagram />,
    items: [
      { name: "Followers", price: "1K - 35000 MMK" },
      { name: "Like", price: "1K - 6000 MMK" },
      { name: "View", price: "1K - 2000 MMK" },
    ],
  },
  {
    title: "TikTok Services",
    icon: <FaTiktok />,
    items: [
      { name: "Like", price: "1K - 4500 MMK" },
      { name: "Followers", price: "1K - 20000 MMK" },
      { name: "View", price: "10K - 1500 MMK" },
    ],
  },
];

const Services = () => (
  <section id="services" className="w-full bg-black text-white py-20 px-6 sm:px-10 lg:px-20">
    <div className="max-w-6xl mx-auto text-center mb-16">
      <h2 className="retro-title text-4xl sm:text-5xl font-bold text-yellow-300 drop-shadow-[0_0_15px_#FFD700]">
        Our Services
      </h2>
      <p className="retro-font mt-3 text-lg text-gray-300">
        Choose your platform and boost your social presence with our premium MMK services.
      </p>
    </div>

    <div className="max-w-6xl mx-auto space-y-16">
      {serviceCategories.map((category, idx) => (
        <div key={idx}>
          <h3 className="text-3xl font-bold text-yellow-300 flex items-center gap-2 mb-8">
            <span className="text-4xl">{category.icon}</span> {category.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl font-bold text-yellow-300 mb-2">{item.name}</h4>
                <p className="text-gray-300 mb-2">{item.price}</p>
                {item.warranty && (
                  <p className="text-green-400 font-semibold text-sm mb-4">{item.warranty}</p>
                )}
                <a
                  href="https://t.me/KaungKaungBoost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-300 text-black font-bold py-2 rounded-xl retro-font hover:bg-yellow-400 transition-colors duration-300 text-center"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);




export default Services;
