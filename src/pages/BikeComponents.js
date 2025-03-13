import React from 'react';
import Article from '../components/Article';

const BikeComponents = () => {
  const articles = [
    {
      title: "Componente X",
      content: "Descripción detallada del Componente X.",
      images: ["url_imagen5.jpg", "url_imagen6.jpg"],
      videos: ["url_video3.mp4"]
    },
    {
      title: "Componente Y",
      content: "Descripción detallada del Componente Y.",
      images: ["url_imagen7.jpg", "url_imagen8.jpg"],
      videos: ["url_video4.mp4"]
    }
  ];

  return (
    <div>
      <h1>Componentes de Bicicletas</h1>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </div>
  );
};

export default BikeComponents;