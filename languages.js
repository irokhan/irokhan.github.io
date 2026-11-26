const languages = {
  en: {
    name: "English", label: "Language",
    intro: "Build your necropolis, raise a skeleton army, and lead it on raids.",
    privacy: "Privacy policy", beta: "In beta", gallery: "Screenshots",
    trailer: "Gameplay (English)",
    shots: ["A skeleton army on a raid", "The necropolis", "A boss fight", "A puzzle", "An expedition", "Building in the necropolis", "The tavern", "A minigame"],
    carousel: ["Previous", "Next", "Pause autoplay", "Start autoplay"],
  },
  fr: {
    name: "Français", label: "Langue",
    intro: "Bâtis ta nécropole, lève une armée de squelettes et pars en raid.",
    privacy: "Politique de confidentialité", beta: "En bêta", gallery: "Captures d’écran",
    trailer: "Vidéo de jeu (anglais)",
    shots: ["Une armée de squelettes en raid", "La nécropole", "Un combat de boss", "Une énigme", "Une expédition", "La construction dans la nécropole", "La taverne", "Un mini-jeu"],
    carousel: ["Précédent", "Suivant", "Mettre en pause", "Lancer le défilement"],
  },
  es: {
    name: "Español", label: "Idioma",
    intro: "Construye tu necrópolis, alza un ejército de esqueletos y sal de incursión.",
    privacy: "Política de privacidad", beta: "En beta", gallery: "Capturas de pantalla",
    trailer: "Vídeo del juego (inglés)",
    shots: ["Un ejército de esqueletos de incursión", "La necrópolis", "Un combate contra un jefe", "Un puzle", "Una expedición", "Construcción en la necrópolis", "La taberna", "Un minijuego"],
    carousel: ["Anterior", "Siguiente", "Pausar la reproducción automática", "Iniciar la reproducción automática"],
  },
  "pt-BR": {
    name: "Português (Brasil)", label: "Idioma",
    intro: "Construa sua necrópole, reúna um exército de esqueletos e lidere suas incursões.",
    privacy: "Política de privacidade", beta: "Em beta", gallery: "Capturas de tela",
    trailer: "Vídeo do jogo (inglês)",
    shots: ["Um exército de esqueletos em uma incursão", "A necrópole", "Uma batalha contra um chefe", "Um quebra-cabeça", "Uma expedição", "Construção na necrópole", "A taverna", "Um minijogo"],
    carousel: ["Anterior", "Próximo", "Pausar a reprodução automática", "Iniciar a reprodução automática"],
  },
  de: {
    name: "Deutsch", label: "Sprache",
    intro: "Baue deine Nekropole, erwecke eine Skelettarmee und zieh auf Raubzug.",
    privacy: "Datenschutzerklärung", beta: "In der Beta", gallery: "Screenshots",
    trailer: "Spielszenen (Englisch)",
    shots: ["Eine Skelettarmee auf Raubzug", "Die Nekropole", "Ein Bosskampf", "Ein Rätsel", "Eine Expedition", "Bauen in der Nekropole", "Die Taverne", "Ein Minispiel"],
    carousel: ["Zurück", "Weiter", "Automatischen Wechsel pausieren", "Automatischen Wechsel starten"],
  },
  ja: {
    name: "日本語", label: "言語",
    intro: "ネクロポリスを築き、スケルトンの軍団をよみがえらせ、襲撃に出よう。",
    privacy: "プライバシーポリシー", beta: "ベータ版", gallery: "スクリーンショット",
    trailer: "プレイ動画（英語）",
    shots: ["襲撃に向かうスケルトンの軍団", "ネクロポリス", "ボス戦", "パズル", "遠征", "ネクロポリスの建築", "酒場", "ミニゲーム"],
    carousel: ["前へ", "次へ", "自動再生を一時停止", "自動再生を開始"],
  },
  ko: {
    name: "한국어", label: "언어",
    intro: "죽은 자들의 도시를 건설하고 해골 군단을 일으켜 습격에 나서세요.",
    privacy: "개인정보 처리방침", beta: "베타 버전", gallery: "스크린샷",
    trailer: "플레이 영상 (영어)",
    shots: ["습격에 나선 해골 군단", "죽은 자들의 도시", "보스 전투", "퍼즐", "원정", "죽은 자들의 도시 건설", "선술집", "미니게임"],
    carousel: ["이전", "다음", "자동 재생 일시 정지", "자동 재생 시작"],
  },
  "zh-TW": {
    name: "繁體中文", label: "語言",
    intro: "建造你的亡者之城，召喚骷髏大軍，出征突襲。",
    privacy: "隱私權政策", beta: "測試版", gallery: "遊戲截圖",
    trailer: "遊戲實機影片（英文）",
    shots: ["出征突襲的骷髏大軍", "亡者之城", "首領戰", "謎題", "遠征", "建造亡者之城", "酒館", "迷你遊戲"],
    carousel: ["上一頁", "下一頁", "暫停自動播放", "開始自動播放"],
  },
  it: {
    name: "Italiano", label: "Lingua",
    intro: "Costruisci la tua necropoli, risveglia un esercito di scheletri e guidalo all’assalto.",
    privacy: "Informativa sulla privacy", beta: "In beta", gallery: "Schermate di gioco",
    trailer: "Video di gioco (inglese)",
    shots: ["Un esercito di scheletri all’assalto", "La necropoli", "Uno scontro con un boss", "Un rompicapo", "Una spedizione", "Costruire nella necropoli", "La taverna", "Un minigioco"],
    carousel: ["Indietro", "Avanti", "Sospendi lo scorrimento automatico", "Avvia lo scorrimento automatico"],
  },
  tr: {
    name: "Türkçe", label: "Dil",
    intro: "Nekropolünü kur, bir iskelet ordusu dirilt ve akınlara çık.",
    privacy: "Gizlilik politikası", beta: "Beta sürümü", gallery: "Ekran görüntüleri",
    trailer: "Oynanış videosu (İngilizce)",
    shots: ["Akına çıkan iskelet ordusu", "Nekropol", "Bir bölüm sonu savaşı", "Bir bulmaca", "Bir sefer", "Nekropolde inşaat", "Meyhane", "Bir mini oyun"],
    carousel: ["Önceki", "Sonraki", "Otomatik oynatmayı duraklat", "Otomatik oynatmayı başlat"],
  },
  id: {
    name: "Bahasa Indonesia", label: "Bahasa",
    intro: "Bangun nekropolismu, bangkitkan pasukan kerangka, lalu pimpin mereka dalam serbuan.",
    privacy: "Kebijakan privasi", beta: "Versi beta", gallery: "Tangkapan layar",
    trailer: "Video permainan (bahasa Inggris)",
    shots: ["Pasukan kerangka saat menyerbu", "Nekropolis", "Pertempuran melawan bos", "Teka-teki", "Ekspedisi", "Pembangunan di nekropolis", "Kedai", "Minigame"],
    carousel: ["Sebelumnya", "Berikutnya", "Jeda pemutaran otomatis", "Mulai pemutaran otomatis"],
  },
  vi: {
    name: "Tiếng Việt", label: "Ngôn ngữ",
    intro: "Xây dựng thành phố người chết, triệu hồi đội quân bộ xương và dẫn quân đi đột kích.",
    privacy: "Chính sách quyền riêng tư", beta: "Bản thử nghiệm", gallery: "Ảnh chụp màn hình",
    trailer: "Video chơi thử (tiếng Anh)",
    shots: ["Đội quân bộ xương đi đột kích", "Thành phố người chết", "Trận đấu trùm", "Câu đố", "Chuyến thám hiểm", "Xây dựng thành phố người chết", "Quán rượu", "Trò chơi nhỏ"],
    carousel: ["Trước", "Sau", "Tạm dừng chuyển tự động", "Bắt đầu chuyển tự động"],
  },
};

