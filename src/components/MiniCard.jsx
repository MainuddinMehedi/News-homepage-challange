import { gamingGrowth, retroPcs, topLaptops } from "../utils/img-imports";

const MiniCard = () => {
  return (
    <div className="flex space-x-5 mt-16">
      <div className="flex space-x-4">
        <div>
          <img src={retroPcs} alt="" />
        </div>
        <div>
          <h1 className="text-orange-600">01</h1>
          <h3 className="text-xl font-bold hover:text-orange-600 cursor-pointer">Reviving Retro Pcs</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <div>
          <img src={topLaptops} alt="" />
        </div>
        <div>
          <h1 className="text-orange-600">02</h1>
          <h3 className="text-xl font-bold hover:text-orange-600 cursor-pointer">Top 10 Laptops of 2022</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <div>
          <img src={gamingGrowth} alt="" />
        </div>
        <div>
          <h1 className="text-orange-600">03</h1>
          <h3 className="text-xl font-bold hover:text-orange-600 cursor-pointer">The Growth of Gaming</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

    </div>
  );
};

export default MiniCard;
