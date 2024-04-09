import { useState } from "react";
import "../assets/css/wish-card.css";
import { toPng } from "html-to-image";
import download from "downloadjs";

export default function Home() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [toName, setToName] = useState("");

  const wishCard = document.querySelector("#wish-card-elm");

  function handleInputTitle(e) {
    setTitle(e.target.value);
  }

  function handleInputName(e) {
    setName(e.target.value);
  }
  function handleInputToName(e) {
    setToName(e.target.value);
  }
  // console.log(title)
  function handleDownload() {
    toPng(wishCard).then((dataUrl) => {
      console.log(dataUrl);
      download(dataUrl, "wish-card.png");
    });
  }

  return (
    <div className="container mx-auto">
      <header>
        <h2>Welcome to doxDesigner Wish Creator</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
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
            <div className="wish-card renderd-card" id="wish-card-elm">
              <h2>{title}</h2>
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
    </div>
  );
}
