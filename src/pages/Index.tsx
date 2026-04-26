import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "Обо мне" },
  { id: "gallery", label: "Галерея" },
  { id: "articles", label: "Развитие" },
  { id: "schedule", label: "Расписание" },
  { id: "achievements", label: "Достижения" },
  { id: "contacts", label: "Контакты" },
];

const ARTICLES = [
  {
    emoji: "🎨",
    color: "bg-kidz-pink",
    title: "Творческое мышление в 3–5 лет",
    desc: "Как рисование и лепка развивают воображение и мелкую моторику малышей.",
    tag: "Творчество",
  },
  {
    emoji: "🧩",
    color: "bg-kidz-blue",
    title: "Игра как способ обучения",
    desc: "Почему игровой подход — лучший метод развития ребёнка в дошкольном возрасте.",
    tag: "Педагогика",
  },
  {
    emoji: "📚",
    color: "bg-kidz-green",
    title: "Подготовка к школе: с чего начать",
    desc: "Практические советы для родителей: что важно развить до первого класса.",
    tag: "Советы",
  },
  {
    emoji: "🌱",
    color: "bg-kidz-yellow",
    title: "Эмоциональный интеллект у детей",
    desc: "Как помочь ребёнку распознавать и выражать свои чувства здоровым образом.",
    tag: "Психология",
  },
];

const SCHEDULE = [
  { day: "Понедельник", color: "bg-kidz-pink", items: ["9:00 — Утренняя зарядка", "10:00 — Развитие речи", "15:00 — Рисование"] },
  { day: "Вторник", color: "bg-kidz-blue", items: ["9:00 — Музыка и движение", "10:30 — ФЭМП", "15:00 — Лепка"] },
  { day: "Среда", color: "bg-kidz-green", items: ["9:00 — Утренний круг", "10:00 — Природоведение", "15:00 — Физкультура"] },
  { day: "Четверг", color: "bg-kidz-purple", items: ["9:00 — Чтение и сказки", "10:30 — Конструирование", "15:00 — Театр"] },
  { day: "Пятница", color: "bg-kidz-orange", items: ["9:00 — Итоговый круг", "10:00 — На улице", "15:00 — Творчество"] },
];

const ACHIEVEMENTS = [
  { emoji: "🥇", name: "Ногин Леонид", age: "4 года", achievement: "I место — Региональный конкурс «Космос загадочный и бесконечный», федеральный журнал «Звёздочка наша», Новосибирская область", color: "border-kidz-yellow" },
  { emoji: "🥈", name: "Юркин Виктор", age: "4 года", achievement: "II место — Региональный конкурс «Космос загадочный и бесконечный», федеральный журнал «Звёздочка наша», Новосибирская область", color: "border-kidz-blue" },
  { emoji: "🥉", name: "Северова Анастасия", age: "4 года", achievement: "III место — Региональный конкурс «Космос загадочный и бесконечный», федеральный журнал «Звёздочка наша», Новосибирская область", color: "border-kidz-orange" },
];

