const chat = document.querySelector("#chat");
const form = document.querySelector("#composer");
const input = document.querySelector("#messageInput");
const settings = document.querySelector("#settings");
const language = document.querySelector("#language");
const voice = document.querySelector("#voice");

document.querySelector("#settingsBtn").addEventListener("click", () => settings.showModal());
document.querySelectorAll(".chip").forEach(button => button.addEventListener("click", () => {
  input.value = button.dataset.prompt;
  input.focus();
}));
function addBubble(text, who) {
  const node = document.createElement("div");
  node.className = `bubble ${who}`;
  node.textContent = text;
  chat.appendChild(node);
  chat.scrollTop = chat.scrollHeight;
}
function speak(text) {
  if (!("speechSynthesis" in window) || voice.value === "none") return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language.value;
  const voices = window.speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith(language.value.slice(0,2).toLowerCase()));
  if (voices.length) {
    const preferred = voices.find(v => voice.value === "female" ? /female|samantha|anna|helena|zira/i.test(v.name) : /male|daniel|alex|thomas/i.test(v.name));
    utterance.voice = preferred || voices[0];
  }
  window.speechSynthesis.speak(utterance);
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;
  addBubble(message, "user");
  input.value = "";
  const replies = {
    "tr-TR": "Mesajını aldım! Gerçek yapay zekâ bağlantısını bir sonraki geliştirme aşamasında ekleyeceğiz. Şu anda bu ekran bir prototip.",
    "de-DE": "Ich habe deine Nachricht erhalten! Die echte KI-Verbindung fügen wir in einer späteren Entwicklungsphase hinzu. Dies ist momentan ein Prototyp.",
    "en-US": "I received your message! We'll connect a real AI model in a later development stage. This screen is currently a prototype."
  };
  const reply = replies[language.value];
  addBubble(reply, "aura");
  speak(reply);
});
document.querySelector("#cameraInput").addEventListener("change", event => {
  const file = event.target.files[0];
  if (file) addBubble(`Fotoğraf seçildi: ${file.name}. Görsel analizini sonraki aşamada ekleyeceğiz.`, "aura");
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
