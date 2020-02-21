class Stopwatch {
    constructor() {
        this._start = 0;
        this._end = 0;
    }

    start() {
        this._start = performance.now();
    }

    stop() {
        this._end = performance.now();
    }

    get milliseconds() {
        return this._end = this._start;
    }
}