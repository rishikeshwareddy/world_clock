import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Appwatch from "./Appwatch";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    const {city,country}=newNote;
     var cityTimezones = require('city-timezones');
     const cityLookup = cityTimezones.lookupViaCity(city);
     const mycity=cityLookup.filter((ourcity)=>{
        let mycountry=ourcity.country.toLowerCase();
        return (mycountry===country);
      });
     const nowtime=new Date().toLocaleString("en-US",{timeZone:mycity[0].timezone});
     const mynewNote={...newNote,date:nowtime.split(", ")[0],time:nowtime.split(", ")[1]};
    setNotes(prevNotes => {
      return [...prevNotes, mynewNote];
    });
  }

  setInterval(()=>{
    notes.map((prevnotes,index)=>{
    const {city,country}=prevnotes;
     var cityTimezones = require('city-timezones');
     const cityLookup = cityTimezones.lookupViaCity(city);
     const mycity=cityLookup.filter((ourcity)=>{
        let mycountry=ourcity.country.toLowerCase();
        return (mycountry===country);
      });
     const nowtime=new Date().toLocaleString("en-US",{timeZone:mycity[0].timezone});
     const mynewNote={...prevnotes,date:nowtime.split(", ")[0],time:nowtime.split(", ")[1]};
     setNotes(prevnotes=>{
      const newmynotes=prevnotes;
      if(newmynotes[index]!=null)
      {
        newmynotes[index]=mynewNote;
      }
      return [...newmynotes];
     })
    })
  },1000)

  function handleNotes(thiscity,index){
     return (<Note 
            key={index}
            id={index}
            city={thiscity.city}
            country={thiscity.country}
            date={thiscity.date}
            time={thiscity.time}
            onDelete={deleteNote}
            />);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="totalpro">
        <div className="analogpro"><Appwatch /></div>
        <div className="worldpro">
          <CreateArea onAdd={addNote} />
          <div className="alltimes">{notes.map(handleNotes)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
