import { useState } from "react";
import Icon from "@/components/ui/icon";
import SectionTitle from "@/components/SectionTitle";
import ArticleModal from "@/components/ArticleModal";
import ReviewsSection from "@/components/ReviewsSection";
import { NAV_ITEMS, ARTICLES, NEWS, SCHEDULE, ACHIEVEMENTS, GALLERY_GROUPS } from "@/pages/data";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openArticle, setOpenArticle] = useState<typeof ARTICLES[0] | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
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
              Здравствуйте!<br />
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
              <div className="mt-6">
                <div className="font-bold text-gray-700 text-sm mb-3">🏆 Мои награды</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/a7962476-bb68-4a7f-b4cc-3177d1ac940f.jpg", label: "Победитель Всероссийского конкурса «Космонавтика» — «Солнечный свет», 2026" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/8e63fb18-c1cb-498b-bc02-91b795680803.jpg", label: "Диплом лауреата I степени — VI Всероссийский конкурс «Надежды России», 2026" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/5d48b5fe-b743-4869-a0de-32d440597c97.jpg", label: "Благодарность за подготовку победителей — конкурс «Новогоднее счастье», «Звёздочка наша», 2026" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/455e9566-a48f-440a-b700-df5d69bd133f.jpg", label: "Диплом I степени ЦРТИ «ПАРТА» — «Век за веком рядом с человеком»" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/39346b22-1b06-41f4-a67b-050037c62969.jpg", label: "Диплом лауреата I степени — «Талант педагога», олимпиада ФГОС" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/69179d1e-05c8-4a76-bb2e-6e235387d5e1.jpg", label: "Диплом победителя (1 место) — Международный конкурс «Лучший проект воспитателя», «Солнечный свет»" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/da3db21b-45ee-47ea-a4df-c4016cb63f76.jpg", label: "Диплом II степени — Общероссийский конкурс «Лучший сценарий мероприятия», «Магистр», 2017" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/784c677a-de34-4182-9f41-c2a96fdcd483.jpg", label: "Почётная грамота — Администрация Центрального округа г. Новосибирска, 2020" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/cc52f2fa-ca2e-4a46-a16c-5d7439b6b332.jpg", label: "Почётная грамота — Администрация Центрального округа г. Новосибирска, 2018" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/67b5a89c-0df1-497a-a42a-b300a1968c04.jpg", label: "Почётная грамота — МБДОУ Детский сад №272, всестороннее развитие детей, 2023–2024" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/93092299-a639-48a0-9438-b786360452a3.jpg", label: "Почётная грамота — МБДОУ Детский сад №272, День работников дошкольного образования" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/098e8390-43ff-4e6f-bb4f-d20ef852e198.jpg", label: "Грамота — МБДОУ Детский сад №272, развитие речи 2022–2023" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/1be59866-f3dc-4673-b1f2-a57e8860e398.jpg", label: "Грамота — МБДОУ Детский сад №272, добросовестный труд, 2025" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/f6f45dfc-d87f-44ec-8d0e-5ede4e47c8e9.jpg", label: "Благодарственное письмо — «Педталант», конкурс «Сценарий спортивного праздника»" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/eaa8cfbf-625b-41d8-b6e2-d022f0633a71.jpg", label: "Благодарственное письмо — Всероссийское общество охраны природы, 2017–2018" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/03508ad2-bbca-4c8f-ad6d-59176631151d.jpg", label: "Благодарственное письмо — Администрация Центрального округа г. Новосибирска, 2018" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/12a3df9a-5f56-4464-9bb4-135fe4bd754c.jpg", label: "Благодарственное письмо — номинация «Первый наставник», выпускники группы №2 «Сказка», 2017" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/e63836a8-21a1-4948-a692-fba3a17bbd6a.jpg", label: "Грамота — Первичная организация Профсоюза, плодотворная работа в деле воспитания детей" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/16d43d84-8894-4586-94cb-004e8c8f9583.jpg", label: "Диплом победителя (1 место) — Международный конкурс «Лучший проект воспитателя», «Солнечный свет», 2024" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/597ac3a6-8eb1-4a15-ae55-7eef4849096d.jpg", label: "Диплом победителя (1 место) — Всероссийский конкурс «Лучший проект воспитателя» (Осенний гербарий), «Солнечный свет», 2025" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/8cc69b80-a322-45e4-818e-a72ab169befc.jpg", label: "Диплом победителя (1 место) — Всероссийский конкурс «Детский сад» (Мама — солнышко моё), «Солнечный свет», 2025" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/7b9ba561-5620-4f91-b4b3-595e69f0618a.jpg", label: "Диплом победителя (1 место) — Всероссийский конкурс «Детский сад» (Мамочка, ты тоже маленькой была), «Солнечный свет», 2026" },
                    { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/6cc07a2c-fcdf-4511-b636-9ce77bd6c9e3.jpg", label: "Диплом победителя (1 место) — Всероссийский конкурс «Стенгазета» (Мамочка, ты тоже маленькой была), «Солнечный свет», 2026" },
                  ].map((award, i) => (
                    <div key={i} onClick={() => setLightboxSrc(award.src)} className="bg-kidz-cream rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 group cursor-zoom-in">
                      <img src={award.src} alt={award.label} className="w-full h-36 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                      <div className="px-3 py-2 text-xs text-gray-500 font-semibold leading-snug">{award.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎨", label: "Творчество", color: "bg-kidz-pink", desc: "Рисование, лепка, аппликация" },
                { emoji: "🧩", label: "Логика", color: "bg-kidz-blue", desc: "Математика и мышление" },
                { emoji: "🎭", label: "Театр", color: "bg-kidz-purple", desc: "Сказки и ролевые игры" },
                { emoji: "📚", label: "Чтение", color: "bg-kidz-green", desc: "Книги и развитие речи" },
                { emoji: "🌱", label: "Природа", color: "bg-kidz-yellow", desc: "Экология и наблюдения" },
                { emoji: "🎵", label: "Музыка", color: "bg-kidz-orange", desc: "Песни и ритмика" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-3xl p-4 text-white hover:scale-105 transition-transform cursor-pointer shadow-md`}
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="font-bold text-sm">{item.label}</div>
                  <div className="text-xs opacity-80 mt-0.5">{item.desc}</div>
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
          <div className="bg-kidz-cream rounded-3xl p-6">
            <div className="font-bold text-gray-800 text-center text-lg mb-5">🚀 Дипломы конкурса «Космос загадочный и бесконечный»</div>
            <img
              src="https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/00a36415-2577-48e7-a2e2-1ab0b078a448.jpg"
              alt="Дипломы конкурса поделок ко Дню Космонавтики"
              className="w-full rounded-2xl shadow-lg hover:scale-[1.01] transition-transform cursor-zoom-in"
            />
          </div>

          <div className="bg-kidz-cream rounded-3xl p-6 mt-6">
            <div className="font-bold text-gray-800 text-center text-lg mb-2">🌸 Дипломы конкурса «Весенний подарок», 2026</div>
            <p className="text-center text-gray-500 text-sm mb-5">Региональный конкурс Новосибирской области — 1 место</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/9bb35b0c-2d8b-4c76-82b6-5d4c09202e16.jpg", name: "Северова Настя, 4 года" },
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/257afd76-ac4d-45ca-8490-1a66bbc04538.jpg", name: "Сердюцкий Ваня, 4 года" },
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/36f1d09a-de63-4ed9-8f5d-7caff399687c.jpg", name: "Чурсина Алеса, 4 года" },
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/1007c95c-2603-47e2-9dd9-af8b37d36f14.jpg", name: "Беликова Эмилия, 4 года" },
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/f3615adc-fe87-4624-bb34-96ee52d77049.jpg", name: "Буренкова Есения, 4 года" },
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/456da038-4653-460f-8161-893a1006e2b4.jpg", name: "Финагина Майя, 4 года" },
                { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/32f86fba-733c-4de1-b404-21134a701173.jpg", name: "Екимов Серёжа, 4 года" },
              ].map((child, i) => (
                <div key={i} onClick={() => setLightboxSrc(child.src)} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-zoom-in">
                  <div className="relative overflow-hidden">
                    <img src={child.src} alt={child.name} className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow-lg">
                        <Icon name="ZoomIn" size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-semibold text-gray-700">🥇 1 место</p>
                    <p className="text-xs text-gray-500 mt-0.5">{child.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-kidz-yellow to-kidz-orange text-white font-bold px-8 py-4 rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer">
              <span className="text-xl">🌟</span>
              Все достижения группы
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

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

      {/* DOCUMENTS */}
      <section id="documents" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle emoji="📄" title="Мои документы" color="text-kidz-blue" />
          <p className="text-center text-gray-500 mt-2 mb-10">Образование и повышение квалификации</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/726e482c-ab44-48a0-b0f6-24f185c545d7.jpg", label: "Диплом — Новосибирское педагогическое училище №2, специальность «Преподавание в начальных классах», 1992" },
              { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/831b290e-b82d-4602-8143-1e33dacfeae1.jpg", label: "Удостоверение о повышении квалификации — НИПКиПРО, программа «Особенности коррекционной составляющей процесса обучения», 72 ч., 2018" },
              { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/62cad755-aa8e-4ae6-9898-ce5df58c4d04.jpg", label: "Удостоверение о повышении квалификации — НИПКиПРО, программа «Взаимодействие ДОУ и семьи в контексте ФГОС ДО», 36 ч., 2016" },
              { src: "https://cdn.poehali.dev/projects/b4ae50f1-b43b-46af-8337-6ac7bde0d6f4/bucket/0a03d606-a04c-4677-b959-11d0c256110d.jpg", label: "Удостоверение о повышении квалификации — НИПКиПРО, программа «Речевое творчество и детский театр в ДОО», 72 ч., 2023" },
            ].map((doc, i) => (
              <div key={i} onClick={() => setLightboxSrc(doc.src)} className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-zoom-in">
                <div className="relative overflow-hidden">
                  <img src={doc.src} alt={doc.label} className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow-lg">
                      <Icon name="ZoomIn" size={18} />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-600 leading-snug font-medium">{doc.label}</p>
                </div>
              </div>
            ))}
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

    {openArticle && (
      <ArticleModal article={openArticle} onClose={() => setOpenArticle(null)} />
    )}

    {lightboxSrc && (
      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxSrc(null)}>
        <button onClick={() => setLightboxSrc(null)} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors">
          <Icon name="X" size={24} />
        </button>
        <img src={lightboxSrc} alt="Диплом" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
      </div>
    )}
    </>
  );
}