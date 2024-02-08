import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { formatYearMonth, getPrevMonth, getNextMonth } from "@utils";

export const Navigation = () => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const navigate = useNavigate();

  const handleGoToPrevMonth = useCallback(() => {
    navigate(`/${getPrevMonth(year, month)}`);
  }, [year, month, navigate]);

  const handleGoToNextMonth = useCallback(() => {
    navigate(`/${getNextMonth(year, month)}`);
  }, [year, month, navigate]);

  return (
    <div className="flex w-full justify-between border-b border-gray-300 py-4">
      <button onClick={handleGoToPrevMonth}>
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <span className="text-xl md:text-2xl lg:text-4xl">{formatYearMonth(year, month)}</span>
      <button onClick={handleGoToNextMonth}>
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
