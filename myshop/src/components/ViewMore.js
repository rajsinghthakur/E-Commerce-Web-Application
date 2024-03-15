import { ToastContainer, toast } from "react-toastify"
import './style.css';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ReactImageMagnify from 'react-image-magnify';

export default () => {
    const { state } = useLocation();
    const images = state.imageArray.split(" ");
    const [pImage, setpImage] = useState(state.thumbnail);
    const setThumbnail = (image) => {
        setpImage(image)
    }

    const addToCart = (productId) => {
        axios.post("http://localhost:3000/cart/add-to-cart", { userId: sessionStorage.getItem("user-id"), productId })
            .then(response => {
                toast.success(response.data.message);
            })
            .catch(err => {
                toast.error("Oops! something went wrong...");
            })
    }

    return <>
        <ToastContainer />
        <Header />
        <div className="main1">
            <Link to="/home"><button className="cross">X</button></Link>
            <div className="main1-1">
                <div className="main1-1-1">
                    <div className="main1-1-1-1">
                        <div className="main1-1-1-1-1">
                            <div className="main1-1-1-1-1-1">
                                <div id="imageMagnifyer">
                                    <ReactImageMagnify className="img" {
                                        ...{
                                            smallImage: { alt: 'wristware', isFluidWidth: true, src: pImage },
                                            largeImage: { src: pImage, width: 1000, height: 1000 }
                                        }
                                    } />
                                </div>
                            </div>
                        </div>
                        <div className="main1-1-1-1-2">
                            {images.map((image, index) =>
                                <div className="main1-1-1-1-2-1"
                                    key={index}>{(image) ? <img onClick={() => { setThumbnail(image) }} src={image} alt="img" /> : null}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="main1-1-1-2">
                        <div className="main1-1-1-2-1">
                            <h5 className="text-start">{state.title}</h5>
                            <h5 className="text-start text-success">{state.price}$</h5>
                            <h6 className="text-start">{state.brand}</h6>
                            <p className="text-start">{state.description}</p>
                            <button onClick={() => { addToCart(state.id) }} style={{ width: "90%" }} className="">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}