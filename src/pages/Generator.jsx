import { useState, useEffect, useCallback } from "react";

function Generator() {
  const [length, setLength] = useState(10);
  const [randomString, setRandomString] =
    useState("Click Generate");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setRandomString(result);
  }, [length]);

  useEffect(() => {
    document.title = "Random String Generator";
  }, []);

  const copyString = () => {
    navigator.clipboard.writeText(randomString);
    alert("Copied Successfully!");
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-200 to-pink-800 flex justify-center items-center p-6">

      <div className="bg-green shadow-2xl rounded-3xl p-8 w-full max-w-4xl min-h-\[700px] flex flex-col z-50">

        <h1 className="text-5xl font-bold mb-8 text-center">
          Random String Generator
        </h1>

        <label className="font-semibold">
          String Length
        </label>

        <input
          type="number"
          value={length}
          min="1"
          max="50"
          onChange={(e) =>
            setLength(Number(e.target.value))
          }
          className="w-full border-2 border-gray-300 p-4 rounded-xl mt-2"
        />
      <div className="flex justify-center">
  <button
    onClick={generateString}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full mt-5 w-40 shadow-lg transition duration-300 hover:scale-105"
  >
    Generate
  </button>
</div>
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Generated String
          </h2>

          <div className="bg-gray-100 p-4 rounded-xl mt-3 min-h-[100px] break-all flex items-center">
            {randomString}
          </div>

          <button
            onClick={copyString}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-3xl mt-4"
          >
            Copy
          </button>
        </div>

      </div>

    </div>
  );
}

export default Generator;