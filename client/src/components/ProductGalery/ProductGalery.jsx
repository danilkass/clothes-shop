import { useState } from "react";
import styles from "./ProductGalery.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import ProductBaner from "../UI/ProductBaner/ProductBaner";

function ProductGalery({ product }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : product.img.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide < product.img.length - 1 ? prevSlide + 1 : 0));
  };

  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <ProductBaner product={product} fontSize={16} />
        <div
          className={styles.imageContainer}
          style={{ transform: `translateX(${100 - currentSlide * 100}%)` }}
        >
          {product.img.map((item, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img className={styles.mainPicture} src={item.img} alt={product.name} />
            </div>
          ))}
        </div>

        <div className={styles.sliderBtnWrapper}>
          <button className={styles.sliderBtn} onClick={handlePrev}>
            <IoIosArrowBack size={24} color="#484848" />
          </button>
          <button className={styles.sliderBtn} onClick={handleNext}>
            <IoIosArrowBack size={24} color="#484848" />
          </button>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.activeSlide}
            style={{ transform: `translateX(${-currentSlide * -100}%)` }}
          ></div>

          {product.img.map((item, index) => {
            console.log(item);
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={styles.sliderItem}
              >
                <img src={item.img} alt={`${product.name}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductGalery;
