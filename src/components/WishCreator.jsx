import PropTypes from "prop-types";

export default function WishCreator({handleDownload, handleInputName, handleInputTitle, handleInputToName, name, title, toName, imageUrl},) {
  return (
    <div
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-20"
      id="wish-creator-container"
    >
      <div className="flex flex-col items-center md:items-start px-5">
        <label htmlFor="title" className="w-full mb-4 font-semibold">
          Type Your Wish
          <input
            className="px-3 py-2 w-full rounded-md focus:outline-blue-600 border-blue-300 mt-2"
            type="text"
            id="title"
            name="title"
            required="required"
            onChange={handleInputTitle}
          />
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
      <div>
        <div className="canvas-holder border-2 border-blue-200">
          <div className="wish-card renderd-card" id="wish-card-elm" style={imageUrl ? {backgroundImage: `url(src/${imageUrl})`} : {backgroundImage: `url(${imageUrl})`}}>
            <h2 className="bg-black/60">{title}</h2>
            <div
              className={
                name || toName
                  ? "absolute w-full bottom-0 flex justify-between bg-slate-900/30 p-4"
                  : "absolute w-full bottom-0 flex justify-between p-4"
              }
            >
              <p className="from">{name ? `From: ${name}` : ""}</p>
              <p className="to">{toName ? `To: ${toName}` : ""}</p>
            </div>
          </div>
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
  name: PropTypes.string,
  title: PropTypes.string,
  toName: PropTypes.string,
  imageUrl: PropTypes.string,
};