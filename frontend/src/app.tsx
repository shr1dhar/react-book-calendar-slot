import "./app.css";
import React, { useEffect } from "react";
import useApi from "./hooks/useApi";
import * as apiRequests from "./apiRequests";
import SlotContainer from "./components/slots/slotContainer";

export const App = () => {
  const getAvailableSlots = useApi(apiRequests.getAvailableSlots);

  useEffect(() => {
    getAvailableSlots.request();
  }, []);

  return (
    <div className="app">
      <div> <h1>  Book a time slot with me </h1> </div>

      <div className='flex-container'>
        {getAvailableSlots.loading && <p>Slots are loading!</p>}

        {getAvailableSlots.data?.map((post) => (
            <SlotContainer key={post._id} slot={post} />
        ))}
      </div>
      
    </div>
  );
};
