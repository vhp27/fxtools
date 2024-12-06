// Widget style configurations
export const widgetStyles = {
  currency: {
    topPane: 'YmFja2dyb3VuZDogI2ZmZmZmZjsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxNnB4OyBtYXJnaW4tYm90dG9tOiAxNnB4Ow==',
    bottomPane: 'YmFja2dyb3VuZDogI2ZmZmZmZjsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxNnB4Ow==',
    button: 'YmFja2dyb3VuZDogIzAwNzBmMzsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDhweCAxNnB4OyBmb250LXdlaWdodDogNTAwOyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDsgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTs=',
    title: 'Y29sb3I6ICMxYTFhMWE7IGZvbnQtc2l6ZTogMS4ycmVtOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAxcmVtOw==',
    textbox: 'YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODsgY29sb3I6ICMxYTFhMWE7IGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7IGJvcmRlci1yYWRpdXM6IDZweDsgcGFkZGluZzogOHB4IDEycHg7IGZvbnQtc2l6ZTogMXJlbTsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7'
  },
  position: {
    topPane: 'YmFja2dyb3VuZDogI2ZmZmZmZjsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTsgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7IHBhZGRpbmc6IDE2cHg7',
    bottomPane: 'YmFja2dyb3VuZDogI2ZmZmZmZjsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTsgYm9yZGVyLXRvcDogbm9uZTsgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7IHBhZGRpbmc6IDE2cHg7',
    button: 'YmFja2dyb3VuZDogIzAwNzBmMzsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDhweCAxNnB4OyBmb250LXdlaWdodDogNTAwOyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDsgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTs=',
    title: 'Y29sb3I6ICMxYTFhMWE7IGZvbnQtc2l6ZTogMS4ycmVtOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAxcmVtOw==',
    textbox: 'YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODsgY29sb3I6ICMxYTFhMWE7IGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7IGJvcmRlci1yYWRpdXM6IDZweDsgcGFkZGluZzogOHB4IDEycHg7IGZvbnQtc2l6ZTogMXJlbTsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7'
  }
};

// Widget error handling script
export const widgetErrorScript = `
  // Override fetch to handle widget logging
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0]?.url || args[0];
    if (typeof url === 'string' && url.includes('/widgets/log')) {
      return Promise.resolve(new Response('{"status":"success"}', {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    return originalFetch.apply(this, args);
  };

  // Suppress specific console errors
  const originalConsoleError = console.error;
  console.error = function(...args) {
    const errorMessage = args[0]?.toString() || '';
    if (
      errorMessage.includes('Blocked autofocusing') ||
      errorMessage.includes('Content Security Policy') ||
      errorMessage.includes('widgets/log')
    ) {
      return;
    }
    return originalConsoleError.apply(this, args);
  };

  // Override postMessage handling
  window.addEventListener('message', function(event) {
    if (event.origin === 'https://www.cashbackforex.com') {
      try {
        const data = event.data;
        if (data && data.type === 'log') {
          event.stopPropagation();
          return;
        }
      } catch (e) {}
    }
  }, true);
`;
