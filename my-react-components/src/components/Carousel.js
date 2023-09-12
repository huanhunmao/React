import { useState } from "react"

function Carousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevPicture = () => {
        // 为了确保循环轮播，需要使用模运算（%），以确保索引在 0 到 images.length - 1 之间循环
        const newIndex = (currentIndex - 1 + images.length) % images.length
        setCurrentIndex(newIndex)
    }

    const nextPicture = () => {
        const newIndex = (currentIndex + 1) % images.length
        setCurrentIndex(newIndex)
    }

    return (
        <div className="carousel">
            <button onClick={prevPicture}>上一张</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}/>
             <button onClick={nextPicture}>下一张</button>
        </div>
    )
}

export default Carousel