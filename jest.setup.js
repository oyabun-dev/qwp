import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

Object.assign(global, { TextEncoder, TextDecoder });

class IntersectionObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}
Object.assign(global, { IntersectionObserver });

class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}
Object.assign(global, { ResizeObserver });
