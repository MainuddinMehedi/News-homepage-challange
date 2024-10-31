import { heroImg } from "../utils/img-imports";

const Hero = () => {
  return (
    <div className="flex mt-4 space-x-7">
      <div>
        <div>
          <img src={heroImg} alt="" />
        </div>
        <div className="flex pt-7">
          <div className="w-2/4">
            <h1 className="text-5xl">The Bright Future of Web3.0?</h1>
          </div>
          <div className="w-3/4 space-y-6">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              perspiciatis modi possimus fuga eius quae maxime. fuga eius quae
              maxime.
            </p>
            <button className="px-9 py-2.5 bg-orange-600 text-black font-medium rounded hover:bg-slate-900 hover:text-white">
              Read More
            </button>
          </div> 
        </div>
      </div>

      <div className="w-3/5 py-1 px-5 bg-slate-950 text-slate-400">
        <h1 className="my-3 text-orange-600">New</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-medium text-white hover:text-orange-600 cursor-pointer">Hydrogen vs Electric Cars</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              error placeat, repellat
            </p>
          </div>
            <hr className="border-gray-600" />
          <div>
            <h2 className="text-xl font-medium text-white hover:text-orange-600 cursor-pointer">The downside of AI artistry</h2>
            <p>
              Lorem ipsum dolor incidunt corrupti dolore? Ex id fuga eveniet!
            </p>
          </div>
            <hr className="border-gray-600" />
          <div>
            <h2 className="text-xl font-medium text-white hover:text-orange-600 cursor-pointer">Is VC Funding Dying Up?</h2>
            <p>
              Lorem ipsum dolor incidunt corrupti dolore? Ex id fuga eveniet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
