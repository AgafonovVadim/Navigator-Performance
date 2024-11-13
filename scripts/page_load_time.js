(function() {
    function displayLoadTimeStats() {
        const [navigation] = performance.getEntriesByType("navigation");

        if (navigation) {
            const pageLoadTime = navigation.loadEventEnd - navigation.startTime;
            const domContentLoadedTime = navigation.domContentLoadedEventEnd - navigation.startTime;
            const responseTime = navigation.responseEnd - navigation.requestStart;

            const footer = document.querySelector('footer');
            const statsDiv = document.createElement('div');
            statsDiv.style.fontSize = '12px';
            statsDiv.style.marginTop = '20px';
            statsDiv.style.color = '#aaa';

            statsDiv.innerHTML = `
                    <p>Время загрузки страницы: ${Math.round(pageLoadTime)} мс</p>
                    <p>Время до DOMContentLoaded: ${Math.round(domContentLoadedTime)} мс</p>
                    <p>Время ответа сервера: ${Math.round(responseTime)} мс</p>
                `;

            footer.appendChild(statsDiv);
        } else {
            console.warn("Navigation timing entry is not available.");
        }
    }

    window.addEventListener('load', displayLoadTimeStats);
})();
