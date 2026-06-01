import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!text.trim()) return;

    setLoading(true);

    const url =
      `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=en&to=${language}&query=${encodeURIComponent(text)}`;

    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key":
          "a53b1bf6bamsh5fdd1da310ff2d0p1d218ajsna1d65dc360a0",
        "x-rapidapi-host":
          "free-google-translator.p.rapidapi.com",
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        translate: text,
      }),
    };

    try {
      const response =
        await fetch(url, options);

      const data =
        await response.json();

      setTranslated(data.translation);
    } catch {
      setTranslated(
        "Translation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyTranslation = () => {
    navigator.clipboard.writeText(
      translated
    );

    alert("Copied!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl">

        <h1 className="text-5xl font-bold mb-8 text-center">
          🌍 Translator App
        </h1>

        <textarea
          rows="6"
          placeholder="Enter English Text"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          className="w-full border-2 border-gray-300 p-4 rounded-xl"
        />

        <select
          value={language}
          onChange={(e) =>
            setLanguage(
              e.target.value
            )
          }
          className="border p-3 rounded-xl mt-5"
        >
          <option value="hi">
            Hindi
          </option>

          <option value="ta">
            Tamil
          </option>

          <option value="te">
            Telugu
          </option>

          <option value="kn">
            Kannada
          </option>

          <option value="fr">
            French
          </option>
        </select>

        <br />

        <button
          onClick={translateText}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl mt-5"
        >
          {loading
            ? "Translating..."
            : "Translate"}
        </button>

        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Translated Text
          </h2>

          <div className="bg-gray-100 p-4 rounded-xl mt-3 min-h-[80px]">
            {translated}
          </div>

          {translated && (
            <button
              onClick={
                copyTranslation
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl mt-4"
            >
              Copy Translation
            </button>
          )}
        </div>

      </div>

    </div>
  );
}

export default Translator;