import Data from "../../Contents/Headphonedata";
const Headphonemodels = () => {
  return Data().map(getModel);
};

const getModel = (data, index) => {
  let img = data["img"];
  // console.log(index);
  return (
    <div className="w-[80%] my-28 mx-auto">
      <div className={"headphone-model flex h-fit mx-auto justify-between max-sm:flex-col max-md:flex-col lg:flex-row gap-20 "}>
        <img
          // src={require(img)}
          src={require("../../images/category-headphones/desktop/image-xx59.jpg")}
          alt=""
          className="headphone-img h-full lg:w-[50%]"
        />
        <div className="headphone-indiv flex flex-col items-start mx-auto justify-center gap-3 p-5 h-full md:items-start lg:my-auto lg:mx-auto">
          <span className="headphone-new text-gray-500 ">NEW PRODUCT</span>
          <span className="headphone-title text-4xl font-semibold text-black max-md:mx-auto">
            {data["model"]}
          </span>
          <p>{data["description"]}</p>
          <button className="headphone-btn bg-black text-white p-3 mx-auto">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Headphonemodels;
