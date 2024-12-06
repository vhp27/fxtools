'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TradingWidgetProps {
  widgetUrl: string;
  title: string;
  height?: number;
}

export default function TradingWidget({ widgetUrl, title, height = 450 }: TradingWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '200px 0px', // Start loading 200px before widget comes into view
  });

  useEffect(() => {
    if (!inView) return;

    const loadWidget = async () => {
      try {
        // Create a temporary iframe to preload content
        const temp = document.createElement('iframe');
        temp.style.display = 'none';
        document.body.appendChild(temp);

        // Load content in temporary iframe
        if (temp.contentWindow) {
          temp.src = widgetUrl;
          await new Promise((resolve) => {
            temp.onload = resolve;
          });

          // Once loaded, quickly swap content to visible iframe
          if (iframeRef.current && temp.contentDocument) {
            const content = temp.contentDocument.documentElement.outerHTML;
            const doc = iframeRef.current.contentDocument;
            if (doc) {
              doc.open();
              doc.write(content);
              doc.close();
              setIsLoaded(true);
            }
          }
        }

        // Clean up temporary iframe
        document.body.removeChild(temp);
      } catch (err) {
        console.error('Failed to load widget:', err);
        setError('Failed to load calculator. Please try refreshing the page.');
      }
    };

    loadWidget();
  }, [inView, widgetUrl]);

  return (
    <div ref={ref} className="relative">
      {/* Placeholder/Loading State */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-50 animate-pulse flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading {title}...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div 
          className="absolute inset-0 bg-red-50 flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <div className="text-center text-red-600 p-4">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Actual Widget */}
      <iframe
        ref={iframeRef}
        title={title}
        width="100%"
        height={height}
        className={`border-0 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
  );
}
