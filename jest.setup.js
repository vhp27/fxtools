// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver
