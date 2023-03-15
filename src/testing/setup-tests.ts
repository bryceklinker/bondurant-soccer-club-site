import crypto from 'crypto';
import '@testing-library/jest-dom';

Object.defineProperty(global, 'crypto', {
    value: {
        randomUUID: crypto.randomUUID
    }
});
