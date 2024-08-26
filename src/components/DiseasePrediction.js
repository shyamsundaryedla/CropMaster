import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState ,useRef} from "react";

const DiseasePrediction = () => {

    const inputRef = useRef(null);
    const [image,setImage] = useState("");



    const handleImageClick = () =>{
        inputRef.current.click();
    }


   const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }

    return(
        <div className="container disease-predictor">
            <Nav></Nav>
            <div className="row dis-container">
                <div className="col-lg-6 col-md-6 dis-img-txt">
                    <h2>Disease Predictor</h2>
                    <p>To use our disease predictor, follow these simple steps:</p>
                   <ol>
                    <li>Upload Image: Click on the "Upload Image" button and select the image of the disease you want to analyze from your device.</li>
                    <li>Submit Image: After selecting the image, click on the "Submit" button to upload it to our system.</li>
                    <li>View Results: Once the image is processed, the results will be displayed on your screen, providing you with insights and potential diagnoses.</li>
                    <li>Seek Further Advice: Use the information provided to consult with a healthcare professional for further guidance and treatment.</li>
                   </ol>
                </div>
                <div className="col-lg-6 col-md-6 disease-img-container">
                <div className="disease-img">
                {image ? (<img src={URL.createObjectURL(image)} alt=""/>) : (
                    <img src="https://th.bing.com/th/id/R.712037bab8634a63b94c4cd1d22dc141?rik=3lotRj1zGK%2b0ag&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fUpload-Transparent.png&ehk=1NW1RvOIMnDL%2bneLkwtLBWcJFFxE3uETUzRpfFe7RyA%3d&risl=&pid=ImgRaw&r=0" alt=""/>
                )}
                <input type="file" ref={inputRef} onChange={handleImageChange} style={{display: "none"}}></input>
                <br></br>
                <button  onClick={handleImageClick} className="btn dis-btn">Upload</button>
                <button  className="btn dis-btn">Submit</button>

            </div>
                </div>

            </div>
            

        </div>
    )

}

export default DiseasePrediction;