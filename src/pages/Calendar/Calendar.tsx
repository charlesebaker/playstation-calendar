import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Loading, ErrorBox, Navigation, EventsGrid } from "@components";
import { useEvents } from "@hooks";
import { isValidYearMonth, getCurrentYearMonth } from "@utils";

export const Calendar = () => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const navigate = useNavigate();
  const { events, loading, error } = useEvents(year, month, true);
  const [isValidDate, setIsValidDate] = useState(false);

  useEffect(() => {
    if (!isValidYearMonth(year, month)) {
      navigate(`/${getCurrentYearMonth()}`, { replace: true });

      toast.error("Invalid year or month. Redirected to current year and month.");
    }

    setIsValidDate(true);
  }, [year, month, navigate]);

  // If the date is not valid, show a loading spinner.
  if (!isValidDate) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <Navigation />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorBox message={error?.message ?? ""} />
      ) : (
        <EventsGrid events={events} year={year} month={month} />
      )}
    </div>
  );
};
