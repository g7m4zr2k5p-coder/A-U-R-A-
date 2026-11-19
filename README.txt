AURA iPhone Starter

Bu klasör AURA'nın ilk arayüz prototipidir.

Dosyalar:
- index.html: uygulama ekranı
- style.css: siyah-mor tasarım
- app.js: sohbet arayüzü, dil/konuşma ayarları ve fotoğraf seçme
- manifest.webmanifest + sw.js: HTTPS üzerinde barındırıldığında ana ekrana eklenebilir PWA altyapısı

Önemli:
Bu sürüm gerçek bir yapay zekâya, hava durumu/haber servisine veya sosyal medya hesaplarına bağlı değildir. Sohbet yanıtları demo metnidir. Fotoğraf seçimi yalnızca arayüz demosudur; görsel analiz yapılmaz. Gerçek AI bağlantısı için daha sonra güvenli bir sunucu/API gerekir; API anahtarını HTML/JS içine koymayın.

Yalnızca iPhone ile ilerleme:
1. ZIP'i iPhone'da Dosyalar uygulamasına kaydedip açın.
2. Dosyaları HTTPS destekleyen bir statik site barındırıcısına yükleyin (ör. GitHub Pages; hesap ve kurulum gerekir).
3. Oluşan HTTPS adresini Safari'de açın.
4. Paylaş > Ana Ekrana Ekle.

Not: iOS'ta ses ve kamera izinleri Safari/ana ekran uygulaması üzerinden kullanıcı onayı ister. Ses seçenekleri cihazda bulunan seslere bağlıdır.
