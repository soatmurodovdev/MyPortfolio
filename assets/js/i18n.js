// i18n.js — 4 tilli tarjima tizimi (UZ / EN / RU / TR)
// Website version: 3.0.0

(function () {
    const STORAGE_KEY = 'selected-language';
    const SUPPORTED = ['uz', 'en', 'ru', 'tr'];

    const translations = {
        uz: {
            nav_home: 'Bosh sahifa',
            nav_about: 'Profil',
            nav_pathway: "Ta'lim<br>Tajriba",
            nav_skills: 'Ko\'nikma<br>Til',
            nav_testimonials: 'Mehmon<br>fikri',
            nav_gallery: 'Foto<br>albom',
            nav_contact: 'Aloqa',

            settings_title: 'Sozlamalar',
            settings_language: 'Til',
            settings_theme: "Ko'rinish",
            settings_theme_hint: "Tungi / Kunduzgi rejim",
            settings_worldclock: "Jahon soati",
            tz_you: "O'zbekiston",
            tz_tr: 'Turkiya',
            tz_cy: 'Shim. Kipr',
            tz_local: 'Sizning vaqtingiz',

            hero_greeting: 'Salom, men',
            hero_description: "Mehmondo'stlik sohasida yuqori darajadagi xizmat ko'rsatishga bag'ishlanganman. Xalqaro kurort va mehmonxonalardagi mustahkam tajribam bilan har bir mehmonga benuqson xizmat va e'tiborni kafolatlayman.",
            hero_button: "Bog'laning",
            hero_scroll: 'Pastga suring',
            typed_1: 'MURODJON SOATMURODOV',
            typed_2: "Mehmondo'stlik mutaxassisi",
            typed_3: 'Room Service xodimi',
            typed_4: 'Mehmonlarga xizmat eksperti',
            typed_5: "Xalqaro ofitsiant",

            about_title: 'Men haqimda',
            about_subtitle: 'Tanishuv',
            about_description: "O'zbekiston, Turkiya va Shimoliy Kiprdagi hashamatli mehmonxonalarda 5 yildan ortiq tajribaga ega Room Service va ofitsiant mutaxassisiman. Mehmonlarga a'lo darajada xizmat ko'rsatish, oziq-ovqat va ichimliklar operatsiyalarini boshqarish hamda ko'p madaniyatli, tezkor muhitda yuqori xizmat standartlarini saqlashda mohirman. Professionalligim, ishonchliligim, e'tiborliligim va jamoaviy ishlash qobiliyatim bilan tanilganman. O'zbek va turk tillarida erkin, ingliz va rus tillarida ishchi darajada so'zlashaman.",
            about_years: 'Yillik<br>tajriba',
            about_countries: "Ishlagan<br>davlatlar",
            about_hotels: "Xalqaro luxury<br>mehmonxonalar",
            about_button: 'CV yuklab olish',

            pathway_title: "Kasbiy yo'l",
            pathway_subtitle: "Ta'lim va tajriba tarixi",
            pathway_education: "TA'LIM",
            pathway_experience: 'TAJRIBA',
            edu_degree: 'Moliya bo\'yicha kollej diplomi',

            skills_title: "Ko'nikma va tillar",
            skills_subtitle: 'Professional saviyam',
            skills_prof_header: "Professional ko'nikmalar",
            skill_customer: 'Mijozlarga xizmat',
            skill_communication: 'Muloqot',
            skill_multitasking: 'Ko\'p vazifalilik',
            skill_teamwork: 'Jamoaviy ishlash',
            skill_time: 'Vaqtni boshqarish',
            skill_problem: 'Muammolarni yechish',
            skill_deadline: 'Muddatlarga rioya qilish',
            skill_pressure: 'Bosim ostida ishlash',
            skills_lang_header: 'Til bilish darajasi',
            lang_uzbek: "O'zbek",
            lang_turkish: 'Turk',
            lang_english: 'Ingliz',
            lang_russian: 'Rus',
            lang_native: 'Ona tili',
            lang_advanced: 'Yuqori daraja',
            lang_intermediate: "O'rta daraja",
            lang_elementary: 'Boshlang\'ich',
            skills_connect: "Bog'lanish",

            testimonials_title: 'Mehmonlar fikri',
            testimonials_subtitle: 'Mehmonlar va hamkasblar nima deydi',

            gallery_title: "Vizual tajriba",
            gallery_subtitle: 'Kasbiy yo\'limdagi 10 ta lahza',

            contact_title: "Bog'laning",
            contact_subtitle: 'Keling, birgalikda ajoyib narsa yarataylik',
            contact_whatsapp: 'WhatsApp',
            contact_gmail: 'Gmail',
            contact_location: 'Manzil',
            contact_location_val: "O'zbekiston / Toshkent",
            form_name: "To'liq ism",
            form_email: 'Elektron pochta',
            form_message: 'Xabar',
            form_send: 'Yuborish',
            form_sending: 'Yuborilmoqda...',
            form_sent: 'Xabar yuborildi!',
            form_error: 'Xatolik! Qayta urining',

            footer_tagline: "Har bir manzilga jahon darajasidagi xizmatni olib kelaman.",
            footer_destinations: 'Ish faoliyati mamlakatlari',
            footer_connected: "Bog'lanishda bo'ling",
            footer_available: 'Doimiy ishga tayyorman!',
        },

        en: {
            nav_home: 'Welcome',
            nav_about: 'Profile',
            nav_pathway: 'Education<br>Experience',
            nav_skills: 'Skills<br>Language',
            nav_testimonials: 'Guest<br>Feedback',
            nav_gallery: 'Photo<br>Album',
            nav_contact: 'Contact<br>me',

            settings_title: 'Settings',
            settings_language: 'Language',
            settings_theme: 'Appearance',
            settings_theme_hint: 'Dark / Light mode',
            settings_worldclock: 'World Clock',
            tz_you: 'Uzbekistan',
            tz_tr: 'Turkey',
            tz_cy: 'N. Cyprus',
            tz_local: 'Your local time',

            hero_greeting: 'Hi, I am',
            hero_description: 'Dedicated to providing world-class guest experiences in the hospitality industry. With a strong background in international resorts and a commitment to professionalism, I ensure every guest receives impeccable service and attention to detail.',
            hero_button: 'Contact Me',
            hero_scroll: 'Scroll down',
            typed_1: 'MURODJON SOATMURODOV',
            typed_2: 'Hospitality Professional',
            typed_3: 'Room Service Specialist',
            typed_4: 'Guest Service Expert',
            typed_5: 'International Waiter',

            about_title: 'About Me',
            about_subtitle: 'My introduction',
            about_description: 'Experienced Room Service and Waiter professional with over five years of experience in luxury hotels and international resorts across Uzbekistan, Turkey, and Northern Cyprus. Highly skilled in delivering excellent guest service, managing food and beverage operations, and maintaining high service standards in fast-paced, multicultural environments. Known for professionalism, reliability, strong attention to detail, and effective teamwork. Fluent in Uzbek and Turkish, with working proficiency in English and Russian.',
            about_years: 'Years<br>experience',
            about_countries: 'Countries<br>worked',
            about_hotels: 'Global Luxury<br>Hotels',
            about_button: 'Download CV',

            pathway_title: 'Professional Pathway',
            pathway_subtitle: 'My Education & Experience Timeline',
            pathway_education: 'EDUCATION',
            pathway_experience: 'EXPERIENCE',
            edu_degree: 'College Diploma in Finance',

            skills_title: 'Abilities & Languages',
            skills_subtitle: 'My professional proficiency',
            skills_prof_header: 'Professional Skills',
            skill_customer: 'Customer service',
            skill_communication: 'Communication',
            skill_multitasking: 'Multitasking',
            skill_teamwork: 'Teamwork and collaboration',
            skill_time: 'Time management',
            skill_problem: 'Problem-solving',
            skill_deadline: 'Meeting deadlines',
            skill_pressure: 'Ability to work under pressure',
            skills_lang_header: 'Language Fluency',
            lang_uzbek: 'Uzbek',
            lang_turkish: 'Turkish',
            lang_english: 'English',
            lang_russian: 'Russian',
            lang_native: 'Native',
            lang_advanced: 'Advanced',
            lang_intermediate: 'Intermediate',
            lang_elementary: 'Elementary',
            skills_connect: "Let's Connect",

            testimonials_title: 'Guest Feedback',
            testimonials_subtitle: 'What guests and colleagues say',

            gallery_title: 'Visual Experience',
            gallery_subtitle: '10 Moments of my professional path',

            contact_title: 'Contact Me',
            contact_subtitle: "Let's build something great together",
            contact_whatsapp: 'WhatsApp',
            contact_gmail: 'Gmail',
            contact_location: 'Location',
            contact_location_val: 'Uzbekistan / Tashkent',
            form_name: 'Full Name',
            form_email: 'Your Email',
            form_message: 'Message',
            form_send: 'Send',
            form_sending: 'Sending...',
            form_sent: 'Message Sent!',
            form_error: 'Error! Try Again',

            footer_tagline: 'Bringing world-class service to every destination.',
            footer_destinations: 'Work Destinations',
            footer_connected: 'Stay Connected',
            footer_available: 'Available for On-site work!',
        },

        ru: {
            nav_home: 'Главная',
            nav_about: 'Профиль',
            nav_pathway: 'Образование<br>Опыт',
            nav_skills: 'Навыки<br>Языки',
            nav_testimonials: 'Отзывы<br>гостей',
            nav_gallery: 'Фото<br>альбом',
            nav_contact: 'Контакты',

            settings_title: 'Настройки',
            settings_language: 'Язык',
            settings_theme: 'Оформление',
            settings_theme_hint: 'Тёмный / Светлый режим',
            settings_worldclock: 'Мировое время',
            tz_you: 'Узбекистан',
            tz_tr: 'Турция',
            tz_cy: 'С. Кипр',
            tz_local: 'Ваше местное время',

            hero_greeting: 'Привет, я',
            hero_description: 'Стремлюсь обеспечивать первоклассный сервис в сфере гостеприимства. Благодаря опыту работы в международных курортах и приверженности профессионализму, я гарантирую безупречное обслуживание и внимание к деталям каждому гостю.',
            hero_button: 'Связаться',
            hero_scroll: 'Прокрутите вниз',
            typed_1: 'МУРОДЖОН СОАТМУРОДОВ',
            typed_2: 'Специалист гостеприимства',
            typed_3: 'Специалист Room Service',
            typed_4: 'Эксперт по обслуживанию гостей',
            typed_5: 'Международный официант',

            about_title: 'Обо мне',
            about_subtitle: 'Знакомство',
            about_description: 'Опытный специалист Room Service и официант с более чем пятилетним опытом работы в роскошных отелях и международных курортах Узбекистана, Турции и Северного Кипра. Обладаю высокими навыками обслуживания гостей, управления операциями с едой и напитками, поддержания высоких стандартов сервиса в динамичной, мультикультурной среде. Известен профессионализмом, надёжностью, вниманием к деталям и умением работать в команде. Свободно владею узбекским и турецким языками, рабочий уровень английского и русского.',
            about_years: 'Лет<br>опыта',
            about_countries: 'Страны<br>работы',
            about_hotels: 'Люкс-отели<br>мира',
            about_button: 'Скачать резюме',

            pathway_title: 'Профессиональный путь',
            pathway_subtitle: 'Хронология образования и опыта',
            pathway_education: 'ОБРАЗОВАНИЕ',
            pathway_experience: 'ОПЫТ',
            edu_degree: 'Диплом колледжа по финансам',

            skills_title: 'Навыки и языки',
            skills_subtitle: 'Мой профессиональный уровень',
            skills_prof_header: 'Профессиональные навыки',
            skill_customer: 'Обслуживание клиентов',
            skill_communication: 'Коммуникация',
            skill_multitasking: 'Многозадачность',
            skill_teamwork: 'Командная работа',
            skill_time: 'Тайм-менеджмент',
            skill_problem: 'Решение проблем',
            skill_deadline: 'Соблюдение сроков',
            skill_pressure: 'Работа под давлением',
            skills_lang_header: 'Владение языками',
            lang_uzbek: 'Узбекский',
            lang_turkish: 'Турецкий',
            lang_english: 'Английский',
            lang_russian: 'Русский',
            lang_native: 'Родной',
            lang_advanced: 'Продвинутый',
            lang_intermediate: 'Средний',
            lang_elementary: 'Начальный',
            skills_connect: 'Связаться',

            testimonials_title: 'Отзывы гостей',
            testimonials_subtitle: 'Что говорят гости и коллеги',

            gallery_title: 'Визуальный опыт',
            gallery_subtitle: '10 моментов моего профессионального пути',

            contact_title: 'Связаться со мной',
            contact_subtitle: 'Давайте создадим что-то великое вместе',
            contact_whatsapp: 'WhatsApp',
            contact_gmail: 'Gmail',
            contact_location: 'Местоположение',
            contact_location_val: 'Узбекистан / Ташкент',
            form_name: 'Полное имя',
            form_email: 'Ваш Email',
            form_message: 'Сообщение',
            form_send: 'Отправить',
            form_sending: 'Отправка...',
            form_sent: 'Сообщение отправлено!',
            form_error: 'Ошибка! Попробуйте снова',

            footer_tagline: 'Приношу первоклассный сервис в каждый уголок мира.',
            footer_destinations: 'Места работы',
            footer_connected: 'Оставайтесь на связи',
            footer_available: 'Готов к работе на месте!',
        },

        tr: {
            nav_home: 'Anasayfa',
            nav_about: 'Profil',
            nav_pathway: 'Eğitim<br>Deneyim',
            nav_skills: 'Yetenek<br>Dil',
            nav_testimonials: 'Misafir<br>Yorumları',
            nav_gallery: 'Fotoğraf<br>Albümü',
            nav_contact: 'İletişim',

            settings_title: 'Ayarlar',
            settings_language: 'Dil',
            settings_theme: 'Görünüm',
            settings_theme_hint: 'Karanlık / Aydınlık mod',
            settings_worldclock: 'Dünya Saati',
            tz_you: 'Özbekistan',
            tz_tr: 'Türkiye',
            tz_cy: 'K. Kıbrıs',
            tz_local: 'Yerel saatiniz',

            hero_greeting: 'Merhaba, ben',
            hero_description: 'Ağırlama sektöründe dünya standartlarında misafir deneyimleri sunmaya adanmışım. Uluslararası tesislerdeki güçlü geçmişim ve profesyonellik anlayışımla her misafire kusursuz hizmet ve özen sağlıyorum.',
            hero_button: 'İletişime Geç',
            hero_scroll: 'Aşağı kaydır',
            typed_1: 'MURODJON SOATMURODOV',
            typed_2: 'Ağırlama Profesyoneli',
            typed_3: 'Oda Servisi Uzmanı',
            typed_4: 'Misafir Hizmetleri Uzmanı',
            typed_5: 'Uluslararası Garson',

            about_title: 'Hakkımda',
            about_subtitle: 'Kendimi tanıtayım',
            about_description: "Özbekistan, Türkiye ve Kuzey Kıbrıs'taki lüks otel ve uluslararası tesislerde beş yılı aşkın deneyime sahip, Oda Servisi ve Garsonluk alanında uzman bir profesyonelim. Misafirlere üstün hizmet sunma, yiyecek-içecek operasyonlarını yönetme ve hızlı tempolu, çok kültürlü ortamlarda yüksek hizmet standartlarını koruma konusunda son derece yetkinim. Profesyonellik, güvenilirlik, detaylara dikkat ve etkili takım çalışmasıyla tanınırım. Özbekçe ve Türkçe akıcı, İngilizce ve Rusça çalışma düzeyinde.",
            about_years: 'Yıl<br>Deneyim',
            about_countries: 'Çalışılan<br>Ülke',
            about_hotels: 'Küresel Lüks<br>Otel',
            about_button: 'CV İndir',

            pathway_title: 'Kariyer Yolculuğu',
            pathway_subtitle: 'Eğitim ve Deneyim Zaman Çizelgesi',
            pathway_education: 'EĞİTİM',
            pathway_experience: 'DENEYİM',
            edu_degree: 'Finans Ön Lisans Diploması',

            skills_title: 'Yetenekler ve Diller',
            skills_subtitle: 'Profesyonel yeterliliğim',
            skills_prof_header: 'Mesleki Yetenekler',
            skill_customer: 'Müşteri hizmetleri',
            skill_communication: 'İletişim',
            skill_multitasking: 'Çoklu görev yönetimi',
            skill_teamwork: 'Takım çalışması',
            skill_time: 'Zaman yönetimi',
            skill_problem: 'Problem çözme',
            skill_deadline: 'Son teslim tarihlerine uyum',
            skill_pressure: 'Baskı altında çalışabilme',
            skills_lang_header: 'Dil Yeterliliği',
            lang_uzbek: 'Özbekçe',
            lang_turkish: 'Türkçe',
            lang_english: 'İngilizce',
            lang_russian: 'Rusça',
            lang_native: 'Anadil',
            lang_advanced: 'İleri düzey',
            lang_intermediate: 'Orta düzey',
            lang_elementary: 'Başlangıç',
            skills_connect: 'Bağlantı Kur',

            testimonials_title: 'Misafir Yorumları',
            testimonials_subtitle: 'Misafirler ve meslektaşlar ne diyor',

            gallery_title: 'Görsel Deneyim',
            gallery_subtitle: 'Kariyer yolculuğumdan 10 an',

            contact_title: 'İletişime Geç',
            contact_subtitle: 'Birlikte harika bir şey inşa edelim',
            contact_whatsapp: 'WhatsApp',
            contact_gmail: 'Gmail',
            contact_location: 'Konum',
            contact_location_val: 'Özbekistan / Taşkent',
            form_name: 'Ad Soyad',
            form_email: 'E-posta Adresiniz',
            form_message: 'Mesaj',
            form_send: 'Gönder',
            form_sending: 'Gönderiliyor...',
            form_sent: 'Mesaj Gönderildi!',
            form_error: 'Hata! Tekrar deneyin',

            footer_tagline: 'Her destinasyona dünya standartlarında hizmet getiriyorum.',
            footer_destinations: 'Çalışılan Bölgeler',
            footer_connected: 'Bağlantıda Kalın',
            footer_available: 'Yerinde çalışmaya hazırım!',
        }
    };

    function detectDefaultLanguage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;

        const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
        return SUPPORTED.includes(browserLang) ? browserLang : 'en';
    }

    function applyLanguage(lang) {
        if (!SUPPORTED.includes(lang)) lang = 'en';
        const dict = translations[lang] || translations.en;

        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem(STORAGE_KEY, lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
        });

        document.querySelectorAll('.lang__switch-btn').forEach(btn => {
            btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
        });

        const typedStrings = [dict.typed_1, dict.typed_2, dict.typed_3, dict.typed_4, dict.typed_5].filter(Boolean);
        window.dispatchEvent(new CustomEvent('languagechange:site', { detail: { lang, typedStrings } }));
    }

    function t(key) {
        const lang = localStorage.getItem(STORAGE_KEY) || 'en';
        const dict = translations[lang] || translations.en;
        return dict[key];
    }

    function getTypedStrings() {
        const lang = localStorage.getItem(STORAGE_KEY) || 'en';
        const dict = translations[lang] || translations.en;
        return [dict.typed_1, dict.typed_2, dict.typed_3, dict.typed_4, dict.typed_5].filter(Boolean);
    }

    window.i18n = { applyLanguage, t, getTypedStrings, SUPPORTED };

    document.addEventListener('DOMContentLoaded', () => {
        applyLanguage(detectDefaultLanguage());

        document.querySelectorAll('.lang__switch-btn').forEach(btn => {
            btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
        });
    });
})();
