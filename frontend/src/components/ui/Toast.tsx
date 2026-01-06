'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

export default function Toast({ message, type = 'info', duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
    }
  }, [message, duration]);

  if (!isVisible) return null;

  const bgColors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
  };

  const textColors = {
    success: 'text-green-800',
    error: 'text-red-700',
    info: 'text-blue-700',
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 ${bgColors[type]} ${textColors[type]} rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 -translate-y-2 translate-x-full'
      }`}
      role="alert"
    >
      <div className="flex items-center">
        {type === 'success' && (
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 4-1 1m6-4l4 1" />
          </svg>
        )}
        {type === 'error' && (
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l-4 2.5 0 2.5 0l-4l4 2.5" />
          </svg>
        )}
        {type === 'info' && (
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v11a1 1m1-4a1.1 1m4 0 2" />
          </svg>
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}
