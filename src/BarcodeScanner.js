import React, { useState } from "react";
import { VisionCamera, useFrameProcessor } from "react-vision-camera";
import { BarcodeReader } from "dynamsoft-javascript-barcode";

BarcodeReader.license =
    "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAyMjU3OTYxLVRYbFhaV0pRY205cVgyUmljZyIsIm1haW5TZXJ2ZXJVcDI6Imh0dHBzOi8vbXB2LnNkdy5keW5hbXNvZnRvbmxpbmUuY29tIiwib3JnYW5pemF0aW9uSUQiOiIxMDIyNTc5NjEiLCJzdGFuZGJ5U2VydmljZVJlcXVlc3QiOiJodHRwczovL2luYm94LmJpbmFyeXR5LmR5bmFtc29mdG9ubGluZS5jb20vIiwiY2hlY2tDb2RlIjo1MDYwMDg5N30=";

const BarcodeScanner = () => {
    const [barcode, setBarcode] = useState("");

    const onMessage = (message) => {
        setBarcode(message.barcodeText);
    };

    const frameProcessor = useFrameProcessor((frame) => {
        "worklet";
        const reader = new BarcodeReader();
        reader.setBarcodeFormats(BarcodeReader.EnumBarcodeFormat.EAN_13);
        reader.decodeBuffer(frame.data, frame.width, frame.height).then((results) => {
            if (results.length > 0) {
                const barcodeText = results[0].barcodeText;
                VisionCamera.sendHostMessage({ barcodeText });
            }
        });
    });

    return (
        <div style={{ flex: 1 }}>
            <VisionCamera
                style={{ flex: 1 }}
                frameProcessor={frameProcessor}
                onHostMessage={onMessage}
            />
            <div style={{ fontSize: 24, textAlign: "center" }}>
                {barcode ? `EAN code: ${barcode}` : "No barcode detected"}
            </div>
        </div>
    );
};

export default BarcodeScanner;
