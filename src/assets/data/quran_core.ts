// Thartheel Quran Core Data
export interface JuzEntry {
  juz_number: number;
  name_arabic: string;
  name_english: string;
  page_start: number;
  page_end: number;
  total_pages: number;
}

export interface SurahEntry {
  surah_id: number;
  name_arabic: string;
  name_english: string;
  name_transliteration: string;
  revelation_type: string;
  total_ayahs: number;
  page_start: number;
  page_end: number;
  juz: number;
}

export interface Ayah {
  global_ayah_index: number;
  surah_id: number;
  ayah_number: number;
  arabic: string;
  translation: string;
  juz: number;
  hizb: number;
  rub: number;
  sajda: boolean;
}

export interface PageOnSurah {
  surah_id: number;
  name_arabic: string;
  name_english: string;
  is_surah_start: boolean;
}

export interface Page {
  page_number: number;
  juz_number: number;
  surah_on_page: PageOnSurah[];
  ayahs: Ayah[];
}

export const juz_index: JuzEntry[] = [
  { juz_number: 30, name_arabic: "عَمَّ", name_english: "Amma", page_start: 582, page_end: 604, total_pages: 23 },
  { juz_number: 29, name_arabic: "تَبَارَكَ", name_english: "Tabarak", page_start: 562, page_end: 581, total_pages: 20 },
  { juz_number: 28, name_arabic: "قَدْ سَمِعَ", name_english: "Qad Sami'", page_start: 542, page_end: 561, total_pages: 20 },
  { juz_number: 27, name_arabic: "قَالَ فَمَا خَطْبُكُمْ", name_english: "Qala Fama Khatbukum", page_start: 522, page_end: 541, total_pages: 20 },
  { juz_number: 26, name_arabic: "حم", name_english: "Ha-Meem", page_start: 502, page_end: 521, total_pages: 20 },
  { juz_number: 25, name_arabic: "إِلَيْهِ يُرَدُّ", name_english: "Ilayhi Yurad", page_start: 482, page_end: 501, total_pages: 20 },
  { juz_number: 24, name_arabic: "فَمَنْ أَظْلَمُ", name_english: "Faman Azlam", page_start: 462, page_end: 481, total_pages: 20 },
  { juz_number: 23, name_arabic: "وَمَا لِيَ", name_english: "Wa Maliya", page_start: 442, page_end: 461, total_pages: 20 },
  { juz_number: 22, name_arabic: "وَمَنْ يَقْنُتْ", name_english: "Waman Yaqnut", page_start: 422, page_end: 441, total_pages: 20 },
  { juz_number: 21, name_arabic: "أُتْلُ مَا أُوحِيَ", name_english: "Utlu Ma Uhiya", page_start: 402, page_end: 421, total_pages: 20 },
  { juz_number: 20, name_arabic: "أَمَّنْ خَلَقَ", name_english: "Amman Khalaq", page_start: 382, page_end: 401, total_pages: 20 },
  { juz_number: 19, name_arabic: "وَقَالَ الَّذِينَ", name_english: "Waqalalladhina", page_start: 362, page_end: 381, total_pages: 20 },
  { juz_number: 18, name_arabic: "قَدْ أَفْلَحَ", name_english: "Qad Aflah", page_start: 342, page_end: 361, total_pages: 20 },
  { juz_number: 17, name_arabic: "اقْتَرَبَ لِلنَّاسِ", name_english: "Iqtaraba Linnas", page_start: 322, page_end: 341, total_pages: 20 },
  { juz_number: 16, name_arabic: "قَالَ أَلَمْ", name_english: "Qala Alam", page_start: 302, page_end: 321, total_pages: 20 },
  { juz_number: 15, name_arabic: "سُبْحَانَ الَّذِي", name_english: "Subhanalladhi", page_start: 282, page_end: 301, total_pages: 20 },
  { juz_number: 14, name_arabic: "رُبَمَا", name_english: "Rubama", page_start: 262, page_end: 281, total_pages: 20 },
  { juz_number: 13, name_arabic: "وَمَا أُبَرِّئُ", name_english: "Wama Ubarriu", page_start: 242, page_end: 261, total_pages: 20 },
  { juz_number: 12, name_arabic: "وَمَا مِنْ دَابَّةٍ", name_english: "Wama Min Dabbatin", page_start: 222, page_end: 241, total_pages: 20 },
  { juz_number: 11, name_arabic: "يَعْتَذِرُونَ", name_english: "Ya'tadhirun", page_start: 202, page_end: 221, total_pages: 20 },
  { juz_number: 10, name_arabic: "وَاعْلَمُوا", name_english: "Wa'lamu", page_start: 182, page_end: 201, total_pages: 20 },
  { juz_number: 9, name_arabic: "قَالَ الْمَلَأُ", name_english: "Qalal Mala'u", page_start: 162, page_end: 181, total_pages: 20 },
  { juz_number: 8, name_arabic: "وَلَوْ أَنَّنَا", name_english: "Walau Annana", page_start: 142, page_end: 161, total_pages: 20 },
  { juz_number: 7, name_arabic: "وَإِذَا سَمِعُوا", name_english: "Waidha Sami'u", page_start: 122, page_end: 141, total_pages: 20 },
  { juz_number: 6, name_arabic: "لَا يُحِبُّ اللَّهُ", name_english: "La Yuhibbullah", page_start: 102, page_end: 121, total_pages: 20 },
  { juz_number: 5, name_arabic: "وَالْمُحْصَنَاتُ", name_english: "Wal Muhsanat", page_start: 82, page_end: 101, total_pages: 20 },
  { juz_number: 4, name_arabic: "لَنْ تَنَالُوا", name_english: "Lan Tanalu", page_start: 62, page_end: 81, total_pages: 20 },
  { juz_number: 3, name_arabic: "تِلْكَ الرُّسُلُ", name_english: "Tilkar Rusulu", page_start: 42, page_end: 61, total_pages: 20 },
  { juz_number: 2, name_arabic: "سَيَقُولُ", name_english: "Sayaqul", page_start: 22, page_end: 41, total_pages: 20 },
  { juz_number: 1, name_arabic: "الٓمٓ", name_english: "Alif-Lam-Meem", page_start: 1, page_end: 21, total_pages: 21 }
];

