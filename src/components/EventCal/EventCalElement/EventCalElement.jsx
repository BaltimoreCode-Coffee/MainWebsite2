import "./EventCalElement.css";
import EventCard from "./EventCard/EventCard.jsx";
import { useEffect, useState } from "react";

import supabase from "../../../utils/supabaseClient.js";

export default function EventCalElement({ setPageCount, pageView, pageIndex, isMobile, endOfPageRef, setInitialPageView }) {
  const [eventsData, setEventsData] = useState(null);
  const [displayEventsData, setDisplayEventsData] = useState(null);
  // const [pastEventsData, setPastEventsData] = useState(null);
  // const [upcomingEventsData, setUpcomingEventsData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadedPages, setLoadedPages] = useState(1);

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
        // The following code will group the events into Past & Upcoming blocks and sort them by date
        const currentDate = new Date();
        
        const pastEvents = eventsData
          // Separate past events from data set
          .filter((event) => new Date(event.start_date) < currentDate)
          // Sort events in descending chronological order
          .sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

        const upcomingEvents = eventsData
          // Separate upcoming events from data set
          .filter((event) => new Date(event.start_date) >= currentDate)
          // Sort events in ascending chronological order
          .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
          // console.log(upcomingEvents.length !== 0);
          // Change initial load state of EventCalPage if there are upcoming events
          if (upcomingEvents.length !== 0) {
            setInitialPageView('upcoming');
          }
          

        // Group events in blocks of 6 for pagination or adding to infinite scrolling
        function groupEvents(events) {
          const grouped = [];
          for (let i = 0; i < events.length; i += 6) {
            grouped.push(events.slice(i, i + 6));
          }
          return grouped;
        }

        setDisplayEventsData({
          past: groupEvents(pastEvents),
          upcoming: groupEvents(upcomingEvents)
        });
      }
    }

    organizeEvents();
  }, [eventsData]);

  useEffect(() => {
    if (pageView && displayEventsData) {
      setPageCount(Math.ceil(displayEventsData[pageView].length || 0));
    }
  }, [displayEventsData, pageView]);

  // Handle loading next page
  useEffect(() => {
    if (endOfPageRef.current && isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (
            // The following check eliminates the error "Cannot read properties of null (reading 'past')"
            entry.isIntersecting && 
            displayEventsData &&
            displayEventsData[pageView] &&
            loadedPages < displayEventsData[pageView].length) {
            setLoading(true)
            // console.log('loading more events');

            // Add delay before loading more events
            setTimeout(() => {
              setLoadedPages((prev) => prev + 1); // Load the next page
              // console.log('Loading complete');
              setLoading(false);
            }, 750); // 0.5 second delay
          }
        },
        {threshold: 1.0}
      );

      observer.observe(endOfPageRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isMobile, displayEventsData, pageView, loadedPages, endOfPageRef]);

  return isMobile ? (
    // Mobile view with infinite scrolling
    <section className="event-cal">
      {fetchError && <p className = 'event-cal__error-msg'>{fetchError}</p>}

      {/* POPULATE CARDS VIA MAPPING */}
      {displayEventsData &&
        displayEventsData[pageView].slice(0, loadedPages).map((events) => {
          return events.map((event) => {
            const {
              id, 
              title, 
              image, 
              description, 
              start_date, 
              attendees, 
              hyper_link,
              location
            } = event;

            // REFORMAT DATE
            const date = new Date(start_date);
            const currentDate = new Date();

            const simpleDate = new Intl.DateTimeFormat('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            }).format(date);

            return (
              <div key = {id} className = 'event-cal__section'>
                <time dateTime={start_date} className="event-cal__date">
                  {simpleDate.toUpperCase()}
                </time>
                <div className="event-cal__divider">
                  <div className="event-cal__dot"></div>
                  <div className="event-cal__line"></div>
                </div>
                <EventCard 
                  date = {date}
                  dateStr = {start_date}
                  name = {title}
                  description = {description}
                  img = {image}
                  attendees = {attendees}
                  eventLink = {hyper_link}
                  location = {location}
                />
              </div>
            );
          });
        })
      }

      {/* END OF MAPPING */}
      {/* Trigger point for infinite scrolling */}
      <div ref = {endOfPageRef} className = 'event-cal__load-trigger'></div>

      <div className="event-cal__loading">
        {loading && <p>Loading more events...</p>}
      </div>
    </section>
  ) : (
    // Desktop view with pagination
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
            location
          } = event;

          // REFORMAT DATE
          const date = new Date(start_date);
          const currentDate = new Date();

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
                location = {location}
              />
            </div>
          );
        })}
      {/* END OF MAPPING */}
    </section>
  );
}
