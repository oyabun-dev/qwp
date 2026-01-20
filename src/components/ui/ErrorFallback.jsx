import React from 'react';
import Button from '../ui/Button';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
      <div className="max-w-xl w-full bg-red-50 border border-red-100 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Something went wrong</h2>
        <p className="text-gray-700 mb-6">
          The application encountered an unexpected error.
        </p>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-xs text-red-600 font-mono whitespace-pre-wrap">
            {error.message}
          </pre>
          {error.stack && (
             <pre className="text-[10px] text-gray-400 font-mono mt-2 whitespace-pre-wrap">
                {error.stack.slice(0, 300)}...
             </pre>
          )}
        </div>

        <Button 
            variant="brand" 
            onClick={resetErrorBoundary}
            className="w-full bg-black text-white hover:bg-gray-800"
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorFallback;
