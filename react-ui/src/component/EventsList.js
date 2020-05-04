import React from 'react';

const Events=({eventsLists})=>{
  const EventList=[];
  eventsLists.forEach(events=>{
    EventList.push(
      <div key={eventsLists.id}>
        <li>{events.name} <button className='btn btn-delete'>CheckIn</button></li>
      </div>
    )
  }); return(
    <div className="list-container">
      <ul className='list'>
        {EventList}
      </ul>
    </div>
  )
}
export default Events;
