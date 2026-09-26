// ثبت Service Worker برای PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registered:', reg))
        .catch(err => console.error('Service Worker registration failed:', err));
}

document.getElementById('testBtn').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerHTML = '✅ دکمه کار می‌کنه!<br>تاریخ: ' + new Date().toLocaleString('fa-IR');
});

console.log('اپلیکیشن لود شد!');