const languagePicker = document.querySelector("#language");
const languageLabel = document.querySelector("#language-label");
const intro = document.querySelector("#intro");
const description = document.querySelector('meta[name="description"]');
const policyArticles = document.querySelectorAll("[data-policy]");
const homeLink = document.querySelector(".brand");
const languageByBase = new Map(
  Object.keys(languages).map((code) => [code.split("-")[0], code]),
);

function supportedLanguage(value) {
  if (!value) return undefined;
  const base = value.trim().toLowerCase().split(/[-_]/)[0];
  return languageByBase.get(base);
}

function showLanguage(code) {
  const locale = languages[code];
  document.documentElement.lang = code;
  languagePicker.value = code;
  languageLabel.textContent = locale.label;
  homeLink.href = "./?lang=" + code;
  if (intro) {
    intro.textContent = locale.intro;
    description.content = locale.intro;
    const privacyLink = document.querySelector("#privacy-link");
    privacyLink.textContent = locale.privacy;
    privacyLink.href = "privacy.html?lang=" + code;
    document.querySelector("#release-status").textContent = locale.beta;
    document.querySelector("#trailer-label").textContent = locale.trailer;
    screenshotCarousel.setLocale(code, locale);
    return;
  }
  for (const article of policyArticles) {
    article.hidden = article.lang !== code;
    if (!article.hidden) document.title = article.querySelector("h1").textContent;
  }
}

for (const [code, { name }] of Object.entries(languages)) {
  const option = new Option(name, code);
  option.lang = code;
  languagePicker.add(option);
}

const url = new URL(window.location.href);
const requestedLanguage = supportedLanguage(url.searchParams.get("lang"));
const browserLanguage = (navigator.languages || []).map(supportedLanguage).find(Boolean);
showLanguage(requestedLanguage || browserLanguage || "en");
document.querySelector("#language-controls").hidden = false;

languagePicker.addEventListener("change", () => {
  const code = languagePicker.value;
  showLanguage(code);
  url.searchParams.set("lang", code);
  window.history.replaceState(null, "", url);
});
