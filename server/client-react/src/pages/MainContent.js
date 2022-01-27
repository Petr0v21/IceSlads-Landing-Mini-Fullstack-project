import React, { useState } from "react"
import Things from "../img/things.jpeg"
import HeaderBg from "../img/header-bg.jpg"
import HeaderBg2 from "../img/header-bg2.jpg"
import CreatePost from "./CreatePost/CreatePost"

const MainContent = () => {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <section id="about" className="content">
            <div className="container" id="container">
                <h2 className="title-two">Про Товар</h2>
                <div className="description">
                    <div className="desc-left">
                        <img src={Things} alt="Things" className="responsive" />
                    </div>
                    <div className="desc-right">
                        <h3>Санки-ледянки Supernova</h3>
                        <p>
                            Ціна шо ше має
                        </p>
                        <div className="btn2" onClick={() => setActiveModal(true)}>Замовити</div>
                    </div>
                </div>
                <div className="gallery">
                    <img src={HeaderBg2} alt="Event 1" className="left-img" />
                    <img src={HeaderBg} alt="Event 2" className="right-img" />
                </div>
            </div>
            <CreatePost active={activeModal} setActive={setActiveModal}/>
        </section>
    )
}

export default MainContent;