import React, { useState, useEffect, useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import cn from "classnames";

interface CarouselProps {
  className?: string;
  imageUrls: string[];
  showArrows?: boolean; // 화살표 버튼을 표시할지 여부를 결정하는 optional prop
  autoplay?: boolean; // 자동 슬라이드 전환 여부
  autoplayInterval?: number; // 자동 재생 시간 간격 (밀리초)
}

export default function Carousel({
  className,
  imageUrls,
  showArrows = false,
  autoplay = false,
  autoplayInterval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  // 자동 재생 시작
  const startAutoplay = () => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, autoplayInterval);
    }
  };

  // 자동 재생 정지
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [autoplay, autoplayInterval]);

  return (
    <div
      id="default-carousel"
      className={cn("relative w-full", className)}
      data-carousel="slide"
    >
      {/* 슬라이드 영역 */}
      <div className="relative overflow-hidden rounded-lg h-56 md:h-96">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // 슬라이드를 부드럽게 이동
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center" // 수직 및 수평 중앙 정렬
            >
              <img
                src={url}
                className="block max-h-full max-w-full h-auto w-auto object-cover object-center" // 이미지 중앙 정렬 및 크기 제한
                style={{ objectPosition: "center" }} // 이미지의 중앙을 보이도록 설정
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-rose-500" : "bg-gray-400"
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* 화살표 버튼 (옵션) */}
      {showArrows && (
        <>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <FaAngleLeft className="w-4 h-4 text-white" />
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <FaAngleRight className="w-4 h-4 text-white" />
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
