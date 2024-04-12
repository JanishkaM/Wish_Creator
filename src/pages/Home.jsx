import { useState } from "react";
import "../assets/css/wish-card.css";
import { toPng } from "html-to-image";
import download from "downloadjs";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import WishCreator from "../components/WishCreator";

export default function Home() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [toName, setToName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [titleColor, setTitleColor] = useState("#ffffff");
  const [titleFontSize, setTitleFontSize] = useState(30);
  const [titleAlign, setTitleAlign] = useState("center");

  const [namesFontSize, setNamesFontSize] = useState(10);

  const [brightness, setBrightness] = useState(50);

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

  function handleImageSelect(imageUrl) {
    // console.log(imageUrl)
    setImageUrl(imageUrl);
  }

  function handleTitleFontSize(e) {
    setTitleFontSize(e.target.value);
    // console.log(title)
  }

  function handleBrightness(e) {
    setBrightness(e.target.value);
    // console.log(brightness)
  }

  function handleTitleAlign(e) {
    setTitleAlign(e.target.value);
  }

  function handleNamesFontSize(e) {
    setNamesFontSize(e.target.value);
  }

  return (
    <main>
      <Nav />
      <Hero />
      <Carousel handleImageSelect={handleImageSelect} imageUrl={imageUrl}/>
      <WishCreator
        title={title}
        name={name}
        toName={toName}
        imageUrl={imageUrl}
        brightness={brightness}
        titleFontSize={titleFontSize}
        titleColor={titleColor}
        titleAlign={titleAlign}
        namesFontSize={namesFontSize}
        handleDownload={handleDownload}
        handleInputName={handleInputName}
        handleInputTitle={handleInputTitle}
        handleInputToName={handleInputToName}
        handleBrightness={handleBrightness}
        handleTitleFontSize={handleTitleFontSize}
        setTitleColor={setTitleColor}
        handleTitleAlign={handleTitleAlign}
        handleNamesFontSize={handleNamesFontSize}
      />

      <Footer />
    </main>
  );
}
