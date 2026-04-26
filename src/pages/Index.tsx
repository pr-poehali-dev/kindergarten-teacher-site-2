import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "Обо мне" },
  { id: "news", label: "Новости" },
  { id: "gallery", label: "Галерея" },
  { id: "articles", label: "Статьи" },
  { id: "schedule", label: "Расписание" },
  { id: "achievements", label: "Достижения" },
  { id: "contacts", label: "Контакты" },
];

const ARTICLES = [
  {
    emoji: "🌿",
    color: "bg-kidz-green",
    title: "Оздоровление в детском саду",
    desc: "Какие методы укрепления здоровья применяются в детском саду и как родители могут поддержать ребёнка дома.",
    tag: "Здоровье",
    content: `Здоровье ребёнка — главная ценность, и в детском саду мы уделяем этому особое внимание каждый день.

Основные направления оздоровительной работы:

🌅 Утренняя гимнастика
Каждое утро начинается с 10–15 минут зарядки. Это помогает детскому организму проснуться, улучшает кровообращение и поднимает настроение на весь день.

💨 Дыхательная гимнастика
Специальные упражнения укрепляют дыхательную систему, помогают в профилактике простудных заболеваний. Мы используем методику Стрельниковой и игровые дыхательные упражнения.

🚶 Прогулки на свежем воздухе
Дети гуляют дважды в день — утром и после сна. Свежий воздух, подвижные игры и общение с природой — лучшая профилактика болезней.

😴 Дневной сон
Полноценный отдых в середине дня восстанавливает силы и нервную систему ребёнка. После сна проводим бодрящую гимнастику.

🥗 Рациональное питание
Меню составлено с учётом возрастных потребностей. Четырёхразовое питание обеспечивает ребёнка всеми необходимыми витаминами и минералами.

🖐 Гигиенические процедуры
Учим детей мыть руки, следить за чистотой, соблюдать режим дня — это основа здорового образа жизни на всю жизнь.

Советы для родителей:
— Соблюдайте единый режим дня дома и в саду
— Одевайте ребёнка по погоде, не кутайте
— Поощряйте физическую активность и прогулки
— Ограничивайте экранное время до 30–40 минут в день`,
  },
  {
    emoji: "🤗",
    color: "bg-kidz-yellow",
    title: "Адаптация малыша к детскому саду",
    desc: "Как помочь ребёнку легко и безболезненно привыкнуть к новому коллективу и распорядку дня.",
    tag: "Адаптация",
    content: `Поступление в детский сад — это большое событие в жизни малыша. Новое место, незнакомые люди, непривычный режим — всё это требует времени для привыкания.

Три фазы адаптации:

1️⃣ Острая фаза (1–2 недели)
Ребёнок может плакать при расставании, отказываться от еды, плохо спать. Это нормально! Организм адаптируется к новым условиям.

2️⃣ Подострая фаза (2–4 недели)
Малыш начинает привыкать к режиму, знакомится с воспитателем и детьми. Слёзы при расставании становятся реже и короче.

3️⃣ Компенсация (1–2 месяца)
Ребёнок с удовольствием идёт в сад, у него появляются друзья, он активно участвует в занятиях.

Как родителям помочь ребёнку:

✅ Начинайте постепенно — первые дни оставляйте на 1–2 часа, постепенно увеличивая время
✅ Прощайтесь быстро и уверенно — долгие прощания усиливают тревогу
✅ Придумайте ритуал прощания — поцелуй, особое пожатие руки, «секретное» слово
✅ Рассказывайте о саде позитивно — дети чувствуют настрой родителей
✅ Соблюдайте режим дня дома — ложитесь и вставайте в одно время
✅ Не меняйте сад и группу в период адаптации

Чего не стоит делать:
— Пугать детским садом («будешь плохо себя вести — оставлю в саду»)
— Обманывать («я вернусь через минуту», а возвращаться через 8 часов)
— Игнорировать тревогу ребёнка

Помните: адаптация — это временно. Скоро малыш будет с радостью бежать к друзьям и любимым воспитателям!`,
  },
  {
    emoji: "🌞",
    color: "bg-kidz-pink",
    title: "Закаливание детей в саду",
    desc: "Простые и эффективные методы закаливания, которые укрепляют иммунитет и снижают заболеваемость.",
    tag: "Здоровье",
    content: `Закаливание — один из самых действенных способов укрепить здоровье ребёнка. Главное — постепенность и регулярность.

Методы закаливания в детском саду:

💧 Воздушные ванны
Самый мягкий метод. Проветриваем помещение, проводим занятия при оптимальной температуре 18–20°C. Летом — занятия на свежем воздухе.

🦶 Хождение по массажным коврикам
После дневного сна дети проходят по коврикам с разными поверхностями — это стимулирует биологически активные точки стопы и укрепляет свод.

💦 Умывание прохладной водой
Постепенно снижаем температуру воды при умывании. Начинаем с 28°C, доводим до 18°C. Процедура занимает 1–2 минуты.

🌿 Полоскание горла
Помогает укрепить горло и снизить заболеваемость ОРВИ. Используем кипячёную воду комнатной температуры.

☀️ Прогулки в любую погоду
Выходим гулять при температуре до -15°C. Правильно одетый ребёнок не замёрзнет, зато получит отличную тренировку иммунитета.

Как продолжить закаливание дома:

— Не кутайте ребёнка в помещении
— Поддерживайте в комнате температуру 20–22°C
— Летом разрешайте ходить босиком по траве и песку
— Контрастный душ для детей старше 4 лет (тёплый/прохладный)

Важно: перед началом закаливания проконсультируйтесь с педиатром, особенно если у ребёнка есть хронические заболевания.`,
  },
  {
    emoji: "🧠",
    color: "bg-kidz-blue",
    title: "Психологический комфорт в группе",
    desc: "Как создать атмосферу доверия и безопасности, в которой каждый ребёнок чувствует себя нужным и любимым.",
    tag: "Психология",
    content: `Психологический комфорт — это основа успешного развития и обучения. Когда ребёнок чувствует себя в безопасности, он открыт к познанию мира.

Что такое психологический комфорт:

Это состояние, когда ребёнок:
— Не боится ошибаться
— Знает, что его любят и принимают
— Может свободно выражать свои чувства
— Имеет друзей и чувствует себя частью коллектива

Как мы создаём комфортную атмосферу в группе:

🌈 Утренний круг
Каждое утро собираемся вместе, делимся настроением, планируем день. Это помогает детям почувствовать себя командой.

🎭 Игры на эмоции
Учимся называть и выражать чувства: радость, грусть, злость, страх. Ребёнок, умеющий говорить о своих эмоциях, реже устраивает истерики.

🤝 Правила группы
Простые правила, которые дети придумывают сами: «Мы помогаем друг другу», «Мы не обижаем», «Мы говорим спасибо». Это воспитывает ответственность.

📖 Чтение и обсуждение книг
Разбираем ситуации из сказок: как поступил герой, правильно ли это, как бы поступил ты?

Признаки психологического неблагополучия:
— Ребёнок не хочет идти в сад более 2–3 месяцев
— Часто плачет без причины
— Стал агрессивным или замкнутым
— Жалуется на боли в животе по утрам

Если вы замечаете эти признаки — поговорите с воспитателем. Вместе мы найдём причину и поможем малышу.`,
  },
];

