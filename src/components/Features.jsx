import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "အမြန်ဆုံး Delivery",
      description: "Order တိုင်းက မြန်ဆန်ပြီး စိတ်ကျေနပ်မှုရှိစေရမယ်"
    },
    {
      icon: "🛡️",
      title: "လုံခြုံမှု အပြည့်အဝ",
      description: "100% တာဝန်ယူမှု၊ တာဝန်ခံမှု - လုံခြုံစွာ ဝန်ဆောင်မှုပေးခြင်း"
    },
    {
      icon: "👑",
      title: "Reseller Program",
      description: "Resellers များတွက် အကောင်းဆုံး ပြုလုပ်ပေးပါမည်"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Premium quality service - အသစ်အဆန်းနှင့် အကောင်းဆုံး"
    },
    {
      icon: "⚡",
      title: "24/7 Support",
      description: "တာဝန်ယူမှုအပြည့်နဲ့ 24 နာရီ ဝန်ဆောင်မှု"
    },
    {
      icon: "🎯",
      title: "Targeted Service",
      description: "မှန်ကန်ပြီး စျေးတန်သည့် Service စျေးနှုန်း"
    }
  ];

  return (
    <section id="features" className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-black bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="retro-title text-4xl sm:text-5xl font-bold text-center mb-16 text-yellow-300 retro-glow">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="retro-card p-8 hover:scale-105 transform transition-all duration-300 hover:retro-glow">
              <div className="text-5xl mb-6 text-center">{feature.icon}</div>
              <h3 className="retro-font text-2xl font-bold mb-4 text-yellow-300 text-center">
                {feature.title}
              </h3>
              <p className="retro-font text-gray-300 text-center text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;