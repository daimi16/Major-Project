import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Spinner from "../components/Spinner";
import "./Predict.css";

export default function Predict() {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handlepredict = async () => {
    setLoading(true);
    try {
      const form = new FormData();
      form.append("image", image);
      console.log(image);
      let response = await fetch(window.location.hostname + ":8000/predict", {
        // let response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: form,
      });
      const results = await response.json();

      const birds = [];
      for (const result of results) {
        const query = new String(result.name).replace(" ", "+");
        console.log(
          `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=1&format=json&origin=*`
        );
        response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=1&format=json&origin=*`
        );
        const link = (await response.json())[3][0];
        birds.push({ ...result, link });
        setPredictions(birds);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="fade-in">
      <div className="p-6">
        <h1 className="p-6 text-3xl text-center text-white font-bold tracking-widest underline underline-offset-[10px]">
          UPLOAD AN IMAGE
        </h1>
        <div className="p-6 flex justify-center">
          <input
            className={`bg-blue-900 text-white rounded p-4 text-semibold text-xl`}
            accept="image/*"
            onChange={(e) => {
              // setImage(e.target.files[0]);
              let reader = new FileReader();
              reader.onload = (e) => setImage(e.target.result);
              reader.readAsDataURL(e.target.files[0]);
            }}
            type="file"
          />
        </div>

        <div className="p-6 flex justify-center text-3xl text-white font-bold tracking-widest underline underline-offset-[10px]">
          {image ? (
            <img className="object-contain rounded " src={image} />
          ) : (
            <>No image uploaded</>
          )}
        </div>

        <div className="p-6 flex justify-center">
          <Button
            disabled={isLoading}
            onclickcallback={handlepredict}
            customstyle="text-2xl p-5 rounded-full px-10"
          >
            <span className="flex justify-center text-2xl font-semibold text-white tracking-widest">
              PREDICT
            </span>
          </Button>
        </div>

        <div className="p-6 flex justify-center text-white">
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            predictions.length > 0 && (
              <div className="bg-gray-300 text-black p-6 rounded-2xl text-md">
                {predictions.map((prediction) => {
                  console.log(prediction);
                  return (
                    <div className="mb-6">
                      <h1 className="text-2xl">
                        {prediction.name} ({prediction.probability * 100}){" "}
                      </h1>
                      <a
                        className="text-blue-500 hover:text-blue-400 underline"
                        href={prediction.link}
                        target="_blank"
                      >
                        Read more
                      </a>
                    </div>
                  );
                })}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
