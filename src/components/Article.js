import React from 'react';

const Article = ({ title, content, images, videos }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      {images && images.map((img, index) => (
        <img key={index} src={img} alt={`Imagen ${index + 1}`} />
      ))}
      {videos && videos.map((video, index) => (
        <iframe key={index} src={video} title={`Video ${index + 1}`} />
      ))}
    </div>
  );
};

export default Article;