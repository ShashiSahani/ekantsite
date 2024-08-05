
const AboutUs = () => {
  const content = "SOLUTIONS THAT WORK. We are a team of qualified and hardworking professionals with over 20 years of experience, mostly in Germany, creating a niche of our own in the Indian IT industry. A technical and analytical background enables us to provide you with tailor made IT solutions. We may not be the best yet, but yes, we are constantly striving to be better.";

  return (
    <div>
      <header className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10">
        <section className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            {content}
          </p>
          <button className="hero-btn bg-red-600 text-white border-2 border-white/15 py-2 px-4 rounded hover:bg-red-700">
            READ MORE
          </button>
        </section>
        <section className="bg-red-600 text-white py-10 mt-10 text-center">
          <h2 className="text-2xl mb-4">DROP US A LINE</h2>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
