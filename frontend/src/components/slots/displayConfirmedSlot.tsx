import moment from 'moment';
import './slots.css';

function DisplayConfirmedSlot({ slot, eventname }) {
    
    return (
        <div className='slot-item'>
            <div className='slot-header'>{moment(slot.start).format('dddd, MMM YY')} </div>
            <div className='slot-text'>
                {moment(slot.start).format('h:mm A')}  -
                {moment(slot.end).format('h:mm A')}
            </div>

            <br />

            <div className='slot-text'> <b> Meeting booked: </b> </div>
            <div className='slot-text'> {eventname} </div>

            
        </div>
    );
}

export default DisplayConfirmedSlot;