function cekilis(basvuranlar) {
  // 1. İlk 5 kişi (slice ile doğrudan alınır)
  const ilkBes = basvuranlar.slice(0, 5);
  
  // 2. Her 10. kişi: 10., 20., 30., 40., 50.
  const onuncuIndexler = [9, 19, 29, 39, 49];
  
  // Her 10. kişiyi tek tek alıyoruz
  // includes veya döngü kullanmadan, ilk 5 ile tekrar eden olamaz çünkü dizide tekil kişi var
  const herOnuncu = [
    basvuranlar[onuncuIndexler[0]],
    basvuranlar[onuncuIndexler[1]],
    basvuranlar[onuncuIndexler[2]],
    basvuranlar[onuncuIndexler[3]],
    basvuranlar[onuncuIndexler[4]],
  ].filter(Boolean); // Boş veya undefined olan varsa çıkarır
  
  // 3. Rastgele kazananı seçmek için
  // İlk 5 ve her 10.'ları ayrı ayrı seçtik.
  // Rastgele seçilecek kişi, bu 10 kişiden farklı olmalı.
  
  // İlk 5 ve her 10.'lardan oluşan sabit bir dizi yapıyoruz
  const secilenler = [...ilkBes, ...herOnuncu];
  
  // Döngü ve includes kullanmadan, kalanları şöyle elde edebiliriz:
  // Başvuranların ilk 55 kişisini alalım (çünkü 50. kişinin index'i 49)
  // Sonra bu 55 kişiden sabit indexlerdeki kişileri slice ile çıkarabiliriz.
  
  // İlk 55 kişiyi alıyoruz (siz dilerseniz başvuranlar.length kadar yapabilirsiniz)
  const ilkAltiBes = basvuranlar.slice(0, 55);
  
  // 0-4 ve 9,19,29,39,49 indexli elemanları çıkaracağız
  // Bunu manuel olarak 5 grup slice ile yapalım:
  // Öncelikle 0-4 (ilkBes), 5-8, 10-18, 20-28, 30-38, 40-48, 50-54
  
  const parca1 = ilkAltiBes.slice(5, 9);    // 5,6,7,8
  const parca2 = ilkAltiBes.slice(10, 19);  // 10..18
  const parca3 = ilkAltiBes.slice(20, 29);  // 20..28
  const parca4 = ilkAltiBes.slice(30, 39);  // 30..38
  const parca5 = ilkAltiBes.slice(40, 49);  // 40..48
  const parca6 = ilkAltiBes.slice(50, 55);  // 50..54
  
  // Şimdi bu parçaları birleştirip kalanlar listesini oluşturuyoruz
  const kalanlar = [...parca1, ...parca2, ...parca3, ...parca4, ...parca5, ...parca6];

  // Rastgele biri
  const rastgeleKazanan = kalanlar.length > 0 ?
    kalanlar[Math.floor(Math.random() * kalanlar.length)]
    : null;

  return [...ilkBes, ...herOnuncu, rastgeleKazanan].filter(Boolean);
}
  