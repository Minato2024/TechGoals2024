document.addEventListener('DOMContentLoaded', () => {

    function updateTimeAndDay() {
        const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
        const currentDay = document.querySelector('[data-testid="currentDay"]');
        
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });

        currentTimeUTC.textContent = utcTime;
        currentDay.textContent = day;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);

    console.log('Page loaded successfully!');
});
