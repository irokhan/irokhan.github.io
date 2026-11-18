const languages = {
  en: {
    name: "English", label: "Language",
    intro: "Build your necropolis, raise a skeleton army, and lead it on raids.",
    privacy: "Privacy policy", beta: "In beta", gallery: "Screenshots",
    shots: ["A skeleton army on a raid", "The necropolis", "A boss fight", "The tavern"],
  },
  fr: {
    name: "Français", label: "Langue",
    intro: "Bâtis ta nécropole, lève une armée de squelettes et pars en raid.",
    privacy: "Politique de confidentialité", beta: "En bêta", gallery: "Captures d’écran",
    shots: ["Une armée de squelettes en raid", "La nécropole", "Un combat de boss", "La taverne"],
  },
  es: {
    name: "Español", label: "Idioma",
    intro: "Construye tu necrópolis, alza un ejército de esqueletos y sal de incursión.",
    privacy: "Política de privacidad", beta: "En beta", gallery: "Capturas de pantalla",
    shots: ["Un ejército de esqueletos de incursión", "La necrópolis", "Un combate contra un jefe", "La taberna"],
  },
  "pt-BR": {
    name: "Português (Brasil)", label: "Idioma",
    intro: "Construa sua necrópole, reúna um exército de esqueletos e lidere suas incursões.",
    privacy: "Política de privacidade", beta: "Em beta", gallery: "Capturas de tela",
    shots: ["Um exército de esqueletos em uma incursão", "A necrópole", "Uma batalha contra um chefe", "A taverna"],
  },
  de: {
    name: "Deutsch", label: "Sprache",
    intro: "Baue deine Nekropole, erwecke eine Skelettarmee und zieh auf Raubzug.",
    privacy: "Datenschutzerklärung", beta: "In der Beta", gallery: "Screenshots",
    shots: ["Eine Skelettarmee auf Raubzug", "Die Nekropole", "Ein Bosskampf", "Die Taverne"],
  },
  ja: {
    name: "日本語", label: "言語",
    intro: "ネクロポリスを築き、スケルトンの軍団をよみがえらせ、襲撃に出よう。",
    privacy: "プライバシーポリシー", beta: "ベータ版", gallery: "スクリーンショット",
    shots: ["襲撃に向かうスケルトンの軍団", "ネクロポリス", "ボス戦", "酒場"],
  },
  ko: {
    name: "한국어", label: "언어",
    intro: "죽은 자들의 도시를 건설하고 해골 군단을 일으켜 습격에 나서세요.",
    privacy: "개인정보 처리방침", beta: "베타 버전", gallery: "스크린샷",
    shots: ["습격에 나선 해골 군단", "죽은 자들의 도시", "보스 전투", "선술집"],
  },
  "zh-TW": {
    name: "繁體中文", label: "語言",
    intro: "建造你的亡者之城，召喚骷髏大軍，出征突襲。",
    privacy: "隱私權政策", beta: "測試版", gallery: "遊戲截圖",
    shots: ["出征突襲的骷髏大軍", "亡者之城", "首領戰", "酒館"],
  },
  it: {
    name: "Italiano", label: "Lingua",
    intro: "Costruisci la tua necropoli, risveglia un esercito di scheletri e guidalo all’assalto.",
    privacy: "Informativa sulla privacy", beta: "In beta", gallery: "Schermate di gioco",
    shots: ["Un esercito di scheletri all’assalto", "La necropoli", "Uno scontro con un boss", "La taverna"],
  },
  tr: {
    name: "Türkçe", label: "Dil",
    intro: "Nekropolünü kur, bir iskelet ordusu dirilt ve akınlara çık.",
    privacy: "Gizlilik politikası", beta: "Beta sürümü", gallery: "Ekran görüntüleri",
    shots: ["Akına çıkan iskelet ordusu", "Nekropol", "Bir bölüm sonu savaşı", "Meyhane"],
  },
  id: {
    name: "Bahasa Indonesia", label: "Bahasa",
    intro: "Bangun nekropolismu, bangkitkan pasukan kerangka, lalu pimpin mereka dalam serbuan.",
    privacy: "Kebijakan privasi", beta: "Versi beta", gallery: "Tangkapan layar",
    shots: ["Pasukan kerangka saat menyerbu", "Nekropolis", "Pertempuran melawan bos", "Kedai"],
  },
  vi: {
    name: "Tiếng Việt", label: "Ngôn ngữ",
    intro: "Xây dựng thành phố người chết, triệu hồi đội quân bộ xương và dẫn quân đi đột kích.",
    privacy: "Chính sách quyền riêng tư", beta: "Bản thử nghiệm", gallery: "Ảnh chụp màn hình",
    shots: ["Đội quân bộ xương đi đột kích", "Thành phố người chết", "Trận đấu trùm", "Quán rượu"],
  },
};

const languagePicker = document.querySelector("#language");
const languageLabel = document.querySelector("#language-label");
const intro = document.querySelector("#intro");
const description = document.querySelector('meta[name="description"]');
const screens = document.querySelector("#screenshots");
const screenshotNames = ["swarm", "town", "boss", "tavern"];
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
    document.querySelector("#gallery-title").textContent = locale.gallery;
    screens.querySelectorAll("img").forEach((img, index) => {
      img.alt = locale.shots[index];
      img.src = "screens/" + code + "-" + screenshotNames[index] + ".webp";
    });
    screens.hidden = false;
    screens.scrollLeft = 0;
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
