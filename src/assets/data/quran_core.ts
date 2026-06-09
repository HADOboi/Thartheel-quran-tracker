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
  { surah_id: 78, name_arabic: "النَّبَأ", name_english: "An-Naba", name_transliteration: "An-Naba'", revelation_type: "meccan", total_ayahs: 40, page_start: 582, page_end: 583, juz: 30 },
  { surah_id: 77, name_arabic: "الْمُرْسَلَات", name_english: "Al-Mursalat", name_transliteration: "Al-Mursalat", revelation_type: "meccan", total_ayahs: 50, page_start: 580, page_end: 581, juz: 29 },
  { surah_id: 76, name_arabic: "الْإِنْسَان", name_english: "Al-Insan", name_transliteration: "Al-Insan", revelation_type: "medinan", total_ayahs: 31, page_start: 578, page_end: 580, juz: 29 },
  { surah_id: 75, name_arabic: "الْقِيَامَة", name_english: "Al-Qiyamah", name_transliteration: "Al-Qiyamah", revelation_type: "meccan", total_ayahs: 40, page_start: 577, page_end: 578, juz: 29 },
  { surah_id: 74, name_arabic: "الْمُدَّثِّر", name_english: "Al-Muddaththir", name_transliteration: "Al-Muddaththir", revelation_type: "meccan", total_ayahs: 56, page_start: 575, page_end: 577, juz: 29 },
  { surah_id: 73, name_arabic: "الْمُزَّمِّل", name_english: "Al-Muzzammil", name_transliteration: "Al-Muzzammil", revelation_type: "meccan", total_ayahs: 20, page_start: 574, page_end: 575, juz: 29 },
  { surah_id: 72, name_arabic: "الْجِنّ", name_english: "Al-Jinn", name_transliteration: "Al-Jinn", revelation_type: "meccan", total_ayahs: 28, page_start: 572, page_end: 573, juz: 29 },
  { surah_id: 71, name_arabic: "نُوح", name_english: "Nuh", name_transliteration: "Nuh", revelation_type: "meccan", total_ayahs: 28, page_start: 570, page_end: 571, juz: 29 },
  { surah_id: 70, name_arabic: "الْمَعَارِج", name_english: "Al-Ma'arij", name_transliteration: "Al-Ma'arij", revelation_type: "meccan", total_ayahs: 44, page_start: 568, page_end: 570, juz: 29 },
  { surah_id: 69, name_arabic: "الْحَاقَّة", name_english: "Al-Haqqah", name_transliteration: "Al-Haqqah", revelation_type: "meccan", total_ayahs: 52, page_start: 566, page_end: 568, juz: 29 },
  { surah_id: 68, name_arabic: "الْقَلَم", name_english: "Al-Qalam", name_transliteration: "Al-Qalam", revelation_type: "meccan", total_ayahs: 52, page_start: 564, page_end: 566, juz: 29 },
  { surah_id: 67, name_arabic: "الْمُلْك", name_english: "Al-Mulk", name_transliteration: "Al-Mulk", revelation_type: "meccan", total_ayahs: 30, page_start: 562, page_end: 564, juz: 29 },
  { surah_id: 66, name_arabic: "التَّحْرِيم", name_english: "At-Tahrim", name_transliteration: "At-Tahrim", revelation_type: "medinan", total_ayahs: 12, page_start: 560, page_end: 561, juz: 28 },
  { surah_id: 65, name_arabic: "الطَّلَاق", name_english: "At-Talaq", name_transliteration: "At-Talaq", revelation_type: "medinan", total_ayahs: 12, page_start: 558, page_end: 559, juz: 28 },
  { surah_id: 64, name_arabic: "التَّغَابُن", name_english: "At-Taghabun", name_transliteration: "At-Taghabun", revelation_type: "medinan", total_ayahs: 18, page_start: 556, page_end: 557, juz: 28 },
  { surah_id: 63, name_arabic: "الْمُنَافِقُون", name_english: "Al-Munafiqun", name_transliteration: "Al-Munafiqun", revelation_type: "medinan", total_ayahs: 11, page_start: 554, page_end: 555, juz: 28 },
  { surah_id: 62, name_arabic: "الْجُمُعَة", name_english: "Al-Jumu'ah", name_transliteration: "Al-Jumu'ah", revelation_type: "medinan", total_ayahs: 11, page_start: 553, page_end: 554, juz: 28 },
  { surah_id: 61, name_arabic: "الصَّفّ", name_english: "As-Saff", name_transliteration: "As-Saff", revelation_type: "medinan", total_ayahs: 14, page_start: 551, page_end: 552, juz: 28 },
  { surah_id: 60, name_arabic: "الْمُمْتَحَنَة", name_english: "Al-Mumtahanah", name_transliteration: "Al-Mumtahanah", revelation_type: "medinan", total_ayahs: 13, page_start: 549, page_end: 551, juz: 28 },
  { surah_id: 59, name_arabic: "الْحَشْر", name_english: "Al-Hashr", name_transliteration: "Al-Hashr", revelation_type: "medinan", total_ayahs: 24, page_start: 545, page_end: 548, juz: 28 },
  { surah_id: 58, name_arabic: "الْمُجَادَلَة", name_english: "Al-Mujadilah", name_transliteration: "Al-Mujadilah", revelation_type: "medinan", total_ayahs: 22, page_start: 542, page_end: 545, juz: 28 },
  { surah_id: 57, name_arabic: "الْحَدِيد", name_english: "Al-Hadid", name_transliteration: "Al-Hadid", revelation_type: "medinan", total_ayahs: 29, page_start: 537, page_end: 541, juz: 27 },
  { surah_id: 56, name_arabic: "الْوَاقِعَة", name_english: "Al-Waqi'ah", name_transliteration: "Al-Waqi'ah", revelation_type: "meccan", total_ayahs: 96, page_start: 534, page_end: 537, juz: 27 },
  { surah_id: 55, name_arabic: "الرَّحْمَٰن", name_english: "Ar-Rahman", name_transliteration: "Ar-Rahman", revelation_type: "medinan", total_ayahs: 78, page_start: 531, page_end: 534, juz: 27 },
  { surah_id: 54, name_arabic: "الْقَمَر", name_english: "Al-Qamar", name_transliteration: "Al-Qamar", revelation_type: "meccan", total_ayahs: 55, page_start: 528, page_end: 531, juz: 27 },
  { surah_id: 53, name_arabic: "النَّجْم", name_english: "An-Najm", name_transliteration: "An-Najm", revelation_type: "meccan", total_ayahs: 62, page_start: 526, page_end: 528, juz: 27 },
  { surah_id: 52, name_arabic: "الطُّور", name_english: "At-Tur", name_transliteration: "At-Tur", revelation_type: "meccan", total_ayahs: 49, page_start: 523, page_end: 525, juz: 27 },
  { surah_id: 51, name_arabic: "الذَّارِيَات", name_english: "Adh-Dhariyat", name_transliteration: "Adh-Dhariyat", revelation_type: "meccan", total_ayahs: 60, page_start: 520, page_end: 523, juz: 26 },
  { surah_id: 50, name_arabic: "ق", name_english: "Qaf", name_transliteration: "Qaf", revelation_type: "meccan", total_ayahs: 45, page_start: 518, page_end: 520, juz: 26 },
  { surah_id: 49, name_arabic: "الْحُجُرَات", name_english: "Al-Hujurat", name_transliteration: "Al-Hujurat", revelation_type: "medinan", total_ayahs: 18, page_start: 515, page_end: 517, juz: 26 },
  { surah_id: 48, name_arabic: "الْفَتْح", name_english: "Al-Fath", name_transliteration: "Al-Fath", revelation_type: "medinan", total_ayahs: 29, page_start: 511, page_end: 515, juz: 26 },
  { surah_id: 47, name_arabic: "مُحَمَّد", name_english: "Muhammad", name_transliteration: "Muhammad", revelation_type: "medinan", total_ayahs: 38, page_start: 507, page_end: 510, juz: 26 },
  { surah_id: 46, name_arabic: "الْأَحْقَاف", name_english: "Al-Ahqaf", name_transliteration: "Al-Ahqaf", revelation_type: "meccan", total_ayahs: 35, page_start: 502, page_end: 506, juz: 26 },
  { surah_id: 45, name_arabic: "الْجَاثِيَة", name_english: "Al-Jathiyah", name_transliteration: "Al-Jathiyah", revelation_type: "meccan", total_ayahs: 37, page_start: 499, page_end: 502, juz: 25 },
  { surah_id: 44, name_arabic: "الدُّخَان", name_english: "Ad-Dukhan", name_transliteration: "Ad-Dukhan", revelation_type: "meccan", total_ayahs: 59, page_start: 496, page_end: 498, juz: 25 },
  { surah_id: 43, name_arabic: "الزُّخْرُف", name_english: "Az-Zukhruf", name_transliteration: "Az-Zukhruf", revelation_type: "meccan", total_ayahs: 89, page_start: 489, page_end: 495, juz: 25 },
  { surah_id: 42, name_arabic: "الشُّورَىٰ", name_english: "Ash-Shura", name_transliteration: "Ash-Shura", revelation_type: "meccan", total_ayahs: 53, page_start: 483, page_end: 489, juz: 25 },
  { surah_id: 41, name_arabic: "فُصِّلَتْ", name_english: "Fussilat", name_transliteration: "Fussilat", revelation_type: "meccan", total_ayahs: 54, page_start: 477, page_end: 482, juz: 24 },
  { surah_id: 40, name_arabic: "غَافِر", name_english: "Ghafir", name_transliteration: "Ghafir", revelation_type: "meccan", total_ayahs: 85, page_start: 467, page_end: 476, juz: 24 },
  { surah_id: 39, name_arabic: "الزُّمَر", name_english: "Az-Zumar", name_transliteration: "Az-Zumar", revelation_type: "meccan", total_ayahs: 75, page_start: 458, page_end: 467, juz: 23 },
  { surah_id: 38, name_arabic: "ص", name_english: "Sad", name_transliteration: "Sad", revelation_type: "meccan", total_ayahs: 88, page_start: 453, page_end: 458, juz: 23 },
  { surah_id: 37, name_arabic: "الصَّافَّات", name_english: "As-Saffat", name_transliteration: "As-Saffat", revelation_type: "meccan", total_ayahs: 182, page_start: 446, page_end: 452, juz: 23 },
  { surah_id: 36, name_arabic: "يس", name_english: "Ya-Sin", name_transliteration: "Ya-Sin", revelation_type: "meccan", total_ayahs: 83, page_start: 440, page_end: 445, juz: 22 },
  { surah_id: 35, name_arabic: "فَاطِر", name_english: "Fatir", name_transliteration: "Fatir", revelation_type: "meccan", total_ayahs: 45, page_start: 434, page_end: 440, juz: 22 },
  { surah_id: 34, name_arabic: "سَبَأ", name_english: "Saba'", name_transliteration: "Saba'", revelation_type: "meccan", total_ayahs: 54, page_start: 428, page_end: 434, juz: 22 },
  { surah_id: 33, name_arabic: "الْأَحْزَاب", name_english: "Al-Ahzab", name_transliteration: "Al-Ahzab", revelation_type: "medinan", total_ayahs: 73, page_start: 418, page_end: 427, juz: 21 },
  { surah_id: 32, name_arabic: "السَّجْدَة", name_english: "As-Sajdah", name_transliteration: "As-Sajdah", revelation_type: "meccan", total_ayahs: 30, page_start: 415, page_end: 417, juz: 21 },
  { surah_id: 31, name_arabic: "لُقْمَان", name_english: "Luqman", name_transliteration: "Luqman", revelation_type: "meccan", total_ayahs: 34, page_start: 411, page_end: 414, juz: 21 },
  { surah_id: 30, name_arabic: "الرُّوم", name_english: "Ar-Rum", name_transliteration: "Ar-Rum", revelation_type: "meccan", total_ayahs: 60, page_start: 404, page_end: 410, juz: 21 },
  { surah_id: 29, name_arabic: "الْعَنْكَبُوت", name_english: "Al-Ankabut", name_transliteration: "Al-Ankabut", revelation_type: "meccan", total_ayahs: 69, page_start: 396, page_end: 404, juz: 20 },
  { surah_id: 28, name_arabic: "الْقَصَص", name_english: "Al-Qasas", name_transliteration: "Al-Qasas", revelation_type: "meccan", total_ayahs: 88, page_start: 385, page_end: 396, juz: 20 },
  { surah_id: 27, name_arabic: "النَّمْل", name_english: "An-Naml", name_transliteration: "An-Naml", revelation_type: "meccan", total_ayahs: 93, page_start: 377, page_end: 385, juz: 19 },
  { surah_id: 26, name_arabic: "الشُّعَرَاء", name_english: "Ash-Shu'ara'", name_transliteration: "Ash-Shu'ara'", revelation_type: "meccan", total_ayahs: 227, page_start: 367, page_end: 376, juz: 19 },
  { surah_id: 25, name_arabic: "الْفُرْقَان", name_english: "Al-Furqan", name_transliteration: "Al-Furqan", revelation_type: "meccan", total_ayahs: 77, page_start: 359, page_end: 366, juz: 18 },
  { surah_id: 24, name_arabic: "النُّور", name_english: "An-Nur", name_transliteration: "An-Nur", revelation_type: "medinan", total_ayahs: 64, page_start: 350, page_end: 359, juz: 18 },
  { surah_id: 23, name_arabic: "الْمُؤْمِنُون", name_english: "Al-Mu'minun", name_transliteration: "Al-Mu'minun", revelation_type: "meccan", total_ayahs: 118, page_start: 342, page_end: 349, juz: 18 },
  { surah_id: 22, name_arabic: "الْحَجّ", name_english: "Al-Hajj", name_transliteration: "Al-Hajj", revelation_type: "medinan", total_ayahs: 78, page_start: 332, page_end: 341, juz: 17 },
  { surah_id: 21, name_arabic: "الْأَنْبِيَاء", name_english: "Al-Anbiya'", name_transliteration: "Al-Anbiya'", revelation_type: "meccan", total_ayahs: 112, page_start: 322, page_end: 331, juz: 17 },
  { surah_id: 20, name_arabic: "طه", name_english: "Ta-Ha", name_transliteration: "Ta-Ha", revelation_type: "meccan", total_ayahs: 135, page_start: 312, page_end: 321, juz: 16 },
  { surah_id: 19, name_arabic: "مَرْيَم", name_english: "Maryam", name_transliteration: "Maryam", revelation_type: "meccan", total_ayahs: 98, page_start: 305, page_end: 312, juz: 16 },
  { surah_id: 18, name_arabic: "الْكَهْف", name_english: "Al-Kahf", name_transliteration: "Al-Kahf", revelation_type: "meccan", total_ayahs: 110, page_start: 293, page_end: 304, juz: 15 },
  { surah_id: 17, name_arabic: "الْإِسْرَاء", name_english: "Al-Isra'", name_transliteration: "Al-Isra'", revelation_type: "meccan", total_ayahs: 111, page_start: 282, page_end: 293, juz: 15 },
  { surah_id: 16, name_arabic: "النَّحْل", name_english: "An-Nahl", name_transliteration: "An-Nahl", revelation_type: "meccan", total_ayahs: 128, page_start: 267, page_end: 281, juz: 14 },
  { surah_id: 15, name_arabic: "الْحِجْر", name_english: "Al-Hijr", name_transliteration: "Al-Hijr", revelation_type: "meccan", total_ayahs: 99, page_start: 262, page_end: 267, juz: 14 },
  { surah_id: 14, name_arabic: "إِبْرَاهِيم", name_english: "Ibrahim", name_transliteration: "Ibrahim", revelation_type: "meccan", total_ayahs: 52, page_start: 255, page_end: 261, juz: 13 },
  { surah_id: 13, name_arabic: "الرَّعْد", name_english: "Ar-Ra'd", name_transliteration: "Ar-Ra'd", revelation_type: "medinan", total_ayahs: 43, page_start: 249, page_end: 255, juz: 13 },
  { surah_id: 12, name_arabic: "يُوسُف", name_english: "Yusuf", name_transliteration: "Yusuf", revelation_type: "meccan", total_ayahs: 111, page_start: 235, page_end: 248, juz: 12 },
  { surah_id: 11, name_arabic: "هُود", name_english: "Hud", name_transliteration: "Hud", revelation_type: "meccan", total_ayahs: 123, page_start: 221, page_end: 235, juz: 12 },
  { surah_id: 10, name_arabic: "يُونُس", name_english: "Yunus", name_transliteration: "Yunus", revelation_type: "meccan", total_ayahs: 109, page_start: 208, page_end: 221, juz: 11 },
  { surah_id: 9, name_arabic: "التَّوْبَة", name_english: "At-Tawbah", name_transliteration: "At-Tawbah", revelation_type: "medinan", total_ayahs: 129, page_start: 187, page_end: 207, juz: 10 },
  { surah_id: 8, name_arabic: "الْأَنْفَال", name_english: "Al-Anfal", name_transliteration: "Al-Anfal", revelation_type: "medinan", total_ayahs: 75, page_start: 177, page_end: 186, juz: 9 },
  { surah_id: 7, name_arabic: "الْأَعْرَاف", name_english: "Al-A'raf", name_transliteration: "Al-A'raf", revelation_type: "meccan", total_ayahs: 206, page_start: 151, page_end: 176, juz: 8 },
  { surah_id: 6, name_arabic: "الْأَنْعَام", name_english: "Al-An'am", name_transliteration: "Al-An'am", revelation_type: "meccan", total_ayahs: 165, page_start: 128, page_end: 150, juz: 7 },
  { surah_id: 5, name_arabic: "الْمَائِدَة", name_english: "Al-Ma'idah", name_transliteration: "Al-Ma'idah", revelation_type: "medinan", total_ayahs: 120, page_start: 107, page_end: 127, juz: 6 },
  { surah_id: 4, name_arabic: "النِّسَاء", name_english: "An-Nisa'", name_transliteration: "An-Nisa'", revelation_type: "medinan", total_ayahs: 176, page_start: 77, page_end: 106, juz: 4 },
  { surah_id: 3, name_arabic: "آل عِمْرَان", name_english: "Ali 'Imran", name_transliteration: "Ali 'Imran", revelation_type: "medinan", total_ayahs: 200, page_start: 50, page_end: 76, juz: 3 },
  { surah_id: 2, name_arabic: "الْبَقَرَة", name_english: "Al-Baqarah", name_transliteration: "Al-Baqarah", revelation_type: "medinan", total_ayahs: 286, page_start: 2, page_end: 49, juz: 1 },
  { surah_id: 1, name_arabic: "الْفَاتِحَة", name_english: "Al-Fatihah", name_transliteration: "Al-Fatihah", revelation_type: "meccan", total_ayahs: 7, page_start: 1, page_end: 1, juz: 1 }
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
