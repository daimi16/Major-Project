import { useNavigate } from "react-router-dom";
import Button from "./../components/Button";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center min-h-screen text-white">
        <h1 className="text-9xl tracking-wide mb-6 text-slide-in">
          Bird ID Pro
        </h1>
        <p className="text-4xl text-slide-in mb-12">
          Your go-to platform for accurate bird identification!
        </p>
        <Button
          customstyle="text-2xl p-5 rounded-xl px-10"
          onclickcallback={() => navigate("/predict")}
        >
          <span className="tracking-widest">GET STARTED</span>
        </Button>
      </div>
      <div className="text-white mx-64 mb-4 p-12 rounded-xl">
        <h1 className="text-6xl mb-2 text-center">About the Project</h1>
        <hr className="mb-4" />
        <p className="text-lg">
          There are almost 10,000 extant species of birds in the world, each
          having a unique set of traits and appearances. In the natural world,
          people frequently find bird watching to be an engaging hobby. The
          ability to identify a species of bird accurately requires extensive
          knowledge in the science of ornithology, which is beyond the scope of
          human knowledge.
        </p>
        <p className="text-lg">
          With the aid of our model, which will be built using CNN
          (Convolutional Neural Network), our machine learning project seeks to
          assist users in identifying the species of bird they are viewing. When
          someone visits a bird sanctuary, they can take pictures and feed them
          into the model to help them identify the species of bird they are
          looking at. This not only aids in identification for bird watchers but
          also helps spread awareness among the general public about bird
          species that are endangered in the environment.
        </p>
        <p className="text-lg">
          The project has been designed using TensorFlow to create the model and
          the dataset which we have used for training and testing is Birds 515
          which has been acquired from Kaggle, it contains training data for 515
          different species of birds with over 100 high quality images for each
          bird.
        </p>
        <p className="text-lg">
          Deployment of the model has been done using Flask and ReactJS.
        </p>
      </div>
    </>
  );
}
export default Home;
