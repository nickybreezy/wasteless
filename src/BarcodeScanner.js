import React, { useState, useEffect, useRef } from "react";
import { useZxing } from "react-zxing";

const BarcodeScanner = () => {
    const [result, setResult] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        // Check if the required APIs are available
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error("getUserMedia is not supported in this browser");
            return;
        }

        // Request camera permission using getUserMedia
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                console.log("Camera stream started successfully");

                // Check if the reference and current property exist
                if (ref && ref.current) {
                    ref.current.srcObject = stream;
                    ref.current.play();
                } else {
                    console.error("Video element reference is not available");
                }
            })
            .catch((error) => {
                console.error("Error accessing camera:", error);
            });
    }, [ref]);

    useZxing({
        ref: ref,
        onDecodeResult: (result) => setResult(result.getText())
    });

    return (
        <>
            <span style={{ position: "relative" }}>
                <video ref={ref} style={{ width: "300px", aspectRatio: 1, border: '1px solid black', position: "absolute" }} />
                <span style={{ width: "300px", aspectRatio: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "black", color: "white", border: '1px solid black' }}>Camera not available</span>
            </span>
            <p>
                <span>EAN code:</span>
                <span>{result}</span>
            </p>
        </>
    );
};

export default BarcodeScanner;
