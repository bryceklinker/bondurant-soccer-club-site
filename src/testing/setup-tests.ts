import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
import { FakeServer } from './fake-server';
import { ResizeObserver } from './resize-observer';

beforeAll(() => {
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
