const languages = {
  en: {
    name: "English", label: "Language",
    intro: "Build your necropolis, raise a skeleton army, and lead it on raids.",
  },
  fr: {
    name: "Français", label: "Langue",
    intro: "Bâtis ta nécropole, lève une armée de squelettes et pars en raid.",
  },
  es: {
    name: "Español", label: "Idioma",
    intro: "Construye tu necrópolis, alza un ejército de esqueletos y sal de incursión.",
  },
  "pt-BR": {
    name: "Português (Brasil)", label: "Idioma",
    intro: "Construa sua necrópole, reúna um exército de esqueletos e lidere suas incursões.",
  },
  de: {
    name: "Deutsch", label: "Sprache",
    intro: "Baue deine Nekropole, erwecke eine Skelettarmee und zieh auf Raubzug.",
  },
  ja: {
    name: "日本語", label: "言語",
    intro: "ネクロポリスを築き、スケルトンの軍団をよみがえらせ、襲撃に出よう。",
  },
  ko: {
    name: "한국어", label: "언어",
    intro: "죽은 자들의 도시를 건설하고 해골 군단을 일으켜 습격에 나서세요.",
  },
  "zh-TW": {
    name: "繁體中文", label: "語言",
    intro: "建造你的亡者之城，召喚骷髏大軍，出征突襲。",
  },
  it: {
    name: "Italiano", label: "Lingua",
    intro: "Costruisci la tua necropoli, risveglia un esercito di scheletri e guidalo all’assalto.",
  },
  tr: {
    name: "Türkçe", label: "Dil",
    intro: "Nekropolünü kur, bir iskelet ordusu dirilt ve akınlara çık.",
  },
  id: {
    name: "Bahasa Indonesia", label: "Bahasa",
    intro: "Bangun nekropolismu, bangkitkan pasukan kerangka, lalu pimpin mereka dalam serbuan.",
  },
  vi: {
    name: "Tiếng Việt", label: "Ngôn ngữ",
    intro: "Xây dựng thành phố người chết, triệu hồi đội quân bộ xương và dẫn quân đi đột kích.",
  },
};

const languagePicker = document.querySelector("#language");
const languageLabel = document.querySelector("#language-label");
const intro = document.querySelector("#intro");
const description = document.querySelector('meta[name="description"]');
const languageByBase = new Map(
  Object.keys(languages).map((code) => [code.split("-")[0], code]),
);

function supportedLanguage(value) {
  if (!value) return undefined;
  const base = value.trim().toLowerCase().split(/[-_]/)[0];
  return languageByBase.get(base);
}

function showLanguage(code) {
  const { label, intro: copy } = languages[code];
  document.documentElement.lang = code;
  languagePicker.value = code;
  languageLabel.textContent = label;
  intro.textContent = copy;
  description.content = copy;
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
