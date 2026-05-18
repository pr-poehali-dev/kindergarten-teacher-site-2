import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ADMIN_URL = "https://functions.poehali.dev/9c0cf207-acc6-4481-b777-145da3f7021a";

const api = (password: string, action: string, extra?: object) =>
  fetch(ADMIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, action, ...extra }),
  });

type Review = { id: number; name: string; text: string; rating: number; approved: boolean; created_at: string };

export default function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(() => sessionStorage.getItem("admin_token") || "");
  const [authError, setAuthError] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [addForm, setAddForm] = useState({ name: "", text: "", rating: 5 });
  const [addLoading, setAddLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const login = async () => {
    setAuthError("");
    const r = await api(password, "list");
    if (r.status === 401) { setAuthError("Неверный пароль"); return; }
    const data = await r.json();
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    sessionStorage.setItem("admin_token", password);
    setToken(password);
    setReviews(parsed.reviews || []);
  };

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const r = await api(token, "list");
      if (r.status === 401) { setToken(""); sessionStorage.removeItem("admin_token"); return; }
      const data = await r.json();
      const parsed = typeof data === "string" ? JSON.parse(data) : data;
      setReviews(parsed.reviews || []);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  useEffect(() => { if (token) fetchReviews(); }, [token]);

  const approve = async (id: number, approved: boolean) => {
    await api(token, "approve", { id, approved });
    fetchReviews();
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить отзыв?")) return;
    await api(token, "delete", { id });
    fetchReviews();
  };

  const addReview = async () => {
    if (!addForm.name.trim() || !addForm.text.trim()) return;
    setAddLoading(true);
    await api(token, "add", addForm);
    setAddForm({ name: "", text: "", rating: 5 });
    setShowAdd(false);
    await fetchReviews();
    setAddLoading(false);
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-xl">
          <div className="text-5xl text-center mb-4">🔒</div>
          <h1 className="font-bold text-xl text-center mb-6 text-gray-800">Вход в админ-панель</h1>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && login()}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 mb-2 focus:outline-none focus:border-orange-400 text-gray-800"
          />
          {authError && <p className="text-red-500 text-sm mb-3 text-center">{authError}</p>}
          <button
            onClick={login}
            className="w-full bg-orange-400 text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity mt-2"
          >
            Войти
          </button>
        </div>
      </div>
    );
  }

  const pending = reviews.filter(r => !r.approved);
  const approved = reviews.filter(r => r.approved);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">

        <div className="flex items-center justify-between mb-6 bg-white rounded-2xl px-5 py-4 shadow-sm">
          <div>
            <h1 className="font-bold text-xl text-gray-800">Админ-панель</h1>
            <p className="text-sm text-gray-400">Управление отзывами</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAdd(!showAdd)}
              className="bg-orange-400 text-white text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90 flex items-center gap-1"
            >
              <Icon name="Plus" size={15} /> Добавить
            </button>
            <button
              onClick={() => { sessionStorage.removeItem("admin_token"); setToken(""); }}
              className="bg-gray-100 text-gray-500 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90"
            >
              Выйти
            </button>
          </div>
        </div>

        {showAdd && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-orange-200 mb-4">
            <h2 className="font-bold text-gray-700 mb-3">Добавить отзыв</h2>
            <input
              placeholder="Имя"
              value={addForm.name}
              onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 mb-2 text-sm focus:outline-none focus:border-orange-400"
            />
            <textarea
              placeholder="Текст отзыва"
              value={addForm.text}
              onChange={e => setAddForm(f => ({ ...f, text: e.target.value }))}
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 mb-2 text-sm focus:outline-none focus:border-orange-400 resize-none"
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm text-gray-500">Оценка:</span>
              {[1,2,3,4,5].map(n => (
                <button key={n} onClick={() => setAddForm(f => ({ ...f, rating: n }))}
                  className={`text-xl ${n <= addForm.rating ? "text-yellow-400" : "text-gray-200"}`}>★</button>
              ))}
            </div>
            <button
              onClick={addReview}
              disabled={addLoading}
              className="bg-orange-400 text-white font-bold px-6 py-2.5 rounded-xl hover:opacity-90 text-sm disabled:opacity-50"
            >
              {addLoading ? "Сохраняю..." : "Сохранить"}
            </button>
          </div>
        )}

        {loading && <p className="text-center text-gray-400 py-10">Загрузка...</p>}

        {!loading && pending.length > 0 && (
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 text-sm uppercase tracking-wide mb-3 px-1">
              На проверке ({pending.length})
            </h2>
            <div className="space-y-3">
              {pending.map(r => (
                <ReviewCard key={r.id} r={r} onApprove={approve} onRemove={remove} />
              ))}
            </div>
          </div>
        )}

        {!loading && approved.length > 0 && (
          <div>
            <h2 className="font-bold text-gray-600 text-sm uppercase tracking-wide mb-3 px-1">
              Опубликованы ({approved.length})
            </h2>
            <div className="space-y-3">
              {approved.map(r => (
                <ReviewCard key={r.id} r={r} onApprove={approve} onRemove={remove} />
              ))}
            </div>
          </div>
        )}

        {!loading && reviews.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-3">📭</div>
            <p>Отзывов пока нет</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewCard({ r, onApprove, onRemove }: { r: Review; onApprove: (id: number, v: boolean) => void; onRemove: (id: number) => void }) {
  return (
    <div className={`bg-white rounded-2xl p-5 shadow-sm border-2 ${r.approved ? "border-green-100" : "border-yellow-200"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-bold text-gray-800">{r.name}</span>
            <span className="text-yellow-400 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.approved ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
              {r.approved ? "Опубликован" : "На проверке"}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed break-words">{r.text}</p>
          <p className="text-gray-400 text-xs mt-2">{new Date(r.created_at).toLocaleDateString("ru-RU")}</p>
        </div>
        <div className="flex flex-col gap-2 flex-shrink-0">
          {!r.approved ? (
            <button onClick={() => onApprove(r.id, true)} className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90 whitespace-nowrap">
              ✓ Одобрить
            </button>
          ) : (
            <button onClick={() => onApprove(r.id, false)} className="bg-gray-100 text-gray-600 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90">
              Скрыть
            </button>
          )}
          <button onClick={() => onRemove(r.id)} className="bg-red-50 text-red-400 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}