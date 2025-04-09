import React, { useState, useEffect } from 'react';

const StatusPing: React.FC = () => {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(true);

  useEffect(() => {
    const targetDate = new Date('2025-04-30T23:59:59Z'); // April 30, 2025 at the end of the day UTC
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      if (currentDate >= targetDate) {
        setIsApplicationsOpen(false);
        clearInterval(intervalId); // Stop the interval once the date is reached
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const pingColorClass = isApplicationsOpen ? 'bg-green-400' : 'bg-red-500';
  const statusText = isApplicationsOpen ? 'Applications open' : 'Applications closed';

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <span className="flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColorClass} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${pingColorClass}`}></span>
        </span>
      </div>
      <span className="text-sm font-medium text-gray-900">
        {statusText}
      </span>
    </div>
  );
};

export default StatusPing;