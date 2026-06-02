function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col justify-center items-center p-6">

      <h1 className="text-6xl font-bold text-center mb-4">
        🚀QSkill Project
      </h1>

      <p className="text-2xl text-gray-700 text-center">
        React • Tailwind CSS • RapidAPI
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">

        <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
          <h2 className="text-3xl font-bold mb-4">
            Translator App
          </h2>

          <p className="text-gray-600">
            Translate English text into Hindi,
            Tamil, Telugu, Kannada and French.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
          <h2 className="text-3xl font-bold mb-4">
            Random String Generator
          </h2>

          <p className="text-gray-600">
            Generate random secure strings and
            copy them instantly.
          </p>
        </div>

      </div>

      <p className="mt-16 text-gray-500">
        Built using React + Tailwind CSS
      </p>
    </div>
  );
}

export default Home;