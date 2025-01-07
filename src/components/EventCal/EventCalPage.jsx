import { useState } from "react";
import EventCalElement from "./EventCalElement/EventCalElement";
import "./EventCalPage.css";
import PaginationControlled from "../PaginationControlled/PaginationControlled";

export default function EventCalPage() {
  const [pageCount, setPageCount] = useState(0);
  const [pageView, setPageView] = useState("past");
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  function handleUpcomingPageViewClk() {
    setPageView("upcoming");
  }

  function handlePastPageViewClk() {
    setPageView("past");
  }

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
        <EventCalElement
          setPageCount={setPageCount}
          pageView={pageView}
          pageIndex={page - 1}
        />
      </main>
      <PaginationControlled
        pageCount={pageCount}
        classes="event-cal-pg__pagination"
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
