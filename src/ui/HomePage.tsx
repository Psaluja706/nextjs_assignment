'use client'
import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.worldbank.org/v2/country/WLD/indicator/EN.POP.DNST?date=1960:2023&format=json");
        const result = await response.json();
        console.log({result})
        setData(result); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-greyLayout rounded-xl">
          <div className="text-xs text-gray-600 font-semibold">
            World Population
          </div>
          <div className="text-sm font-bold">7.9B</div>
        </div>
        <div className="p-6 bg-greyLayout rounded-xl">
          <div className="text-xs text-gray-600 font-semibold">
            World Population
          </div>
          <div className="text-sm font-bold">7.9B</div>
        </div>
      </div>
      <div className="p-6 bg-greyLayout rounded-xl mt-6 relative h-72">
        <LineGraph />
      </div>
    </div>
  );
};

export default HomePage;
