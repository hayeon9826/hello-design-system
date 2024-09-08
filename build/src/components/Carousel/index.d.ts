export interface CarouselProps {
    className?: string;
    imageUrls: string[];
    showArrows?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
}
export declare function Carousel({ className, imageUrls, showArrows, autoplay, autoplayInterval, }: CarouselProps): import("react/jsx-runtime").JSX.Element;
