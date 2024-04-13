import PropTypes from "prop-types";
import { getImageUrl } from "../utils/image-util";
import { HexColorPicker } from "react-colorful";

export default function WishCreator({
  handleDownload,
  handleInputName,
  handleInputTitle,
  handleInputToName,
  handleBrightness,
  handleTitleFontSize,
  setTitleColor,
  handleTitleAlign,
  handleNamesFontSize,
  name,
  title,
  toName,
  imageUrl,
  titleFontSize,
  brightness,
  titleColor,
  titleAlign,
  namesFontSize,
}) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-16">
      {/* Wish Card Settings */}
      <div className="md:pb-0 pb-12 order-2">
        <div className="flex flex-col items-center md:items-start px-5">
          <h2 className="text-2xl font-bold mb-5">
            Add your Wish And Your Name
          </h2>
          <label htmlFor="title" className="w-full mb-4 font-semibold">
            Type Your Wish
            <textarea
              className="px-3 py-2 w-full rounded-md focus:outline-blue-600 border-blue-300 mt-2"
              type="text"
              id="title"
              name="title"
              required="required"
              onChange={handleInputTitle}
            ></textarea>
          </label>
          <label htmlFor="yourName" className="w-full mb-4 font-semibold">
            Your Name
            <input
              className="px-3 py-2 w-full rounded-md focus:outline-blue-600 border-blue-300 mt-2"
              type="text"
              id="yourName"
              name="yourName"
              required="required"
              onChange={handleInputName}
            />
          </label>
          <label htmlFor="toName" className="w-full mb-4 font-semibold">
            Receiver&apos;s name
            <input
              className="px-3 py-2 w-full rounded-md focus:outline-blue-600 border-blue-300 mt-2"
              type="text"
              id="toName"
              name="toName"
              required="required"
              onChange={handleInputToName}
            />
          </label>
          <button
            onClick={handleDownload}
            className="block bg-blue-600 text-slate-100 px-6 py-3 rounded-md focus:outline-blue-600"
          >
            Download Wish Card
          </button>
        </div>
        <div className="px-5 md:mb-10 order-1">
          <h2 className="text-2xl font-bold mt-12 mb-5">Other Text Settings</h2>
          <label htmlFor="fontSize" className="w-full font-semibold">
            Title Font Size
            <input
              className="w-full mt-2"
              type="range"
              name="fontSize"
              id="fontSize"
              max={60}
              min={5}
              step={1}
              defaultValue={titleFontSize}
              onChange={handleTitleFontSize}
            />
          </label>
          <label htmlFor="namesFontSize" className="w-full font-semibold">
            Names Font Size
            <input
              className="w-full mt-2"
              type="range"
              name="namesFontSize"
              id="namesFontSize"
              max={20}
              min={9}
              step={1}
              defaultValue={namesFontSize}
              onChange={handleNamesFontSize}
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <label htmlFor="titleColor" className="w-full font-semibold">
              Title Font Colour
              <HexColorPicker
                className="mt-3"
                color={titleColor}
                onChange={setTitleColor}
              />
            </label>
            <label htmlFor="titleAlign" className="font-semibold">
              Title Align
              <select
                name="titleAlign"
                id="titleAlign"
                onChange={handleTitleAlign}
                className="w-full mt-3 rounded-md"
              >
                <option
                  value="center"                  
                >
                  Center
                </option>
                <option
                  value="left"                  
                >
                  Left
                </option>
                <option
                  value="right"                  
                >
                  Right
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Wish Card */}

      <div>
        <div>
          <div
            className="wish-card renderd-card relative aspect-video overflow-hidden m-0.5"
            id="wish-card-elm"
          >
            <img
              src={
                imageUrl
                  ? getImageUrl(imageUrl)
                  : "https://placehold.co/1280x720/2563eb/ffffff?text=Select Your Preferred Image"
              }
              alt="Select Image"
              className="w-full h-full"
            />
            <div
              className={`w-full h-full absolute top-0 left-0`}
              style={{ backgroundColor: `rgba(0,0,0,${brightness / 100})` }}
            >
              <h2
                className={`p-4 font-bold capitalize left-1/2 top-1/2 text-center absolute w-full h-full translate-x-[-50%] translate-y-[-50%] text-white`}
                style={{
                  fontSize: `${titleFontSize}px`,
                  color: titleColor,
                  textAlign: titleAlign,
                }}
              >
                {title}
              </h2>
              <div
                className={
                  name || toName
                    ? "absolute w-full bottom-0 flex justify-between bg-slate-900/30 py-1 px-4"
                    : ""
                }
              >
                <p className="from" style={{ fontSize: `${namesFontSize}px` }}>
                  {name ? `From: ${name}` : ""}
                </p>
                <p className="to" style={{ fontSize: `${namesFontSize}px` }}>
                  {toName ? `To: ${toName}` : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 px-3">
          <label htmlFor="brightness" className="font-semibold w-full">
            Set Image Brightness
            <input
              type="range"
              name="brightness"
              id="brightness"
              step={1}
              min={0}
              max={100}
              defaultValue={brightness}
              onChange={handleBrightness}
              className="w-full mt-2"
            />
          </label>
          {/* <div className="mt-5">
            <input type="file" name="bg-image" id="bg-image" className="font-semibold"/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
WishCreator.propTypes = {
  handleDownload: PropTypes.func.isRequired,
  handleInputName: PropTypes.func.isRequired,
  handleInputTitle: PropTypes.func.isRequired,
  handleInputToName: PropTypes.func.isRequired,
  handleBrightness: PropTypes.func.isRequired,
  handleTitleFontSize: PropTypes.func.isRequired,
  setTitleColor: PropTypes.func.isRequired,
  handleTitleAlign: PropTypes.func.isRequired,
  handleNamesFontSize: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  toName: PropTypes.string,
  imageUrl: PropTypes.string,
  brightness: PropTypes.number,
  titleFontSize: PropTypes.number,
  titleColor: PropTypes.string,
  titleAlign: PropTypes.string,
  namesFontSize: PropTypes.number,
};
