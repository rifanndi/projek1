import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./TestimonialsCarousel.css";
import testimoni1 from "../img/testimoni1.svg";
import testimoni2 from "../img/testimoni2.svg";
import testimoni3 from "../img/testimoni3.svg";

const testimonials = [
  {
    id: 1,
    name: "Testimoni 1",
    message: "Sangat puas dengan layanan ini. Cepat dan tepat waktu.",
    image: testimoni1,
  },
  {
    id: 2,
    name: "Testimoni 2",
    message: "Pelayanan yang luar biasa, sangat membantu dan ramah.",
    image: testimoni2,
  },
  {
    id: 3,
    name: "Testimoni 3",
    message: "Kualitas terbaik yang pernah saya coba, sangat direkomendasikan!",
    image: testimoni3,
  },
  {
    id: 4,
    name: "Testimoni 4",
    message: "Proses mudah dan cepat, sangat memuaskan!",
    image: testimoni1,
  },
  {
    id: 5,
    name: "Testimoni 5",
    message: "Harga sesuai dengan layanan yang diberikan, sangat fair!",
    image: testimoni2,
  },
  {
    id: 6,
    name: "Testimoni 6",
    message: "Akan menggunakan layanan ini lagi di masa depan. Terima kasih!",
    image: testimoni3,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "RIGHT" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="carouselContainer">
      <div
        {...handlers}
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
