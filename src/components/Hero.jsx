const Hero = () => {
  return (
    <section id="home" className="w-full px-4 sm:px-6 lg:px-8 py-20 mt-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="retro-title text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-yellow-300 retro-glow animate-pulse">
          🇲🇲 Booster King
        </h1>
        <h2 className="retro-font text-2xl sm:text-3xl lg:text-4xl mb-8 text-cyan-300">
          မြန်မာနိုင်ငံ၏ အကောင်းဆုံး Social Media Boosting Service
        </h2>
        <p className="retro-font text-lg sm:text-xl lg:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          တာဝန်ယူမှုအပြည့်နဲ့ 24 နာရီ ဝန်ဆောင်မှု - အမြန်ဆုံးနှင့်
          ယုံကြည်စိတ်ချရသော Social Media Boosting ဝန်ဆောင်မှု
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="retro-card p-6 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="retro-font text-xl font-bold mb-2 text-yellow-300">
              အမြန်ဆုံး Service
            </h3>
            <p className="retro-font text-gray-300">
              Order တင်ပြီးတာနဲ့ ပြန်လှည့်ကြည့်စရာမလိုဘူး
            </p>
          </div>
          <div className="retro-card p-6 text-center">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="retro-font text-xl font-bold mb-2 text-yellow-300">
              100% တာဝန်ယူမှု
            </h3>
            <p className="retro-font text-gray-300">
              လုံးဝ error ကင်းတယ် - တာဝန်ခံမှု
            </p>
          </div>
          <div className="retro-card p-6 text-center">
            <div className="text-3xl mb-4">💲</div>
            <h3 className="retro-font text-xl font-bold mb-2 text-yellow-300">
              စျေးတန်သော Service
            </h3>
            <p className="retro-font text-gray-300">
              မှန်ကန်ပြီး စျေးတန်သည့် Service စျေးနှုန်း
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
