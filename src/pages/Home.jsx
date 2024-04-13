import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../assets/css/wish-card.css";
import { toPng } from "html-to-image";
import download from "downloadjs";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import WishCreator from "../components/WishCreator";

export default function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
  const handleDownload = async () => {
    setIsLoading(true); // Set loading state to true when starting the download process
    try {
      const dataUrl = await toPng(wishCard);
      download(dataUrl, "wish-card.png");
      navigate('/send-message');
    } catch (error) {
      console.error('Error downloading wish card:', error);
      // Handle the error, e.g., show a message to the user
    } finally {
      setIsLoading(false); // Set loading state back to false when download process is complete
    }
  };

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
    <main className={isLoading ? 'dimmed' : ''}>
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
