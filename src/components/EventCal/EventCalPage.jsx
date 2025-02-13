import { useEffect, useRef, useState } from "react";
import EventCalElement from "./EventCalElement/EventCalElement";
import "./EventCalPage.css";
import PaginationControlled from "../PaginationControlled/PaginationControlled";

export default function EventCalPage() {
  const [pageCount, setPageCount] = useState(0);
  const [pageView, setPageView] = useState("past");
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1060) // Determine if the view is mobile

  const endOfPageRef = useRef(null); // Reference to find end of page and trigger loading, if applicable

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  function handleUpcomingPageViewClk() {
    setPageView("upcoming");
  }

  function handlePastPageViewClk() {
    setPageView("past");
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1060);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="event-cal-pg">
      <h1 className="event-cal-pg__title">
        Code Coffee Events: Connect, Learn, and Innovate Together!
      </h1>
      <div className="event-cal-pg__divider"></div>
      <main className="event-cal-pg__main">
        <div className="event-cal-pg__tabs">
          <button
            className={`event-cal-pg__btn${
              pageView === "upcoming" ? "" : " event-cal-pg__btn_unselected"
            }`}
            type="button"
            onClick={handleUpcomingPageViewClk}
          >
            Upcoming
          </button>
          <button
            className={`event-cal-pg__btn${
              pageView === "past" ? "" : " event-cal-pg__btn_unselected"
            }`}
            type="button"
            onClick={handlePastPageViewClk}
          >
            Past
          </button>
        </div>
        <div className="event-cal-pg__mobile-tabs">
          <div className="tab-container">
            {/* Button for Upcoming Events */}
            <div
              className = {`tab ${pageView === 'upcoming' ? 'active' : ''}`}
              onClick = {() => handleUpcomingPageViewClk()}
            >
              Upcoming
            </div>

            {/* Button for Past Events */}
            <div
              className = {`tab ${pageView === 'past' ? 'active' : ''}`}
              onClick = {() => handlePastPageViewClk()}
            >
              Past
            </div>
            <div
              className = {`slider ${pageView === 'past' ? 'slide-right' : ''}`}
            />
          </div>
        </div>
        <EventCalElement
          setPageCount={setPageCount}
          pageView={pageView}
          pageIndex={page - 1}
          isMobile = {isMobile} // Pass the mobile view flag to EventCalElement
          endOfPageRef = {endOfPageRef} // Pass the observer target for scroll listener
        />
      </main>
      {!isMobile && (
        <PaginationControlled
          pageCount={pageCount}
          classes="event-cal-pg__pagination"
          handlePageChange={handlePageChange}
        />
      )}
      {/* Observer Target Element */}
      <div ref = {endOfPageRef} className = 'event-cal-pg__observer'></div>
    </div>
  );
}
