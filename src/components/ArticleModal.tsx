import Icon from "@/components/ui/icon";
import { ARTICLES } from "@/pages/data";

type Article = typeof ARTICLES[0];

export default function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className={`${article.color} w-10 h-10 rounded-xl flex items-center justify-center text-xl`}>
              {article.emoji}
            </div>
            <div>
              <div className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full mb-0.5">{article.tag}</div>
              <h2 className="font-bold text-gray-800 text-base leading-tight">{article.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors ml-4">
            <Icon name="X" size={24} />
          </button>
        </div>
        <div className="px-6 py-6 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </div>
  );
}
