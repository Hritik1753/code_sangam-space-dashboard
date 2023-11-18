document.addEventListener('DOMContentLoaded', function () {
    const newsList = document.getElementById('news-list');

    // Replace 'YOUR_API_KEY' with an actual API key from a news API provider
    const apiKey = '67a3a76a2574410bbf4ac599cc65a0ec';
    const apiUrl = `https://newsapi.org/v2/everything?q=International%20Space%20Station&apiKey=${apiKey}`;

    // Fetch news data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                data.articles.forEach(article => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    `;
                    newsList.appendChild(listItem);
                });
            } else {
                console.error('Error fetching news data:', data.message || 'Unknown error');
            }
        })
        .catch(error => console.error('Error fetching news data:', error));
});
