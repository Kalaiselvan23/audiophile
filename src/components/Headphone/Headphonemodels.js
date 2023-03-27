import Data from "../../Contents/Headphonedata";
const Headphonemodels = () => {
  return Data().map(getModel);
};

const getModel = (data, index) => {
  let img = data["img"];
  // console.log(index);
  return (
    <div className="w-[100%] my-28">
      <div className="headphone-model flex w-[70%] h-[60vh] mx-auto justify-between">
        <img
          // src={require(img)}
          src={require("../../images/category-headphones/desktop/image-xx59.jpg")}
          alt=""
          className="headphone-img h-full"
        />
        <div className="headphone-indiv flex flex-col w-[30%] items-start mx-auto justify-center gap-3">
          <span className="headphone-new text-gray-500">NEW PRODUCT</span>
          <span className="headphone-title text-4xl font-semibold text-[#D87D4A]">
            {data["model"]}
          </span>
          <p>{data["description"]}</p>
          <button className="headphone-btn bg-black text-white p-3">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Headphonemodels;
