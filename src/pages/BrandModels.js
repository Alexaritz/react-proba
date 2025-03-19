// import React from 'react';
import { React,useEffect, useState } from "react";

import Article from '../components/Article';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://jamxvhedsdgwdgvjrznp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphbXh2aGVkc2Rnd2Rndmpyem5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMDMzNDEsImV4cCI6MjA1Nzc3OTM0MX0.ANX6DjfBGaEkhxRXAEBBriRQLm2esd74ncrY7wA8g2Y");


const BrandModels = () => {

  const [models, setModels] = useState([]);


  useEffect(() => {
    getModels();
  }, []);

  async function getModels() {
    const { data } = await supabase.from("brand_models").select();
    setModels(data);
  }

  return (
    <div>
      <h1>Modelos</h1>
      {models.map((brand, index) => (
        <Article key={index} {...brand} />
      ))}
    </div>
  );
};

export default BrandModels;