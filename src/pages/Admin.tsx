import { useState, useEffect } from "react";

const REVIEWS_URL = "https://functions.poehali.dev/1a70898b-b4d0-4b0b-9be6-76fe7bd8c76b";
const ADMIN_PASSWORD = "govorova272";

type Review = { id: number; name: string; text: string; rating: number; approved: boolean; created_at: string };

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (password === ADMIN_PASSWORD) setAuth(true);
    else alert("Неверный пароль");
  };

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const r = await fetch(REVIEWS_URL + "?admin=1");
      const data = await r.json();
      const parsed = typeof data === "string" ? JSON.parse(data) : data;
      setReviews(parsed.reviews || []);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  useEffect(() => { if (auth) fetchReviews(); }, [auth]);

  const approve = async (id: number, approved: boolean) => {
    await fetch(REVIEWS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "approve", id, approved }),
    });
    fetchReviews();
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить отзыв?")) return;
    await fetch(REVIEWS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });
    fetchReviews();
  };

  if (!auth) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-xl">
          <div className="text-4xl text-center mb-4">🔒</div>
          <h1 className="font-bold text-xl text-center mb-6 text-gray-800">Модерация отзывов</h1>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && login()}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-orange-400"
          />
          <button onClick={login} className="w-full bg-orange-400 text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity">
            Войти
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-2xl text-gray-800">💬 Модерация отзывов</h1>
          <button onClick={fetchReviews} className="text-sm text-orange-500 font-semibold underline">Обновить</button>
        </div>

        {loading && <p className="text-center text-gray-400">Загрузка...</p>}

        {!loading && reviews.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">📭</div>
            <p>Отзывов пока нет</p>
          </div>
        )}

        <div className="space-y-4">
          {reviews.map(r => (
            <div key={r.id} className={`bg-white rounded-2xl p-5 shadow-sm border-2 ${r.approved ? "border-green-200" : "border-yellow-200"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-800">{r.name}</span>
                    <span className="text-yellow-400 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.approved ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {r.approved ? "Опубликован" : "На проверке"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
                  <p className="text-gray-400 text-xs mt-2">{new Date(r.created_at).toLocaleDateString("ru-RU")}</p>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {!r.approved ? (
                    <button onClick={() => approve(r.id, true)} className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90">
                      ✓ Одобрить
                    </button>
                  ) : (
                    <button onClick={() => approve(r.id, false)} className="bg-gray-200 text-gray-600 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90">
                      Скрыть
                    </button>
                  )}
                  <button onClick={() => remove(r.id)} className="bg-red-100 text-red-500 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90">
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
