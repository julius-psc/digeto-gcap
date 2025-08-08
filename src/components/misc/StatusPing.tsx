import React, { useState, useEffect, useMemo } from 'react';
import { IconArrowRight } from '@tabler/icons-react';

const StatusPing: React.FC = () => {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);

  const cohortDates = useMemo(() => [
    new Date('2025-08-25T00:00:00Z'),
    new Date('2026-01-10T00:00:00Z'),
    // Add more cohorts here
  ], []);

  useEffect(() => {
    const now = new Date();

    const upcoming = cohortDates.find((date) => date > now);
    if (upcoming) {
      const openDate = new Date(upcoming);
      openDate.setMonth(openDate.getMonth() - 1);

      setIsApplicationsOpen(now >= openDate && now < upcoming);
    } else {
      setIsApplicationsOpen(false);
    }
  }, [cohortDates]);

  const statusColor = isApplicationsOpen ? 'bg-green-400' : 'bg-red-500';
  const statusText = isApplicationsOpen ? 'Applications open' : 'Applications closed';

  return (
    <div className="flex items-center space-x-4 rounded-full bg-black/10 backdrop-blur-md px-3 py-2">
      {/* Ping and Status */}
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center justify-center">
          <span className={`h-3 w-3 rounded-full ${statusColor} opacity-100 z-10`} />
          <span className={`absolute h-5 w-5 rounded-full ${statusColor} opacity-40`} />
        </div>
        <span className="text-sm text-black font-medium">{statusText}</span>
      </div>

      {/* Divider */}
      <div className="h-4 w-px bg-black/40" />

      {/* CTA */}
      <div className="flex items-center space-x-1 cursor-pointer">
        <span className="text-sm text-black/50 font-medium">Enroll now</span>
        <IconArrowRight size={16} className="text-gray-600 opacity-70" />
      </div>
    </div>
  );
};

export default StatusPing;