export const surah_index: SurahEntry[] = [
  { surah_id: 114, name_arabic: "النَّاس", name_english: "An-Nas", name_transliteration: "An-Naas", revelation_type: "meccan", total_ayahs: 6, page_start: 604, page_end: 604, juz: 30 },
  { surah_id: 113, name_arabic: "الْفَلَق", name_english: "Al-Falaq", name_transliteration: "Al-Falaq", revelation_type: "meccan", total_ayahs: 5, page_start: 604, page_end: 604, juz: 30 },
  { surah_id: 112, name_arabic: "الإِخْلَاص", name_english: "Al-Ikhlas", name_transliteration: "Al-Ikhlaas", revelation_type: "meccan", total_ayahs: 4, page_start: 603, page_end: 603, juz: 30 },
  { surah_id: 111, name_arabic: "المَسَد", name_english: "Al-Masad", name_transliteration: "Al-Masad", revelation_type: "meccan", total_ayahs: 5, page_start: 603, page_end: 603, juz: 30 },
  { surah_id: 110, name_arabic: "النَّصْر", name_english: "An-Nasr", name_transliteration: "An-Nasr", revelation_type: "medinan", total_ayahs: 3, page_start: 603, page_end: 603, juz: 30 },
  { surah_id: 109, name_arabic: "الكَافِرُون", name_english: "Al-Kafirun", name_transliteration: "Al-Kafiroon", revelation_type: "meccan", total_ayahs: 6, page_start: 602, page_end: 602, juz: 30 },
  { surah_id: 108, name_arabic: "الكَوْثَر", name_english: "Al-Kauthar", name_transliteration: "Al-Kauthar", revelation_type: "meccan", total_ayahs: 3, page_start: 602, page_end: 602, juz: 30 },
  { surah_id: 107, name_arabic: "المَاعُون", name_english: "Al-Ma'un", name_transliteration: "Al-Ma'oon", revelation_type: "meccan", total_ayahs: 7, page_start: 602, page_end: 602, juz: 30 },
  { surah_id: 106, name_arabic: "قُرَيْش", name_english: "Quraish", name_transliteration: "Quraish", revelation_type: "meccan", total_ayahs: 4, page_start: 601, page_end: 601, juz: 30 },
  { surah_id: 105, name_arabic: "الفِيل", name_english: "Al-Fil", name_transliteration: "Al-Fil", revelation_type: "meccan", total_ayahs: 5, page_start: 601, page_end: 601, juz: 30 },
  { surah_id: 104, name_arabic: "الهُمَزَة", name_english: "Al-Humazah", name_transliteration: "Al-Humazah", revelation_type: "meccan", total_ayahs: 9, page_start: 601, page_end: 601, juz: 30 },
  { surah_id: 103, name_arabic: "العَصْر", name_english: "Al-Asr", name_transliteration: "Al-Asr", revelation_type: "meccan", total_ayahs: 3, page_start: 601, page_end: 601, juz: 30 },
  { surah_id: 102, name_arabic: "التَّكَاثُر", name_english: "At-Takathur", name_transliteration: "At-Takathur", revelation_type: "meccan", total_ayahs: 8, page_start: 600, page_end: 600, juz: 30 },
  { surah_id: 101, name_arabic: "القَارِعَة", name_english: "Al-Qari'ah", name_transliteration: "Al-Qari'ah", revelation_type: "meccan", total_ayahs: 11, page_start: 600, page_end: 600, juz: 30 },
  { surah_id: 100, name_arabic: "العَادِيَات", name_english: "Al-Adiyat", name_transliteration: "Al-Adiyat", revelation_type: "meccan", total_ayahs: 11, page_start: 599, page_end: 599, juz: 30 },
  { surah_id: 99, name_arabic: "الزَّلْزَلَة", name_english: "Az-Zalzalah", name_transliteration: "Az-Zalzalah", revelation_type: "medinan", total_ayahs: 8, page_start: 599, page_end: 599, juz: 30 },
  { surah_id: 98, name_arabic: "البَيِّنَة", name_english: "Al-Bayyinah", name_transliteration: "Al-Bayyinah", revelation_type: "medinan", total_ayahs: 8, page_start: 598, page_end: 599, juz: 30 },
  { surah_id: 97, name_arabic: "القَدْر", name_english: "Al-Qadr", name_transliteration: "Al-Qadr", revelation_type: "meccan", total_ayahs: 5, page_start: 598, page_end: 598, juz: 30 },
  { surah_id: 96, name_arabic: "العَلَق", name_english: "Al-Alaq", name_transliteration: "Al-Alaq", revelation_type: "meccan", total_ayahs: 19, page_start: 597, page_end: 598, juz: 30 },
  { surah_id: 95, name_arabic: "التِّين", name_english: "At-Tin", name_transliteration: "At-Tin", revelation_type: "meccan", total_ayahs: 8, page_start: 597, page_end: 597, juz: 30 },
  { surah_id: 94, name_arabic: "الشَّرْح", name_english: "Ash-Sharh", name_transliteration: "Ash-Sharh", revelation_type: "meccan", total_ayahs: 8, page_start: 596, page_end: 596, juz: 30 },
  { surah_id: 93, name_arabic: "الضُّحَى", name_english: "Ad-Duha", name_transliteration: "Ad-Duha", revelation_type: "meccan", total_ayahs: 11, page_start: 596, page_end: 596, juz: 30 },
  { surah_id: 92, name_arabic: "اللَّيْل", name_english: "Al-Lail", name_transliteration: "Al-Lail", revelation_type: "meccan", total_ayahs: 21, page_start: 595, page_end: 596, juz: 30 },
  { surah_id: 91, name_arabic: "الشَّمْس", name_english: "Ash-Shams", name_transliteration: "Ash-Shams", revelation_type: "meccan", total_ayahs: 15, page_start: 595, page_end: 595, juz: 30 },
  { surah_id: 90, name_arabic: "الْبَلَد", name_english: "Al-Balad", name_transliteration: "Al-Balad", revelation_type: "meccan", total_ayahs: 20, page_start: 594, page_end: 594, juz: 30 },
  { surah_id: 89, name_arabic: "الفَجْر", name_english: "Al-Fajr", name_transliteration: "Al-Fajr", revelation_type: "meccan", total_ayahs: 30, page_start: 593, page_end: 594, juz: 30 },
  { surah_id: 88, name_arabic: "الغَاشِيَة", name_english: "Al-Ghashiyah", name_transliteration: "Al-Ghashiyah", revelation_type: "meccan", total_ayahs: 26, page_start: 592, page_end: 592, juz: 30 },
  { surah_id: 87, name_arabic: "الأَعْلَى", name_english: "Al-A'la", name_transliteration: "Al-A'la", revelation_type: "meccan", total_ayahs: 19, page_start: 591, page_end: 591, juz: 30 },
  { surah_id: 86, name_arabic: "الطَّارِق", name_english: "At-Tariq", name_transliteration: "At-Tariq", revelation_type: "meccan", total_ayahs: 17, page_start: 591, page_end: 591, juz: 30 },
  { surah_id: 85, name_arabic: "البُرُوج", name_english: "Al-Buruj", name_transliteration: "Al-Buruj", revelation_type: "meccan", total_ayahs: 22, page_start: 590, page_end: 590, juz: 30 },
  { surah_id: 84, name_arabic: "الانْشِقَاق", name_english: "Al-Inshiqaq", name_transliteration: "Al-Inshiqaq", revelation_type: "meccan", total_ayahs: 25, page_start: 589, page_end: 589, juz: 30 },
  { surah_id: 83, name_arabic: "المُطَفِّفِين", name_english: "Al-Mutaffifin", name_transliteration: "Al-Mutaffifin", revelation_type: "meccan", total_ayahs: 36, page_start: 587, page_end: 588, juz: 30 },
  { surah_id: 82, name_arabic: "الانْفِطَار", name_english: "Al-Infitar", name_transliteration: "Al-Infitar", revelation_type: "meccan", total_ayahs: 19, page_start: 587, page_end: 587, juz: 30 },
  { surah_id: 81, name_arabic: "التَّكْوِير", name_english: "At-Takwir", name_transliteration: "At-Takwir", revelation_type: "meccan", total_ayahs: 29, page_start: 586, page_end: 586, juz: 30 },
  { surah_id: 80, name_arabic: "عَبَسَ", name_english: "Abasa", name_transliteration: "Abasa", revelation_type: "meccan", total_ayahs: 42, page_start: 585, page_end: 585, juz: 30 },
  { surah_id: 79, name_arabic: "النَّازِعَات", name_english: "An-Naziat", name_transliteration: "An-Naazi'at", revelation_type: "meccan", total_ayahs: 46, page_start: 583, page_end: 584, juz: 30 },
  { surah_id: 78, name_arabic: "النَّبَأ", name_english: "An-Naba", name_transliteration: "An-Naba'", revelation_type: "meccan", total_ayahs: 40, page_start: 582, page_end: 583, juz: 30 }
];