const GALLERY_ITEMS = [
  { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/8cd61219-ca6d-4ddc-b263-d4952d5e8a5a.jpg", label: "Занятие по рисованию", color: "bg-kidz-pink" },
  { emoji: "🧸", label: "Игровое время", color: "bg-kidz-blue" },
  { emoji: "🎭", label: "Театральная постановка", color: "bg-kidz-purple" },
  { emoji: "🌿", label: "Прогулка на природе", color: "bg-kidz-green" },
  { emoji: "📚", label: "Чтение сказок", color: "bg-kidz-yellow" },
  { emoji: "🎵", label: "Музыкальное занятие", color: "bg-kidz-orange" },
];

function SectionTitle({ emoji, title, color }: { emoji: string; title: string; color: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{emoji}</div>
      <h2 className={`font-pacifico text-4xl ${color}`}>{title}</h2>
      <div className="mt-3 flex justify-center gap-1">
        {["bg-kidz-yellow", "bg-kidz-orange", "bg-kidz-pink", "bg-kidz-purple", "bg-kidz-blue"].map((c, i) => (
          <div key={i} className={`${c} h-1.5 w-8 rounded-full`} />
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen font-nunito bg-kidz-cream overflow-x-hidden">
      {/* Floating background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-kidz-yellow opacity-20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-kidz-pink opacity-15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 -left-16 w-72 h-72 bg-kidz-blue opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-kidz-green opacity-15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b-2 border-kidz-yellow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="font-pacifico text-2xl text-kidz-orange hover:scale-105 transition-transform">
            🌈 Мария Говорова
          </button>
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                  activeSection === item.id
                    ? "bg-kidz-orange text-white shadow-md"
                    : "text-gray-600 hover:bg-kidz-yellow/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden p-2 rounded-xl bg-kidz-yellow/30 hover:bg-kidz-yellow/60 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-kidz-yellow/50 px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-2 rounded-xl font-semibold transition-colors ${
                  activeSection === item.id ? "bg-kidz-orange text-white" : "hover:bg-kidz-yellow/20 text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative z-10 pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-kidz-yellow/40 text-kidz-orange font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              🎓 Воспитатель 1 квалификационной категории
            </div>
            <h1 className="font-pacifico text-5xl md:text-6xl text-gray-800 leading-tight mb-4">
              Привет!<br />
              <span className="text-kidz-orange">Я Мария</span> ☀️
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Создаю для детей радостный мир знаний, творчества и дружбы. Каждый день — новое приключение!
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-kidz-orange text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
              >
                Записаться на занятие
              </button>
              <button
                onClick={() => scrollTo("gallery")}
                className="bg-white text-kidz-orange font-bold px-6 py-3 rounded-2xl border-2 border-kidz-orange shadow hover:scale-105 hover:bg-kidz-orange/5 transition-all duration-200"
              >
                Смотреть галерею
              </button>
            </div>
            <div className="flex gap-6 mt-10 justify-center md:justify-start">
              {[
                { value: "20+", label: "лет опыта", color: "text-kidz-orange" },
                { value: "200+", label: "выпускников", color: "text-kidz-pink" },
                { value: "50+", label: "наград", color: "text-kidz-purple" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className={`font-pacifico text-3xl ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-gray-500 font-semibold mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-kidz-yellow animate-spin-slow" />
              <div className="absolute inset-4 bg-gradient-to-br from-kidz-yellow via-kidz-orange to-kidz-pink rounded-full opacity-30 blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/f22a45c6-3e68-4279-9065-e0f189722923.jpg"
                alt="Мария Михайловна Говорова"
                className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover rounded-full border-4 border-white shadow-2xl"
              />
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg px-3 py-2 font-bold text-xl animate-float">🎨</div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg px-3 py-2 font-bold text-xl animate-float-slow" style={{ animationDelay: "1s" }}>⭐</div>
              <div className="absolute top-1/2 -right-10 bg-kidz-green text-white rounded-2xl shadow-lg px-3 py-2 font-bold text-sm animate-float" style={{ animationDelay: "2s" }}>Весело!</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="👩‍🏫" title="Обо мне" color="text-kidz-purple" />
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="space-y-5">
              <p className="text-gray-700 text-lg leading-relaxed">
                Я воспитатель с <strong>20-летним опытом работы</strong> с детьми дошкольного возраста. Моя главная цель — создать для каждого ребёнка атмосферу любви, безопасности и радости познания.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Работаю по авторской методике, сочетающей игровое обучение, творчество и развитие эмоционального интеллекта. Верю, что счастливый ребёнок — это успешный ребёнок.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { emoji: "🎓", text: "Новосибирское педагогическое училище №2" },
                  { emoji: "📜", text: "Учитель начальных классов" },
                  { emoji: "🏅", text: "1 квалификационная категория" },
                  { emoji: "🌍", text: "Автор методик" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-kidz-cream rounded-xl p-3 font-semibold text-sm text-gray-700">
                    <span className="text-2xl">{item.emoji}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎨", title: "Творчество", desc: "Рисование, лепка, аппликация", bg: "bg-kidz-pink/20 border-kidz-pink" },
                { emoji: "🧩", title: "Логика", desc: "Математика, конструирование", bg: "bg-kidz-blue/20 border-kidz-blue" },
                { emoji: "📖", title: "Чтение", desc: "Сказки, стихи, развитие речи", bg: "bg-kidz-green/20 border-kidz-green" },
                { emoji: "🎭", title: "Театр", desc: "Постановки и ролевые игры", bg: "bg-kidz-yellow/30 border-kidz-yellow" },
              ].map((card) => (
                <div key={card.title} className={`${card.bg} border-2 rounded-2xl p-4 hover:scale-105 transition-transform cursor-default`}>
                  <div className="text-3xl mb-2">{card.emoji}</div>
                  <div className="font-bold text-gray-800">{card.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📸" title="Галерея" color="text-kidz-blue" />
          <p className="text-center text-gray-500 mt-2 mb-10">Моменты из жизни нашей группы</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`${'photo' in item ? '' : item.color} rounded-3xl aspect-square flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform cursor-pointer shadow-md hover:shadow-xl overflow-hidden relative`}
              >
                {'photo' in item ? (
                  <>
                    <img src={item.photo} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 rounded-3xl" />
                    <div className="relative text-white font-bold text-sm text-center px-4">{item.label}</div>
                  </>
                ) : (
                  <>
                    <div className="text-6xl">{item.emoji}</div>
                    <div className="text-white font-bold text-sm text-center px-4">{item.label}</div>
                    <div className="text-white/70 text-xs">Нажмите для просмотра</div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-kidz-blue text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200">
              Загрузить все фото 🖼️
            </button>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📝" title="Развитие детей" color="text-kidz-green" />
          <p className="text-center text-gray-500 mt-2 mb-10">Полезные статьи для родителей</p>
          <div className="grid md:grid-cols-2 gap-6">
            {ARTICLES.map((article, i) => (
              <div
                key={i}
                className="bg-kidz-cream border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
              >
                <div className={`${article.color} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {article.emoji}
                </div>
                <div className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {article.tag}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">{article.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{article.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-kidz-orange font-bold text-sm group-hover:gap-2 transition-all">
                  Читать статью <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📅" title="Расписание занятий" color="text-kidz-orange" />
          <p className="text-center text-gray-500 mt-2 mb-10">Актуальное расписание на неделю</p>
          <div className="grid md:grid-cols-5 gap-4">
            {SCHEDULE.map((day, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`${day.color} px-4 py-3 text-white font-bold text-center text-sm`}>
                  {day.day}
                </div>
                <div className="p-4 space-y-2">
                  {day.items.map((item, j) => (
                    <div key={j} className="text-xs text-gray-600 bg-gray-50 rounded-xl p-2 leading-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-kidz-yellow/30 border-2 border-kidz-yellow rounded-3xl p-5 flex items-start gap-3">
            <span className="text-2xl">📌</span>
            <div>
              <div className="font-bold text-gray-800">Дополнительные мероприятия</div>
              <div className="text-gray-600 text-sm mt-1">Каждую последнюю пятницу месяца проводятся праздники и открытые занятия для родителей. Следите за анонсами!</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="🏆" title="Достижения детей" color="text-kidz-yellow" />
          <p className="text-center text-gray-500 mt-2 mb-10">Гордость нашей группы — успехи каждого ребёнка</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {ACHIEVEMENTS.map((child, i) => (
              <div
                key={i}
                className={`bg-kidz-cream border-l-4 ${child.color} rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{child.emoji}</div>
                  <div>
                    <div className="font-bold text-gray-800">{child.name}</div>
                    <div className="text-xs text-gray-500">{child.age}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{child.achievement}</p>
              </div>
            ))}
          </div>
          {/* Diplomas */}
          <div className="bg-kidz-cream rounded-3xl p-6">
            <div className="font-bold text-gray-800 text-center text-lg mb-5">🚀 Дипломы конкурса «Космос загадочный и бесконечный»</div>
            <img
              src="https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/00a36415-2577-48e7-a2e2-1ab0b078a448.jpg"
              alt="Дипломы конкурса поделок ко Дню Космонавтики"
              className="w-full rounded-2xl shadow-lg hover:scale-[1.01] transition-transform cursor-zoom-in"
            />
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-kidz-yellow to-kidz-orange text-white font-bold px-8 py-4 rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer">
              <span className="text-xl">🌟</span>
              Все достижения группы
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle emoji="📬" title="Контакты" color="text-kidz-pink" />
          <p className="text-center text-gray-500 mt-2 mb-10">Свяжитесь со мной — отвечаю быстро!</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (953) 861-20-47", color: "bg-kidz-green/20 text-kidz-green" },
                { icon: "Mail", label: "Email", value: "govorova.73@inbox.ru", color: "bg-kidz-blue/20 text-kidz-blue" },
                { icon: "MapPin", label: "Адрес", value: "Новосибирск, ул. Ереванская, 9, МБДОУ д/с №272", color: "bg-kidz-orange/20 text-kidz-orange" },
                { icon: "Clock", label: "Время работы", value: "Пн–Пт, 7:00–14:00 / 13:00–19:00", color: "bg-kidz-purple/20 text-kidz-purple" },
              ].map((contact) => (
                <div key={contact.label} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${contact.color} w-10 h-10 rounded-xl flex items-center justify-center`}>
                    <Icon name={contact.icon as "Phone" | "Mail" | "MapPin" | "Clock"} size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">{contact.label}</div>
                    <div className="text-gray-800 font-semibold text-sm">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Написать сообщение ✉️</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito focus:outline-none focus:border-kidz-orange transition-colors text-sm"
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito focus:outline-none focus:border-kidz-orange transition-colors text-sm"
                />
                <textarea
                  placeholder="Ваш вопрос или пожелание..."
                  rows={4}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito focus:outline-none focus:border-kidz-orange transition-colors text-sm resize-none"
                />
                <button className="w-full bg-kidz-orange text-white font-bold py-3 rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
                  Отправить сообщение 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-gray-800 text-white py-8 px-4 text-center">
        <div className="font-pacifico text-2xl text-kidz-yellow mb-2">🌈 Мария Говорова</div>
        <div className="text-gray-400 text-sm">Воспитатель 1 квалификационной категории · Растим счастливых детей</div>
        <div className="text-gray-600 text-xs mt-4">© 2024 Все права защищены</div>
      </footer>
    </div>
  );
}