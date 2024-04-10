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

  function handleImageSelect(imageUrl){
    // console.log(imageUrl)
    setImageUrl(imageUrl)
  }




  return (
    <main>
      <Nav />
      <Hero />
      <Carousel handleImageSelect={handleImageSelect}/>
      <WishCreator
        title={title}
        name={name} 
        toName={toName}
        imageUrl={imageUrl}
        handleDownload={handleDownload}
        handleInputName={handleInputName}
        handleInputTitle={handleInputTitle}
        handleInputToName={handleInputToName}
      />

      <Footer />
    </main>
  );
}
