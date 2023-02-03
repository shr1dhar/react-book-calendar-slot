import './slots.css';
import React, { useState } from 'react';

import BookSlot from "./bookSlot";
import DisplaySlotDetails from "./displaySlotDetails";
import DisplayConfirmedSlot from "./displayConfirmedSlot";

function SlotContainer({ slot }) {
    const [eventname, setEventname] = useState('');
    const [bookingEnabled, setBookingEnabled] = useState(false);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    return (
        <React.Fragment>

            {!bookingConfirmed && !bookingEnabled && 
                <DisplaySlotDetails  
                key={slot._id} 
                slot={slot} 
                setBookingEnabled={setBookingEnabled} />
            }

            {!bookingConfirmed && bookingEnabled && 
                <BookSlot  key={slot._id} slot={slot}  eventname={eventname} setEventname={setEventname} setBookingConfirmed={setBookingConfirmed}/>
            }

            {bookingConfirmed &&
                <DisplayConfirmedSlot  key={slot._id} slot={slot} eventname={eventname} />
            }

            
             
        </React.Fragment>
    );
}

export default SlotContainer;