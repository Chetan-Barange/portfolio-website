import React from 'react';
import { CogIcon } from '@heroicons/react/solid';

const InProgress = ({ message = "This section is under development" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100 text-gray-700">
      <CogIcon className="w-16 h-16 text-blue-500 animate-spin mb-4" />
      <h3 className="text-xl font-semibold">{message}</h3>
      <p className="text-gray-500 mt-2">Stay tuned for updates!</p>
    </div>
  );
};

export default InProgress;
