window.addEventListener('load', async e => {

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');

        } catch (error) {
            console.log('SW failed');
        }
    }
});

