"use client";
import React from 'react'
import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
export default function SenderPage() {

    const [connection, setConnection] = useState(null);
    const [location, setLocation] = useState({ lat: 0, lon: 0 });

    // SignalR Connection
    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://tech-test.raintor.com/Hub")
            .withAutomaticReconnect()
            .build();

        newConnection.start()
            .then(() => {
                setConnection(newConnection);
            })
    }, [])

    //  location track and sent server
    useEffect(() => {
        if (!connection) return;

        const watchId = navigator.geolocation.watchPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            setLocation({ lat, lon });

            connection
                .invoke("SendLatLon", lat, lon, "fahim@example.com")
                .then(() => console.log(lat, lon))
                .catch((err) => console.error(err));
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, [connection]);
    return (
        <div className='min-h-screen'>
             <h2 className='text-3xl font-bold text-center my-5'>Location Sender </h2>
            <div className=''>
                <h1>Live Location...</h1>
                <p>Lat: {location.lat}</p>
                <p>Lon: {location.lon}</p>
            </div>
        </div>
    )
}
