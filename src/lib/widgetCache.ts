type CacheEntry = {
  html: string;
  timestamp: number;
};

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

class WidgetCache {
  private static instance: WidgetCache;
  private cache: Map<string, CacheEntry>;
  private preloadQueue: Set<string>;

  private constructor() {
    this.cache = new Map();
    this.preloadQueue = new Set();
  }

  static getInstance(): WidgetCache {
    if (!WidgetCache.instance) {
      WidgetCache.instance = new WidgetCache();
    }
    return WidgetCache.instance;
  }

  async getWidget(url: string): Promise<string> {
    const cached = this.cache.get(url);
    const now = Date.now();

    if (cached && now - cached.timestamp < CACHE_DURATION) {
      return cached.html;
    }

    try {
      const response = await fetch(url);
      const html = await response.text();
      this.cache.set(url, { html, timestamp: now });
      return html;
    } catch (error) {
      console.error('Failed to fetch widget:', error);
      throw error;
    }
  }

  preloadWidget(url: string): void {
    if (this.preloadQueue.has(url)) return;
    
    this.preloadQueue.add(url);
    
    // Use requestIdleCallback for preloading during browser idle time
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        this.getWidget(url)
          .finally(() => this.preloadQueue.delete(url));
      });
    } else {
      setTimeout(() => {
        this.getWidget(url)
          .finally(() => this.preloadQueue.delete(url));
      }, 0);
    }
  }

  clearCache(): void {
    this.cache.clear();
  }
}
