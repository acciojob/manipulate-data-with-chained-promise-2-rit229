//your JS code here. If required.
function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolves after 3 seconds
    });
}

manipulateArray()
    .then((array) => {
        // Step 1: Filter out odd numbers
        const evenNumbers = array.filter(num => num % 2 === 0);
        
        // Update the output after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('output').innerText = evenNumbers.join(',');
                resolve(evenNumbers);
            }, 1000); // Delay of 1 second
        });
    })
    .then((evenNumbers) => {
        // Step 2: Multiply even numbers by 2
        const multipliedByTwo = evenNumbers.map(num => num * 2);
        
        // Update the output after 2 seconds
        setTimeout(() => {
            document.getElementById('output').innerText = multipliedByTwo.join(',');
        }, 2000); // Delay of 2 seconds
    });
