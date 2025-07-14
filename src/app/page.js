"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Card from "./components/Card";
export default function Home() {
  const [allData, setAllData] = useState([])
  useEffect(() => {
    fetch(`https://tech-test.raintor.com/api/users/GetUsersList`)
      .then(res => res.json())
      .then(data => setAllData(data.users))
  }, [])
  if (allData.length < 1) return <Loading></Loading>
  return (
    <div className="min-h-screen">
      <h2 className='text-3xl font-bold text-center my-7'> All Users data </h2>
      <div className='my-9 sm:grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {
          allData.map((data, index) =><Card data={data} key={index}></Card>)
           
          }
      </div>
    </div>
  );
}
