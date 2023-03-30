import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
import { FakeServer } from './fake-server';
import { ResizeObserver } from './resize-observer';

function isIgnorableError(message: string): boolean {
    const match =
        message.match(/FocusTrap/) ??
        message.match(/Warning: An update to/) ??
        message.match(/Image not loaded/) ??
        message.match(/Warning: Function components cannot be given refs/);

    return match !== null;
}

beforeAll(() => {
    const error = console.error;
    const warn = console.warn;
    jest.spyOn(console, 'warn').mockImplementation((...args) => {
        if (typeof args[0] === 'string' && isIgnorableError(args[0])) {
            return;
        }
        warn(...args);
    });
    jest.spyOn(console, 'error').mockImplementation((...args) => {
        if (typeof args[0] === 'string' && isIgnorableError(args[0])) {
            return;
        }
        error(...args);
    });
    FakeServer.listen();
});

beforeEach(() => {
    sessionStorage.clear();
    window.ResizeObserver = ResizeObserver;
    FakeServer.reset();
});

afterAll(() => {
    FakeServer.close();
});