const NEWS = [
  {
    date: "26 апреля 2026",
    emoji: "🧹",
    color: "bg-kidz-green",
    title: "Весенний субботник на территории сада",
    text: "Провели дружный субботник на участке! Убрали прошлогодние листья, облагородили территорию и подготовили площадку к тёплому сезону. Спасибо всем, кто вышел помочь!",
    photos: [
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/e395c1fb-5ff4-49cd-942b-67901f56f260.jpg",
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/ca5fba41-5c9b-440d-8749-424569eedb72.jpg",
    ],
  },
  {
    date: "12 апреля 2026",
    emoji: "🚀",
    color: "bg-kidz-blue",
    title: "День космонавтики",
    text: "Отметили День космонавтики! Дети узнали о первом полёте человека в космос, мастерили ракеты и нарисовали целую выставку космических кораблей. Поехали!",
    photos: [
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/6c0cc318-fcf8-4127-9a90-c1f210fde737.jpg",
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/3af32f58-7666-44e9-b622-f89dd13b6159.jpg",
    ],
  },
  {
    date: "18 апреля 2026",
    emoji: "🌱",
    color: "bg-kidz-green",
    title: "Огород на подоконнике",
    text: "Посадили лук и наблюдаем за ростом! Дети с удовольствием поливают растения и следят за каждым новым листочком. Наш мини-огород уже радует первыми всходами!",
    photos: [
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/6debbf20-b4f0-43d7-b9ab-24fc52f2f7ab.jpg",
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/ae9e69bf-4883-42be-9cf5-19a22ff655de.jpg",
    ],
  },
  {
    date: "18 апреля 2026",
    emoji: "🥕",
    color: "bg-kidz-orange",
    title: "Объявление: огород на подоконнике",
    text: "Начинаем совместный проект — сажаем лук, укроп и петрушку прямо в группе. Приносите небольшие горшочки или контейнеры для рассады. Дети будут наблюдать за ростом растений.",
  },
  {
    date: "1 апреля 2026",
    emoji: "😄",
    color: "bg-kidz-yellow",
    title: "День смеха и юмора",
    text: "Провели весёлый день с розыгрышами, смешными загадками и конкурсом на лучшую улыбку. Смех — лучшее лекарство, и наши дети это точно знают!",
    photos: [
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/30252e32-a630-4d21-bfe5-d7be5a0040ee.jpg",
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/fd40985a-e513-4236-b6e3-9ca45bbbad1e.jpg",
      "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/60c85178-cb01-4d9b-9197-36a62fd29448.jpg",
    ],
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

const GALLERY_GROUPS = [
  {
    title: "Сказки",
    emoji: "📖",
    color: "text-kidz-purple",
    items: [
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/6d77832f-727c-4dee-9dd8-16ca884080bd.jpg", label: "Настольные игры по сказкам" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/88149f49-a9c3-4149-84b6-5ac095c1e90e.jpg", label: "Занятие по сказкам у доски" },
    ],
  },


  {
    title: "Занятия",
    emoji: "🎨",
    color: "text-kidz-orange",
    items: [
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/6a693d53-5084-4aa4-8233-4a7297e10cfc.jpg", label: "Занятие о полезных продуктах" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/8cd61219-ca6d-4ddc-b263-d4952d5e8a5a.jpg", label: "Занятие по рисованию" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/0e498fc8-7b61-4a69-9173-af05ec912af0.jpg", label: "Ролевая игра «Доктор»" },
    ],
  },
  {
    title: "Поделки 9 Мая",
    emoji: "🎖️",
    color: "text-kidz-pink",
    items: [
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/6cc21e0f-0cf1-4e06-a008-f84b7ad16b6d.jpg", label: "Победа 1941–1945" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/c98b6c70-4225-4910-94b7-5bfc4f17f731.jpg", label: "Поделка «9 Мая»" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/70d85b16-7a06-4982-b075-776355b296c3.jpg", label: "Вечный огонь" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/c61b5ba4-3889-4f82-b479-a36f9e68ce2b.jpg", label: "Цветы к 9 Мая" },
      { photo: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/709d02fc-a14a-4c54-be61-d13ed310c4a1.jpg", label: "Гармонь с цветами" },
    ],
  },
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
  const [openArticle, setOpenArticle] = useState<typeof ARTICLES[0] | null>(null);

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
            🌈 Говорова Мария Михайловна
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
              <span className="text-kidz-orange">Я Мария Михайловна</span> ☀️
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Создаю для детей радостный мир знаний, творчества и дружбы. Каждый день — новое приключение!
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("gallery")}
                className="bg-kidz-orange text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
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
                Работаю по Федеральной образовательной программе дошкольного образования (ФОП ДО). Верю, что счастливый ребёнок — это успешный ребёнок.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { emoji: "🏫", text: "МБДОУ Детский сад №272" },
                  { emoji: "🎓", text: "Новосибирское педагогическое училище №2" },
                  { emoji: "📜", text: "Учитель начальных классов" },
                  { emoji: "🏅", text: "1 квалификационная категория" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-kidz-cream rounded-xl p-3 font-semibold text-sm text-gray-700">
                    <span className="text-2xl">{item.emoji}</span>
                    {item.text}
                  </div>
                ))}
              </div>
              {/* Personal diploma */}
              <div className="mt-6">
                <div className="font-bold text-gray-700 text-sm mb-3">🏆 Мои награды</div>
                <div className="bg-kidz-cream rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
                  <img
                    src="https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/a7962476-bb68-4a7f-b4cc-3177d1ac940f.jpg"
                    alt="Диплом победителя — Солнечный свет, 1 место"
                    className="w-full object-cover hover:scale-[1.02] transition-transform cursor-zoom-in"
                  />
                  <div className="px-4 py-3 text-xs text-gray-500 font-semibold">
                    🥇 Победитель Всероссийского конкурса «Космонавтика» — портал «Солнечный свет», 2026
                  </div>
                </div>
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

      {/* NEWS */}
      <section id="news" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📰" title="Новости" color="text-kidz-orange" />
          <p className="text-center text-gray-500 mt-2 mb-10">События и объявления нашей группы</p>
          <div className="grid md:grid-cols-2 gap-6">
            {NEWS.map((item, i) => (
              <div key={i} className="bg-kidz-cream rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${item.color} w-11 h-11 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                    {item.emoji}
                  </div>
                  <span className="text-xs text-gray-400 font-semibold">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-2 leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                {'photos' in item && item.photos && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {item.photos.map((src, pi) => (
                      <img key={pi} src={src} alt="" className="rounded-2xl w-full h-36 object-cover hover:scale-[1.02] transition-transform cursor-zoom-in" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📸" title="Галерея" color="text-kidz-blue" />
          <p className="text-center text-gray-500 mt-2 mb-10">Моменты из жизни нашей группы</p>
          <div className="space-y-12">
            {GALLERY_GROUPS.map((group, gi) => (
              <div key={gi}>
                <h3 className={`font-pacifico text-2xl ${group.color} mb-4`}>{group.emoji} {group.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="rounded-3xl aspect-square overflow-hidden relative shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      <img src={item.photo} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/25 rounded-3xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white font-bold text-xs text-center">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📝" title="Статьи для родителей" color="text-kidz-green" />
          <p className="text-center text-gray-500 mt-2 mb-10">Оздоровление и адаптация в детском саду</p>
          <div className="grid md:grid-cols-2 gap-6">
            {ARTICLES.map((article, i) => (
              <div key={i} className="bg-kidz-cream border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className={`${article.color} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {article.emoji}
                </div>
                <div className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  {article.tag}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">{article.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{article.desc}</p>
                <button
                  onClick={() => setOpenArticle(article)}
                  className="mt-5 w-full bg-kidz-orange text-white font-bold py-2.5 px-4 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Читать статью <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE MODAL */}
      {openArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setOpenArticle(null)}>
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className={`${openArticle.color} w-10 h-10 rounded-xl flex items-center justify-center text-xl`}>
                  {openArticle.emoji}
                </div>
                <div>
                  <div className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full mb-0.5">{openArticle.tag}</div>
                  <h2 className="font-bold text-gray-800 text-base leading-tight">{openArticle.title}</h2>
                </div>
              </div>
              <button onClick={() => setOpenArticle(null)} className="text-gray-400 hover:text-gray-700 transition-colors ml-4">
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="px-6 py-6 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {openArticle.content}
            </div>
          </div>
        </div>
      )}

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
                { icon: "Phone", label: "Телефон", value: "+7 (953) 861-20-46", color: "bg-kidz-green/20 text-kidz-green" },
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
        <div className="font-pacifico text-2xl text-kidz-yellow mb-2">🌈 Говорова Мария Михайловна</div>
        <div className="text-gray-400 text-sm">Воспитатель 1 квалификационной категории · Растим счастливых детей</div>
        <div className="text-gray-600 text-xs mt-4">© 2024 Все права защищены</div>
      </footer>
    </div>
  );
}