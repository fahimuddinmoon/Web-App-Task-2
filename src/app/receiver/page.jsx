"use client";
import React from 'react'
import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import "leaflet/dist/leaflet.css";
import Link from 'next/link';
import Loading from '../components/Loading';


export default function receiverPage() {
    const [location, setLocation] = useState({});
    const [connection, setConnection] = useState(null);

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
    }, []);

    //Receive Location with SignalR 
    useEffect(() => {
        if (!connection) return;

        connection.on("ReceiveLatLon", (lat, lon, email) => {
            setLocation({ lat, lon });
        });

        return () => {
            connection.off("ReceiveLatLon");
        };
    }, [connection]);


    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>Location receiver </h2>
            {location?.lat?.lat && location?.lat?.lon ?
                <div className='min-h-screen'>
                    <p>User Name : {location?.lat?.userName}</p>
                    <p>Lat : {location?.lat?.lat}</p>
                    <p>Lon : {location?.lat?.lon}</p>
                </div>
                :
                <div className="flex flex-col items-center min-h-screen justify-center text-center p-8 text-gray-500">
                    <div className="text-6xl mb-4">📭</div>
                    <h2 className="text-xl font-semibold">No Data Found</h2>
                    <p className="text-sm mt-2">There’s nothing here yet. Please check back later.</p>
                    <Link href='/sander' className="btn mt-4">Back</Link>
                </div>

            }
        </div >
    )
}
