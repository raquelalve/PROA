const InfoSection = ({ id, title, text, imgSrc, reverse }) => (
  <section id={id} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
    <div className="info-content">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    <div className="info-image">
      <img src={imgSrc} alt={title} />
    </div>
  </section>
);

export default InfoSection;