// High fidelity dataset for Juz 30.
const detailed_pages: Record<number, Page> = {
  604: {
    page_number: 604,
    juz_number: 30,
    surah_on_page: [
      { surah_id: 114, name_arabic: "النَّاس", name_english: "An-Nas", is_surah_start: true },
      { surah_id: 113, name_arabic: "الْفَلَق", name_english: "Al-Falaq", is_surah_start: true }
    ],
    ayahs: [
      {
        global_ayah_index: 6231,
        surah_id: 113,
        ayah_number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        translation: "Say, \"I seek refuge in the Lord of daybreak",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6232,
        surah_id: 113,
        ayah_number: 2,
        arabic: "مِن شَرِّ مَا خَلَقَ",
        translation: "From the evil of that which He created",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6233,
        surah_id: 113,
        ayah_number: 3,
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translation: "And from the evil of darkness when it settles",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6234,
        surah_id: 113,
        ayah_number: 4,
        arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        translation: "And from the evil of the blowers in knots",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6235,
        surah_id: 113,
        ayah_number: 5,
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translation: "And from the evil of an envier when he envies.\"",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6236,
        surah_id: 114,
        ayah_number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        translation: "Say, \"I seek refuge in the Lord of mankind,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6237,
        surah_id: 114,
        ayah_number: 2,
        arabic: "مَلِكِ النَّاسِ",
        translation: "The Sovereign of mankind.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6238,
        surah_id: 114,
        ayah_number: 3,
        arabic: "إِلَٰهِ النَّاسِ",
        translation: "The God of mankind,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6239,
        surah_id: 114,
        ayah_number: 4,
        arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        translation: "From the evil of the retreating whisperer -",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6240,
        surah_id: 114,
        ayah_number: 5,
        arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        translation: "Who whispers [evil] into the breasts of mankind -",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6241,
        surah_id: 114,
        ayah_number: 6,
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        translation: "From among the jinn and mankind.\"",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      }
    ]
  },
  603: {
    page_number: 603,
    juz_number: 30,
    surah_on_page: [
      { surah_id: 112, name_arabic: "الإِخْلَاص", name_english: "Al-Ikhlas", is_surah_start: true },
      { surah_id: 111, name_arabic: "المَسَد", name_english: "Al-Masad", is_surah_start: true },
      { surah_id: 110, name_arabic: "النَّصْر", name_english: "An-Nasr", is_surah_start: true }
    ],
    ayahs: [
      {
        global_ayah_index: 6220,
        surah_id: 110,
        ayah_number: 1,
        arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
        translation: "When the victory of Allah has come and the conquest,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6221,
        surah_id: 110,
        ayah_number: 2,
        arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
        translation: "And you see the people entering into the religion of Allah in multitudes,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6222,
        surah_id: 110,
        ayah_number: 3,
        arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
        translation: "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6223,
        surah_id: 111,
        ayah_number: 1,
        arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
        translation: "May the hands of Abu Lahab be ruined, and ruined is he.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6224,
        surah_id: 111,
        ayah_number: 2,
        arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
        translation: "His wealth will not avail him or that which he gained.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6225,
        surah_id: 111,
        ayah_number: 3,
        arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
        translation: "He will [enter to] burn in a Fire of [blazing] flame,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6226,
        surah_id: 111,
        ayah_number: 4,
        arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
        translation: "And his wife [as well] - the carrier of firewood.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6227,
        surah_id: 111,
        ayah_number: 5,
        arabic: "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
        translation: "Around her neck is a rope of [twisted] fiber.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6228,
        surah_id: 112,
        ayah_number: 1,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        translation: "Say, \"He is Allah, [who is] One,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6229,
        surah_id: 112,
        ayah_number: 2,
        arabic: "اللَّهُ الصَّمَدُ",
        translation: "Allah, the Eternal Refuge.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6230,
        surah_id: 112,
        ayah_number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translation: "He neither begets nor is born,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6231,
        surah_id: 112,
        ayah_number: 4,
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translation: "And there is none co-equal or comparable unto Him.\"",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      }
    ]
  },
  602: {
    page_number: 602,
    juz_number: 30,
    surah_on_page: [
      { surah_id: 109, name_arabic: "الكَافِرُون", name_english: "Al-Kafirun", is_surah_start: true },
      { surah_id: 108, name_arabic: "الكَوْثَر", name_english: "Al-Kauthar", is_surah_start: true },
      { surah_id: 107, name_arabic: "المَاعُون", name_english: "Al-Ma'un", is_surah_start: true }
    ],
    ayahs: [
      {
        global_ayah_index: 6200,
        surah_id: 107,
        ayah_number: 1,
        arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
        translation: "Have you seen the one who denies the Recompense?",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6201,
        surah_id: 107,
        ayah_number: 2,
        arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
        translation: "For that is the one who drives away the orphan",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6202,
        surah_id: 107,
        ayah_number: 3,
        arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
        translation: "And does not encourage the feeding of the poor.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6203,
        surah_id: 107,
        ayah_number: 4,
        arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
        translation: "So woe to those who pray",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6204,
        surah_id: 107,
        ayah_number: 5,
        arabic: "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
        translation: "[But] who are heedless of their prayer -",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6205,
        surah_id: 107,
        ayah_number: 6,
        arabic: "الَّذِينَ هُمْ يُرَاءُونَ",
        translation: "Those who make show [of their deeds]",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6206,
        surah_id: 107,
        ayah_number: 7,
        arabic: "وَيَمْنَعُونَ الْمَاعُونَ",
        translation: "And withhold [simple] assistance.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6207,
        surah_id: 108,
        ayah_number: 1,
        arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
        translation: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6208,
        surah_id: 108,
        ayah_number: 2,
        arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
        translation: "So pray to your Lord and sacrifice [to Him alone].",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6209,
        surah_id: 108,
        ayah_number: 3,
        arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        translation: "Indeed, your enemy is the one cut off.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6210,
        surah_id: 109,
        ayah_number: 1,
        arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
        translation: "Say, \"O disbelievers,",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6211,
        surah_id: 109,
        ayah_number: 2,
        arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
        translation: "I do not worship what you worship.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6212,
        surah_id: 109,
        ayah_number: 3,
        arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
        translation: "Nor are you worshippers of what I worship.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6213,
        surah_id: 109,
        ayah_number: 4,
        arabic: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
        translation: "Nor will I be a worshipper of what you worship.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6214,
        surah_id: 109,
        ayah_number: 5,
        arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
        translation: "Nor will you be worshippers of what I worship.",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      },
      {
        global_ayah_index: 6215,
        surah_id: 109,
        ayah_number: 6,
        arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
        translation: "For you is your religion, and for me is my religion.\"",
        juz: 30,
        hizb: 60,
        rub: 240,
        sajda: false
      }
    ]
  }
};

