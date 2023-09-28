import React, { useState, useEffect } from "react";
import { useZxing } from "react-zxing";

const BarcodeScanner = () => {
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });

    useEffect(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error("getUserMedia is not supported in this browser");
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (ref.current) {
                    ref.current.srcObject = stream;
                    ref.current.play()
                        .then(() => {
                            console.log("Video playback started successfully");
                        })
                        .catch((error) => {
                            console.error("Error starting video playback:", error);
                        });
                }
            })
            .catch((error) => {
                if (error.name === 'NotAllowedError') {
                    console.error("User denied camera access.");
                } else if (error.name === 'NotFoundError') {
                    console.error("No camera found on this device.");
                } else if (error.name === 'NotReadableError') {
                    console.error("Camera is not readable. It may already be in use by another application.");
                } else {
                    console.error("Error accessing camera:", error);
                }
            });

        return () => {
            if (ref.current && ref.current.srcObject) {
                ref.current.srcObject.getTracks().forEach((track) => {
                    track.stop();
                });
            }
        };
    }, [ref]);

    return (
        <>
            <video ref={ref} style={{ width: "300px", height: "300px" }} autoPlay />
            <video ref={ref} style={{ width: "300px", height: "300px" }} />
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