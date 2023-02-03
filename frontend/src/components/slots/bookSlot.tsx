import './slots.css';
import moment from 'moment';
import  { useState } from 'react';
import useApi from "../../hooks/useApi";
import * as apiRequests from "../../apiRequests";

function BookSlot({ slot, setBookingConfirmed, eventname, setEventname }) {

    const [eventnameReminder, setEventnameReminder] = useState(false);

    const bookSlot = useApi(apiRequests.bookSlot, (result) => {
        if(result.status === 201){
            setBookingConfirmed(true)
        }
    });

    
    return (
        <div className='slot-item'>
            <div className='slot-header'>{moment(slot.start).format('dddd, MMM YY')} </div>
            <div className='slot-text'>
                {moment(slot.start).format('h:mm A')}  -
                {moment(slot.end).format('h:mm A')}
            </div>

            <div >
                <input
                    type="text"
                    placeholder="Event name"
                    className = 'event-name-input'
                    onChange={e => setEventname(e.target.value)}
                />
            </div>

            

            <input type="button" className="confirm-button " value="Confirm" onClick={() => { 
                    if(!eventname){
                        console.log('no event name')
                        setEventnameReminder(true)
                    } else {
                        setEventnameReminder(false)
                        bookSlot.request({eventname, start: slot.start, end: slot.end }) 
                    }
                    
                }}/>

            { bookSlot.error && 
                <div className='slot-error-text'> The slot is not available anymore </div>
            }

            { eventnameReminder && 
                <div className='slot-error-text'> Please enter an event name </div>
            }

            

        </div>
    );
}

export default BookSlot;