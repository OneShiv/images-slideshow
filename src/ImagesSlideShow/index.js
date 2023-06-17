import { useState } from "react";

const data = [
  {
    url:
      "https://wallpapers.com/images/hd/hd-sunset-at-beach-w5ped7x6g3uo2o76.jpg"
  },
  {
    url:
      "https://www.shutterstock.com/shutterstock/photos/1862937556/display_1500/stock-photo-triangle-solid-black-golden-illustration-abstract-hd-download-1862937556.jpg"
  },
  {
    url:
      "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_640.jpg"
  }
];

function ImagesSlideShow() {
  const [images, setImages] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  const onNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  return (
    <section className="imagesSlider">
      <span className="navigation prev" onClick={onPrev}>
        &lt;
      </span>
      <span className="navigation next" onClick={onNext}>
        &gt;
      </span>
      {images.map((image, index) => {
        return (
          <img
            key={index}
            alt="a hd pic"
            src={image.url}
            className={index === currentIndex ? "fade active" : "fade"}
          />
        );
      })}
    </section>
  );
}

export default ImagesSlideShow;
