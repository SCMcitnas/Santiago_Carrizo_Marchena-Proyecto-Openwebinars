if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
    .then('Service Worker registrado')
    .catch(console.error);
} else {
    console.log('Tu navegador no soporta Service Workers');
}