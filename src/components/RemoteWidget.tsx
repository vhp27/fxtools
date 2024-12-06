'use client';

import { useEffect, useRef } from 'react';

interface RemoteWidgetProps {
  widgetId: string;
  type: string;
  width?: number;
  showTitle?: boolean;
  showChartLinks?: boolean;
  showEmbedButton?: boolean;
  compactType?: 'large' | 'small';
  customStyles?: {
    topPane?: string;
    bottomPane?: string;
    button?: string;
    title?: string;
    textbox?: string;
  };
}

// Keep track of script loading state globally
let scriptLoaded = false;
let scriptLoading = false;
const pendingCallbacks: (() => void)[] = [];

const loadScript = () => {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading) {
    return new Promise<void>((resolve) => {
      pendingCallbacks.push(resolve);
    });
  }

  scriptLoading = true;
  return new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
    script.onload = () => {
      // Modify RemoteCalc to prevent logging and handle cross-origin issues
      if ((window as any).RemoteCalc) {
        const originalRemoteCalc = (window as any).RemoteCalc;
        (window as any).RemoteCalc = (config: any) => {
          const modifiedConfig = {
            ...config,
            IframeSandbox: 'allow-same-origin allow-scripts allow-popups allow-forms allow-presentation',
            AllowFullscreen: true,
            IsEnableLogging: false,
            DisableAutoFocus: true,
            DisableRemoteLogging: true,
            DisableAnalytics: true,
          };

          // Override the logging function
          (window as any).cbfxLog = () => {};
          
          return originalRemoteCalc(modifiedConfig);
        };
      }
      scriptLoaded = true;
      scriptLoading = false;
      pendingCallbacks.forEach(cb => cb());
      pendingCallbacks.length = 0;
      resolve();
    };
    script.onerror = () => {
      scriptLoading = false;
      resolve(); // Resolve anyway to prevent hanging
    };
    document.head.appendChild(script);
  });
};

const RemoteWidget: React.FC<RemoteWidgetProps> = ({
  widgetId,
  type,
  width = 700,
  showTitle = false,
  showChartLinks = false,
  showEmbedButton = false,
  compactType = 'large',
  customStyles = {},
}) => {
  const initialized = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add custom CSS to handle widget styling and behavior
    const style = document.createElement('style');
    style.textContent = `
      #${widgetId} .cbfx-brand,
      #${widgetId} .cbfx-powered-by,
      #${widgetId} .cbfx-logo,
      #${widgetId} .cbfx-new-window,
      #${widgetId} [title="Open in new window"],
      #${widgetId} a[target="_blank"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      #${widgetId} {
        background: transparent !important;
      }
      #${widgetId} .cbfx-calculator {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      #${widgetId} iframe {
        display: block !important;
        width: 100% !important;
        height: ${type === 'position-size-calculator' ? '700px' : '500px'} !important;
        border: none !important;
      }
      #${widgetId} .cbfx-calculator-container {
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);

    const initializeWidget = async () => {
      try {
        if (!scriptLoaded && !scriptLoading) {
          await loadScript();
        } else if (scriptLoading) {
          await new Promise<void>((resolve) => {
            pendingCallbacks.push(resolve);
          });
        }

        if ((window as any).RemoteCalc) {
          (window as any).RemoteCalc({
            ContainerId: widgetId,
            Calculator: type,
            ContainerWidth: width.toString(),
            IsDisplayTitle: showTitle,
            IsShowChartLinks: showChartLinks,
            IsShowEmbedButton: showEmbedButton,
            CompactType: compactType,
            TopPaneStyle: customStyles.topPane,
            BottomPaneStyle: customStyles.bottomPane,
            ButtonStyle: customStyles.button,
            TitleStyle: customStyles.title,
            TextboxStyle: customStyles.textbox,
            IsEnableLogging: false,
            DisableAutoFocus: true,
            DisableRemoteLogging: true,
            DisableAnalytics: true,
            IframeSandbox: 'allow-same-origin allow-scripts allow-popups allow-forms allow-presentation',
            AllowFullscreen: true,
            Url: "https://www.cashbackforex.com",
          });
          initialized.current = true;

          // Hide loading after a short delay to ensure widget is rendered
          setTimeout(() => {
            const loadingElement = document.getElementById(`${widgetId}-loading`);
            if (loadingElement) {
              loadingElement.style.display = 'none';
            }
          }, 1000);
        }
      } catch (error) {
        console.error('Failed to initialize widget:', error);
        const loadingElement = document.getElementById(`${widgetId}-loading`);
        if (loadingElement) {
          loadingElement.innerHTML = '<p class="text-red-500">Failed to load calculator. Please refresh the page.</p>';
        }
      }
    };

    if (!initialized.current) {
      initializeWidget();
    }

    return () => {
      style.remove();
    };
  }, [widgetId, type, width, showTitle, showChartLinks, showEmbedButton, compactType, customStyles]);

  return (
    <div 
      ref={containerRef}
      id={widgetId} 
      className="bg-white rounded-lg shadow-sm p-4 min-h-[450px] relative"
    >
      <div className="absolute inset-0 flex items-center justify-center" id={`${widgetId}-loading`}>
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading calculator...</p>
        </div>
      </div>
    </div>
  );
};

export default RemoteWidget;
