import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "ကိုအောင်ဇော်ထက်",
      text: "Booster King ကို သုံးပြီးတဲ့နောက် ကျွန်တော့် Page က အရမ်းကောင်းလာတယ်။ Service က အရမ်းမြန်တယ်။ အရမ်းကြိုက်တယ်!",
      rating: 5
    },
    {
      name: "မမြတ်သူစံ",
      text: "Customer service က အရမ်းကောင်းတယ်။ 24 နာရီလုံးလုံး အကူအညီတောင်းလို့ရတယ်။ အရမ်းယုံကြည်စိတ်ချရတယ်။",
      rating: 5
    },
    {
      name: "ကိုသန်းအောင်",
      text: "Reseller အနေနဲ့သုံးတာ တစ်နှစ်ကျော်ပြီ။ Error တစ်ခုမှမရှိသေးဘူး။ Payment system ကလည်း တိတိကျကျပါပဲ။",
      rating: 5
    },
    {
      name: "မနုသူဇင်",
      text: "Website design က အရမ်းလှတယ်။ Order တင်ရတာလွယ်တယ်။ Result တွေက အရမ်းကောင်းတယ်။ Highly recommend!",
      rating: 5
    },
    {
      name: "ကိုအောင်မင်းစိုး",
      text: "အရင်က website တွေနဲ့မတူ Booster King က တကယ်ကို တာဝန်ယူမှုရှိတယ်။ တစ်ခုခုမှားယွင်းခဲ့ရင် ပြန်ပေးပါတယ်။",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-black bg-opacity-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="retro-title text-4xl sm:text-5xl font-bold text-center mb-16 text-yellow-300 retro-glow">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="retro-card p-6 hover:scale-105 transform transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="retro-font text-gray-300 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="retro-font text-yellow-300 font-bold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;