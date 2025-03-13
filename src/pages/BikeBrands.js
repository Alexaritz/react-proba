import React from 'react';
import Article from '../components/Article';

const BikeBrands = () => {
  const articles = [
    {
      title: "Marca A",
      content: "Descripción detallada de los modelos tope de gama de la Marca A.",
      images: ["url_imagen1.jpg", "url_imagen2.jpg"],
      videos: ["url_video1.mp4"]
    },
    {
      title: "Marca B",
      content: "Descripción detallada de los modelos tope de gama de la Marca B.",
      images: ["url_imagen3.jpg", "url_imagen4.jpg"],
      videos: ["url_video2.mp4"]
    }
  ];

  return (
    <div>
      <h1>Marcas de Bicicletas</h1>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </div>
  );
};

export default BikeBrands;