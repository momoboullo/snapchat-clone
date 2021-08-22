import React, {useCallback, useRef} from "react";
import { useHistory } from 'react-router-dom'
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from "react-redux";
import { setCameraImage} from "./features/cameraSlice";
import "./WebcamCapture.css";

const videosConstraints = {
    width: 270,
    height: 399,
    facingMode: "user",
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
// BEM naming

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");
    }, [webcamRef]);

    return <div className='webcamCapture'>
        <Webcam
            audio={false}
            height={videosConstraints.height}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={videosConstraints.width}
            videoConstraints={videosConstraints}
        />
        <RadioButtonUncheckedIcon
            className='webcamCapture__button'
            onClick={capture}
            fontSize="large"
        />
    </div>
}

export default WebcamCapture;