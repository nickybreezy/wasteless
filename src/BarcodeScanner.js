import React, { useState, useEffect } from "react";
import { useZxing } from "react-zxing";
import { BiCamera } from 'react-icons/bi';
const BarcodeScanner = ({ onScan }) => {
    const [result, setResult] = useState("");
    const [facingMode, setFacingMode] = useState("environment");
    const { ref } = useZxing({
        onDecodeResult(result) {
            console.log("Scanned EAN in BarcodeScanner:", result.getText());
            setResult(result.getText());
            onScan(result.getText());
        },
        constraints: {
            video: {
                facingMode: facingMode,
            },
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

    const toggleCamera = () => {
        setFacingMode(facingMode === "environment" ? "user" : "environment");
    };

    return (
        <div className="scanner-container">
            <video ref={ref} style={{ width: "300px", border: "1px solid #f7ffe5" }} autoPlay />
            <div style={{ textAlign: "center" }}>
                <p>
                    <span>EAN: </span>
                    <span>{result}</span>
                </p>
                <button className=" btn btn-outline-light" onClick={toggleCamera}>Toggle  <BiCamera style={{ color: 'white' }} /></button>
            </div>
        </div>
    );
};

export default BarcodeScanner;