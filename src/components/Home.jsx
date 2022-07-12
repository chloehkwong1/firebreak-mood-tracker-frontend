import React, { useState, useEffect } from "react";

function Home() {
  const [moodEntry, setMoodEntry] = useState([]);

  const apiRoot = process.env.REACT_APP_API_ROOT;

  useEffect(() => {
    fetch(apiRoot)
      .then((res) => res.json())
      .then((data) => setMoodEntry(data));
  }, []);

  const formatDate = (entryDate) => {
    var dateToFormat = new Date(entryDate);
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var formattedDate = dateToFormat.toLocaleDateString("default", options);
    return formattedDate;
  };

  const formatTime = (entryTime) => {
    const timeToFormat = new Date(entryTime);
    const formattedTime = timeToFormat.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (formattedTime[0] === "0") return formattedTime.slice(1);
    return formattedTime;
  };

  //   slice(0) is used to make a shallow copy of the array.
  const renderMoodEntries = () =>
    moodEntry
      .slice(0)
      .reverse()
      .map((item, index) => (
        <ul key={`mood-entry-list-item-${index}`}>
          <div className="note">
            <h1>
              On {formatDate(item.time)} at {formatTime(item.time)}, you felt:
              <div>{item.mood}</div>
            </h1>
            <span>
              {item.mood_influences && (
                <div>The reason you gave was: {item.mood_influences}</div>
              )}{" "}
            </span>
          </div>
        </ul>
      ));

  return (
    <div className="App">
      <div>{renderMoodEntries()}</div>
    </div>
  );
}

export default Home;
