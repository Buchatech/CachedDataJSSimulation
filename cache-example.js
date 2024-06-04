document.addEventListener('DOMContentLoaded', () => {
    const cacheKey = 'myDataCache';
    const cachedData = localStorage.getItem(cacheKey);
    const contentDiv = document.getElementById('content');

    if (cachedData) {
        console.log('Data loaded from cache');
        contentDiv.textContent = cachedData;
    } else {
        console.log('Fetching data from server');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                const dataString = JSON.stringify(data);
                localStorage.setItem(cacheKey, dataString);
                contentDiv.textContent = dataString;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                contentDiv.textContent = 'Failed to fetch data';
            });
    }
});
