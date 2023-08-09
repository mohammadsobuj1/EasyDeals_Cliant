
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"




// export const Salider = () => {
//     const [sliderRef] = useKeenSlider(
//         {
//             loop: true,
//         },
//         [
//             (slider) => {
//                 let timeout
//                 let mouseOver = false
//                 function clearNextTimeout() {
//                     clearTimeout(timeout)
//                 }
//                 function nextTimeout() {
//                     clearTimeout(timeout)
//                     if (mouseOver) return
//                     timeout = setTimeout(() => {
//                         slider.next()
//                     }, 2000)
//                 }
//                 slider.on("created", () => {
//                     slider.container.addEventListener("mouseover", () => {
//                         mouseOver = true
//                         clearNextTimeout()
//                     })
//                     slider.container.addEventListener("mouseout", () => {
//                         mouseOver = false
//                         nextTimeout()
//                     })
//                     nextTimeout()
//                 })
//                 slider.on("dragStarted", clearNextTimeout)
//                 slider.on("animationEnded", nextTimeout)
//                 slider.on("updated", nextTimeout)
//             },
//         ]
//     )
//     return (
//         <div className="w-[90%] mx-auto">
//             <div ref={sliderRef} className="keen-slider  ">
//                 <div className="keen-slider__slide number-slide1">
//                     <img src="https://icms-image.slatic.net/images/ims-web/22de5803-c6ef-42d5-83b0-3a6ab4264773.jpg" alt="" />

//                 </div>
//                 <div className="keen-slider__slide number-slide2">
//                     <img src="https://icms-image.slatic.net/images/ims-web/22de5803-c6ef-42d5-83b0-3a6ab4264773.jpg" alt="" />

//                 </div>
//                 <div className="keen-slider__slide number-slide3">
//                     <img src="https://icms-image.slatic.net/images/ims-web/36015093-f6e3-43fc-af96-9dec3bdc2d17.jpg" alt="" />
//                 </div>
//                 <div className="keen-slider__slide number-slide4">4</div>
//                 <div className="keen-slider__slide number-slide5"><img src="https://icms-image.slatic.net/images/ims-web/36015093-f6e3-43fc-af96-9dec3bdc2d17.jpg" alt="" /></div>
//                 <div className="keen-slider__slide number-slide6">
//                     <img src="https://icms-image.slatic.net/images/ims-web/36015093-f6e3-43fc-af96-9dec3bdc2d17.jpg" alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };



import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Salider = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[650px] w-full m-auto py-8 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Salider;