// Returns a dynamically generated page with elegant content if the full page isn't in detailed_pages
export const getPage = (actualPage: number): Page => {
  if (detailed_pages[actualPage]) {
    return detailed_pages[actualPage];
  }

  // Find corresponding juz and surahs
  const juz = juz_index.find(j => actualPage >= j.page_start && actualPage <= j.page_end) || juz_index[0];
  const surahs = surah_index.filter(s => actualPage >= s.page_start && actualPage <= s.page_end);
  const matchedSurah = surahs.length > 0 ? surahs[0] : (surah_index.find(s => s.juz === juz.juz_number) || surah_index[surah_index.length - 1]);

  // Generate beautiful content based on page
  const pageSurahStarts = surah_index.filter(s => s.page_start === actualPage);
  const surahOnPage: PageOnSurah[] = surahs.length > 0 
    ? surahs.map((s, idx) => ({
        surah_id: s.surah_id,
        name_arabic: s.name_arabic,
        name_english: s.name_english,
        is_surah_start: pageSurahStarts.some(p => p.surah_id === s.surah_id)
      }))
    : [{
        surah_id: matchedSurah.surah_id,
        name_arabic: matchedSurah.name_arabic,
        name_english: matchedSurah.name_english,
        is_surah_start: matchedSurah.page_start === actualPage
      }];

  const localAyahs: Ayah[] = [];
  const startAyah = ((604 - actualPage) * 3) % matchedSurah.total_ayahs + 1;
  const numAyahs = 4; // realistic ayahs per page

  const sampleArabic = [
    "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
    "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
    "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
    "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
    "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
    "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ"
  ];

  const sampleEnglish = [
    "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
    "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
    "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
    "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
    "Indeed, those who disbelieve - it is all the same for them whether you warn them or do not warn them - they will not believe.",
    "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a barrier, and for them is a great punishment."
  ];

  for (let i = 0; i < numAyahs; i++) {
    const idx = (startAyah + i) % matchedSurah.total_ayahs + 1;
    localAyahs.push({
      global_ayah_index: (actualPage * 10) + i,
      surah_id: matchedSurah.surah_id,
      ayah_number: idx,
      arabic: sampleArabic[i % sampleArabic.length] + " ۗ",
      translation: `[Saheeh International Placeholder for Surah ${matchedSurah.name_english} Verse ${idx}]: ` + sampleEnglish[i % sampleEnglish.length],
      juz: juz.juz_number,
      hizb: juz.juz_number * 2,
      rub: juz.juz_number * 8,
      sajda: false
    });
  }

  return {
    page_number: actualPage,
    juz_number: juz.juz_number,
    surah_on_page: surahOnPage,
    ayahs: localAyahs
  };
};

export const getJuzForPage = (actualPage: number): JuzEntry => {
  return juz_index.find(j => actualPage >= j.page_start && actualPage <= j.page_end) || juz_index[0];
};

export const getPagesInJuz = (juzNumber: number): number[] => {
  const juz = juz_index.find(j => j.juz_number === juzNumber);
  if (!juz) return [];
  const pages: number[] = [];
  // Note: we order them from biggest to smallest because pages inside Juz are reversed in Thartheel journey
  for (let p = juz.page_end; p >= juz.page_start; p--) {
    pages.push(p);
  }
  return pages;
};

export const getSurah = (surahId: number): SurahEntry | undefined => {
  return surah_index.find(s => s.surah_id === surahId);
};

export const getDisplayPage = (actualPage: number): number => {
  return (604 - actualPage) + 1;
};
