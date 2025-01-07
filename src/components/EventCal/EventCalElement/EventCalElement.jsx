import "./EventCalElement.css";
import EventCard from "./EventCard/EventCard.jsx";
import { useEffect, useState } from "react";

import supabase from "../../../utils/supabaseClient.js";

export default function EventCalElement({ setPageCount, pageView, pageIndex }) {
  const [eventsData, setEventsData] = useState(null);
  const [displayEventsData, setDisplayEventsData] = useState(null);
  // const [pastEventsData, setPastEventsData] = useState(null);
  // const [upcomingEventsData, setUpcomingEventsData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      const { data, error } = await supabase.from("event").select();

      if (error) {
        setFetchError("Could not fetch data from supabase");
        console.error(error);
        setEventsData(null);
        setPageCount(null);
      }

      if (data) {
        if (data.length < 1) {
          setFetchError("There is no data in the supabase table");
          console.error(
            "SUPABASE ERROR: There is no data in the supabase table"
          );
          setPageCount(null);
        } else {
          const sortedData = data.sort((a, b) => a.id - b.id);

          setFetchError(null);
          setEventsData(sortedData);
        }
      }
    };

    fetchEventsData();
  }, []);

  useEffect(() => {
    function organizeEvents() {
      if (eventsData) {
        const currentDate = new Date();
        const pastEvents = [];
        const upcomingEvents = [];
        let i = 0;
        let j = 0;
        let k = 1;

        while (i < eventsData.length) {
          let eventDate = new Date(eventsData[i].start_date);

          if (eventDate < currentDate) {
            const currentPastEventsIndex = Math.floor(j / 6);

            if (j % 6 !== 0) {
              pastEvents[currentPastEventsIndex].push(eventsData[i]);
            } else {
              pastEvents.push([eventsData[i]]);
            }

            j++;
          } else {
            const currentUpcomingEventsIndex = Math.floor(k / 6);

            if (k % 6 !== 0) {
              upcomingEvents[currentUpcomingEventsIndex].push(eventsData[i]);
            } else {
              upcomingEvents.push([eventsData[i]]);
            }

            k++;
          }

          i++;
        }
        setDisplayEventsData({ past: pastEvents, upcoming: upcomingEvents });
      }
    }

    organizeEvents();
  }, [eventsData]);

  useEffect(() => {
    if (pageView && displayEventsData) {
      setPageCount(Math.ceil(displayEventsData[pageView].length || 0));
    }
  }, [displayEventsData, pageView]);

  return (
    <section className="event-cal">
      {fetchError && <p className="event-cal__error-msg">{fetchError}</p>}

      {/* POPULATE CARDS VIA MAPPING */}
      {displayEventsData &&
        displayEventsData[pageView].length > 0 &&
        displayEventsData[pageView][pageIndex].map((event) => {
          const {
            id,
            title,
            image,
            description,
            start_date,
            attendees,
            hyper_link,
          } = event;

          // REFORMAT DATE
          const date = new Date(start_date);

          const simpleDate = new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(date);
          //

          return (
            <div key={id} className="event-cal__section">
              <time className="event-cal__date" dateTime={start_date}>
                {simpleDate.toUpperCase()}
              </time>
              <div className="event-cal__divider">
                <div className="event-cal__dot"></div>
                <div className="event-cal__line"></div>
              </div>
              <EventCard
                date={date}
                dateStr={start_date}
                name={title}
                description={description}
                img={image}
                attendees={attendees}
                eventLink={hyper_link}
              />
            </div>
          );
        })}
      {/* END OF MAPPING */}
    </section>
  );
}
