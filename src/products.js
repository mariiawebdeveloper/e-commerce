import product1 from "./assets/products/1.svg";
import product2 from "./assets/products/2.svg";
import product3 from "./assets/products/3.svg";
import product4 from "./assets/products/4.svg";
import product5 from "./assets/products/5.svg";
import product6 from "./assets/products/6.svg";

export const PRODUCTS = [
    {
        id: 1,
        productName: "Apple Macbook Air 13",
        price: 99999.0,
        productImage: product1,
        category: 'Laptop',
        categoryName: 'Ноутбуки',
        imageSlider: [
            'https://image.ceneostatic.pl/data/products/99105003/i-apple-macbook-air-13-3-m1-8gb-256gb-macos-mgn63zea.jpg',
            'https://allegro.stati.pl/AllegroIMG/PRODUCENCI/APPLE/MacBook%20Air/fresh/a8.jpg',
            'https://www.apple.com/v/mac/home/bk/images/meta/mac__bfa414svyuc2_og.png'],
        description: ["Найтонший і найлегший ноутбук від Apple стає надпотужним завдяки чипу Apple M1\n" +
        "Легко виконуйте будь-які завдання завдяки надшвидкісному 8-ядерному центральному процесору. Графічний процесор із щонайбільше 8 ядрами забезпечує відмінне зображення в додатках та іграх зі складною графікою. 16-ядерна система Neural Engine прискорює виконання всіх операцій, у яких використовується машинне навчання. Конструкція без вентилятора гарантує безшумну роботу. А ще новий MacBook Air побив власний рекорд роботи від акумулятора — тепер він працює без підзарядки до 18 годин. Досі ідеально портативний. А тепер ще й набагато потужніший."]
    },
    {
        id: 2,
        productName: "Samsung Galaxy S21 Ultra",
        price: 3000.0,
        productImage: product2,
        category: 'phone',
        categoryName: 'Смартфони',
        imageSlider: [
            'https://ae01.alicdn.com/kf/S1f629d815c1143e99e0a7e4d843061ed1/Samsung-Galaxy-S21-Ultra-5G-G998N-6-8-256GB-ROM-12GB-RAM-Exynos-NFC-oryginalny-odblokowany.jpg_640x640.jpg',
            'https://m.media-amazon.com/images/I/81caRKlA-zL._AC_SY450_.jpg',
            'https://images.samsung.com/is/image/samsung/assets/id/2201/galaxy-s21-5g/models/images/galaxy-s21-5g_models_colors_phantom-violet.png'
        ],
        description: "Samsung Galaxy S21 Ultra може похвалитися новим Dynamic AMOLED 2x екраном з адаптивною частотою оновлення 120 Гц, що суттєво покращує плавність роботи оболонки та додатків. Він має дуже високий рівень яскравості, а завдяки склу Victus його поверхня ідеально гладка і дуже міцна. Єдиним недоліком є ​​спотворення білого кольору під час відхилення невеликих кутів."

    },
    {
        id: 3,
        productName: "Apple Airpods PRO",
        price: 1699.0,
        productImage: product3,
        category: 'music',
        categoryName: 'Музика',
        imageSlider: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
            'https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/41/4118594/Sluchawki-douszne-APPLE-AirPods-Pro-II-Bialy-02.JPG',
            'https://a.allegroimg.com/original/117adf/c6e1a2f7445db0ce8812dde399a6/Pudelko-Apple-AirPods-Pro-Oryginalne-TGF'
        ],
        description: "Навушники AirPods Pro оснащені новим чіпом H2, створеним Apple. Чудова якість звуку завдяки йому. Система злагоджено працює зі спеціально розробленим конвертером і підсилювачем, завдяки чому високі, ліричні ноти і глибокі, соковиті баси звучать просто захоплююче. І кожен звук забезпечує ще багатший досвід."
    },
    {
        id: 4,
        productName: "JBL Go Essential",
        price: 1500.0,
        productImage: product4,
        category: 'music',
        categoryName: 'Музика',
        imageSlider: [
            'https://a.allegroimg.com/original/1148df/a63391194035a302faa11baa6982/Glosnik-mobilny-JBL-GO-Essential-Niebieski',
            'https://satysfakcja.stati.pl/allegro_new/RTV/audio/JBL//GoEssential_RED/f1.jpg',
            'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/3/pr_2022_3_3_8_23_26_479_07.jpg'
        ],
        description: "JBL Go Essential — це дуже компактна портативна колонка з підтримкою Bluetooth. Він пропонує до 5 годин бездротового потокового передавання музики в якості JBL Original Pro Sound. Крім того, динамік має рейтинг IPX7, тож вам не доведеться турбуватися про випадкові бризки."
    },
    {
        id: 5,
        productName: "Breville Coffee Machine",
        price: 6690.0,
        productImage: product5,
        category: 'kitchen',
        categoryName: 'Кухня',
        imageSlider: [
            'https://www.breville.com/content/dam/breville/ca/assets/espresso/finished-goods/bes870/bes870bss1bca1/images/pdp0.jpg',
            'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/481728-Product-0-I-637405095136607683.jpg?v=1681896545',
            'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES980/BES980XL.jpg?pdp'
        ],
        description: "Система попереднього заварювання низького тиску\n" +
            "альтернативний рядок\n" +
            "Система попереднього заварювання низького тиску подає воду під тиском від 2 до 4 бар до сітчастого фільтра. Це дозволяє каві в ситечку набрякнути, вивільнити свій аромат і смак, щоб потім, коли застосовано повний тиск, було забезпечено не тільки максимально рівномірне витягування кави, але й щоб еспресо точно відповідав вашим уподобанням.\n" +
            "\n" +
            "Електронна PID система контролю температури\n" +
            "альтернативний рядок\n" +
            "Електронна система контролю температури PID дозволяє не тільки регулювати температуру води під час екстракції кави, але, перш за все, дозволяє підтримувати її постійний рівень, що особливо важливо при приготуванні м'якого еспресо. Завдяки потужності 1700 Вт результати завжди чудові, тиск пари високий, а обслуговування швидке."
    },
    {
        id: 6,
        productName: "LG TV Oled R",
        price: 20300,
        productImage: product6,
        category: 'TV',
        categoryName: 'ТВ',
        imageSlider: [
            'https://content1.rozetka.com.ua/goods/images/big/314482376.jpg',
            'https://content1.rozetka.com.ua/goods/images/big/314482389.jpg ',
            'https://content1.rozetka.com.ua/goods/images/big/314482400.jpg'
        ],
        description: "OLED-телевізор із яскравим зображенням\n" +
            "Brightness Booster\n" +
            "\n" +
            "Brightness Booster посилює яскравість пікселів з автономним підсвічуванням в телевізорах LG OLED. У поєднанні з процесором α9 Gen 5 AI вона забезпечує до 20% більше яскравості. Тепер зображення стало виразнішим завдяки максимальній світловіддачі."
    },

];