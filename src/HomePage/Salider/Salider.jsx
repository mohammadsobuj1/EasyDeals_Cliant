
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"




export const Salider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div className="w-[90%] mx-auto">
            <div ref={sliderRef} className="keen-slider  ">
                <div className="keen-slider__slide number-slide1">
                    <img src="https://icms-image.slatic.net/images/ims-web/22de5803-c6ef-42d5-83b0-3a6ab4264773.jpg" alt="" />

                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src="https://icms-image.slatic.net/images/ims-web/22de5803-c6ef-42d5-83b0-3a6ab4264773.jpg" alt="" />

                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src="https://icms-image.slatic.net/images/ims-web/36015093-f6e3-43fc-af96-9dec3bdc2d17.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">4</div>
                <div className="keen-slider__slide number-slide5"><img src="https://icms-image.slatic.net/images/ims-web/36015093-f6e3-43fc-af96-9dec3bdc2d17.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide6">
                    <img src="https://icms-image.slatic.net/images/ims-web/36015093-f6e3-43fc-af96-9dec3bdc2d17.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

