// import React from 'react';
import { React,useEffect, useState } from "react";

import Article from '../components/Article';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://jamxvhedsdgwdgvjrznp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphbXh2aGVkc2Rnd2Rndmpyem5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMDMzNDEsImV4cCI6MjA1Nzc3OTM0MX0.ANX6DjfBGaEkhxRXAEBBriRQLm2esd74ncrY7wA8g2Y");


const BikeBrands = () => {
  // const articles = [
  //   {
  //     title: "Factor",
  //     content: `La marca Factor Bikes es una empresa británica que se dedica a la fabricación de alta gama. Fue fundada en el año 2007 por el ingeniero de bicicletas John Bailey y el ingeniero de diseño de Fórmula 1, Rob Gitelis.

  //     Factor Bikes se destaca por su enfoque en la tecnología de vanguardia y la innovación en su diseño. Han colaborado con equipos de ciclismo profesional, ingenieros aeroespaciales y expertos en materiales para desarrollar bicicletas de alto rendimiento. La marca utiliza tecnologías avanzadas, como el análisis de elementos finitos (FEA) y pruebas en túneles de viento, para optimizar el diseño y la aerodinámica de sus factor bike.
      
  //     Entre los modelos de bicicletas destacados de Factor Bikes se encuentran la serie O2, que es una bicicleta de carretera ligera y aerodinámica, y la serie Vista, que está diseñada para el ciclismo de aventura y fuera de carretera.
      
  //     Factor Bikes ha sido reconocida por su excelencia en diseño y rendimiento, y sus bicicletas han sido utilizadas por varios equipos de ciclismo profesionales en competencias de renombre.`,
  //     images: ["url_imagen1.jpg", "url_imagen2.jpg"]
  //     // ,videos: ["url_video1.mp4"]
  //   },
  //   {
  //     title: "Orbea",
  //     content: "Descripción detallada de los modelos tope de gama de la Marca B.",
  //     images: ["url_imagen3.jpg", "url_imagen4.jpg"]
  //     // ,videos: ["url_video2.mp4"]
  //   }
  // ];
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    getBrands();
  }, []);

  async function getBrands() {
    const { data } = await supabase.from("bike_brands").select();
    setBrands(data);
  }

  return (
    <div>
      <h1>Marcas de Bicicletas</h1>
      {brands.map((brand, index) => (
        <Article key={index} {...brand} />
      ))}
    </div>
  );
};

export default BikeBrands;