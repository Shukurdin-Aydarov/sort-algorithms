(function() {
    main();
})();

function main() {
    const tests = generateTests(10000, 999999);
     
    let result = run(quickSort, tests);
    updateBenchmark("quick-sort", result.time);

    result = run(insertionSort, tests);
    updateBenchmark("insertion-sort", result.time);

    result = run(bubbleSort, tests);
    updateBenchmark("bubble-sort", result.time);
}

function run(sortFunc, tests) {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    tests = sortFunc([...tests]); 
    stopwatch.stop();

    return {
       time: stopwatch.milliseconds, 
       sortedData: tests 
    };
}

function generateTests(count, max) {
    if(typeof(count) !== "number" || count <= 0)
        throw new Error("count should be number and greater than 0");

    if (typeof(max) !== "number" || max <= 0)
        throw new Error("max should be number and greater than 0");

    const generateRandomNumber = max => {
        return Math.random() * Math.floor(max);
    };
    
    const numbers = [];

    for(let i = 0; i < count; i++)
        numbers.push(generateRandomNumber(max));

    return numbers;
}

function updateBenchmark(id, time) {
    const root = document.getElementById(id);
    const percent = (1 - ((100 - time) / 100)) * 100;

    const progress = root.getElementsByTagName("b")[0];
    progress.innerText = progress.innerHTML.replace("%progress%", time.toFixed(3));

    const bench = root.getElementsByClassName("bench")[0];
    bench.style.width = `${percent}%`;
}

function compute(salary, bonus, additional) {
    let s = salary * 12;
    s = s + s * bonus * 4;

    return s + additional;
}