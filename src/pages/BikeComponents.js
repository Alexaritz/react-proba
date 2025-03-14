import React from 'react';
import Article from '../components/Article';

const BikeComponents = () => {
  const articles = [
    {
      title: "Shimano",
      content: "Descripción detallada del Componente X.",
      images: ["url_imagen5.jpg", "url_imagen6.jpg"]
      // ,videos: ["url_video3.mp4"]
    },
    {
      title: "SRAM",
      content: "Descripción detallada del Componente Y.",
      images: ["url_imagen7.jpg", "url_imagen8.jpg"]
      // ,videos: ["url_video4.mp4"]
    }
  ];

  return (
    <div>
      <h1>Componentes</h1>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </div>
  );
};

export default BikeComponents;