import { useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import { REVIEWS_URL } from "@/pages/data";

type Review = { id: number; name: string; text: string; rating: number; created_at: string };

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewForm, setReviewForm] = useState({ name: "", text: "", rating: 5 });
  const [reviewSent, setReviewSent] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);

  useEffect(() => {
    fetch(REVIEWS_URL)
      .then((r) => r.json())
      .then((d) => {
        try {
          setReviews(JSON.parse(d).reviews || []);
        } catch {
          setReviews(d.reviews || []);
        }
      })
      .catch(() => {});
  }, []);

  const submitReview = async () => {
    if (!reviewForm.name.trim() || !reviewForm.text.trim()) return;
    setReviewLoading(true);
    try {
      await fetch(REVIEWS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewForm),
      });
      setReviewSent(true);
      setReviewForm({ name: "", text: "", rating: 5 });
    } catch (e) {
      console.error(e);
    }
    setReviewLoading(false);
  };

  return (
    <section id="reviews" className="relative z-10 py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle emoji="💬" title="Отзывы" color="text-kidz-purple" />
        <p className="text-center text-gray-500 mt-2 mb-10">Что говорят родители наших воспитанников</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            {reviews.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl mb-3">💌</div>
                <p className="text-gray-400 font-semibold">Отзывов пока нет</p>
                <p className="text-gray-400 text-sm mt-1">Будьте первым!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {reviews.map((r) => (
                  <div key={r.id} className="bg-kidz-cream rounded-3xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{r.name}</span>
                      <span className="text-yellow-400 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-kidz-cream rounded-3xl p-6">
            <h3 className="font-bold text-gray-800 text-lg mb-4">Оставить отзыв ✍️</h3>
            {reviewSent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">🎉</div>
                <p className="font-bold text-kidz-green text-lg">Спасибо за отзыв!</p>
                <p className="text-gray-500 text-sm mt-1">Он появится после проверки</p>
                <button onClick={() => setReviewSent(false)} className="mt-4 text-kidz-orange text-sm font-semibold underline">
                  Написать ещё
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito focus:outline-none focus:border-kidz-purple transition-colors text-sm"
                />
                <textarea
                  placeholder="Ваш отзыв..."
                  rows={4}
                  value={reviewForm.text}
                  onChange={(e) => setReviewForm((p) => ({ ...p, text: e.target.value }))}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito focus:outline-none focus:border-kidz-purple transition-colors text-sm resize-none"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Оценка:</span>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setReviewForm((p) => ({ ...p, rating: s }))}
                      className={`text-2xl transition-transform hover:scale-110 ${s <= reviewForm.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <button
                  onClick={submitReview}
                  disabled={reviewLoading || !reviewForm.name.trim() || !reviewForm.text.trim()}
                  className="w-full bg-kidz-purple text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {reviewLoading ? "Отправляем..." : "Отправить отзыв"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
