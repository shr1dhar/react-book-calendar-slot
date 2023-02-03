import moment from 'moment';
import './slots.css';

function DisplaySlotDetails({ slot, setBookingEnabled }) {
    
    return (
        <div className='slot-item'>
            <div className='slot-header'>{moment(slot.start).format('dddd, MMM YY')} </div>
            <div className='slot-text'>
                {moment(slot.start).format('h:mm A')}  -
                {moment(slot.end).format('h:mm A')}
            </div>

            <input type="button" className="button" value="Book Time Slot" onClick={() => { setBookingEnabled(true)}}/>
        </div>
    );
}

export default DisplaySlotDetails;