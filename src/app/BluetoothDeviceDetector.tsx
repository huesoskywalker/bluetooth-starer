"use client"
import { useState } from "react"

const BluetoothDeviceDetector = () => {
    const [isScanning, setIsScanning] = useState(false)

    const toggleScanning = () => {
        setIsScanning((prevState) => !prevState)

        const options = {
            acceptAllDevices: true,
            optionalServices: [
                "0000110b-0000-1000-8000-00805f9b34fb",
                "0000110c-0000-1000-8000-00805f9b34fb",
                "0000110e-0000-1000-8000-00805f9b34fb",
                "00001200-0000-1000-8000-00805f9b34fb",
            ],
            // optionalServices: [
            //     "00001105-0000-1000-8000-00805f9b34fb",
            //     "0000110a-0000-1000-8000-00805f9b34fb",
            //     "0000110c-0000-1000-8000-00805f9b34fb",
            //     "0000110d-0000-1000-8000-00805f9b34fb",
            //     "0000110e-0000-1000-8000-00805f9b34fb",
            //     "00001112-0000-1000-8000-00805f9b34fb",
            //     "00001115-0000-1000-8000-00805f9b34fb",
            //     "00001116-0000-1000-8000-00805f9b34fb",
            //     "0000111f-0000-1000-8000-00805f9b34fb",
            //     "0000112d-0000-1000-8000-00805f9b34fb",
            //     "0000112f-0000-1000-8000-00805f9b34fb",
            //     "00001132-0000-1000-8000-00805f9b34fb",
            //     "00001200-0000-1000-8000-00805f9b34fb",
            //     "00001800-0000-1000-8000-00805f9b34fb",
            //     "00001801-0000-1000-8000-00805f9b34fb",
            // ],
        }

        console.log("Requesting Bluetooth device...")
        navigator.bluetooth
            .requestDevice(options)
            .then((device: any) => {
                console.log("Selected device:", device)
                console.log("Connecting to GATT server...")
                return device.gatt.connect()
            })
            .then((server: any) => {
                console.log("Connected to GATT server:", server)

                console.log("Discovering services...")
                return server.getPrimaryServices()
            })
            .then((services: any) => {
                console.log("Discovered services:", services)
            })
            .catch((error: any) => {
                console.error("Error:", error)
            })
    }

    return (
        <div>
            <button onClick={toggleScanning}>{isScanning ? "Disconnect" : "Connect"}</button>
        </div>
    )
}

export default BluetoothDeviceDetector
