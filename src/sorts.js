function quickSort(numbers) {
    sort(numbers, 0, numbers.length - 1);

    return numbers;

    function sort(numbers, left, right) {
        if (left < right) {
            const partitionIndex = partition(numbers, left, right);

            sort(numbers, left, partitionIndex - 1);
            sort(numbers, partitionIndex + 1, right)
        }
    }

    function partition(numbers, left, right) {
        let i = left;
        const pivot = numbers[right];

        for(let j = left; j <= right - 1; j++) {
            if (numbers[j] <= pivot) {
                _swap(numbers, i, j);

                i++;
            }
        }

        _swap(numbers, i, right);

        return i;
    }
}

function insertionSort(numbers) {
    for(let i = 1; i < numbers.length; i++)
    for(let j = i; j > 0 && numbers[j - 1] > numbers[j]; j--)
        _swap(numbers, j - 1, j);

    return numbers;
}

function bubbleSort(numbers) {
    const length = numbers.length;

    for(let i = 0; i < length - 1; i++)
    for(let j = 0; j < length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1])
            _swap(numbers, j + 1, j);
    }
    
    return numbers;
}

function _swap(numbers, left, right) {
    const temp = numbers[left];
    
    numbers[left] = numbers[right];
    numbers[right] = temp;
}