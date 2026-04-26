export default function SectionTitle({ emoji, title, color }: { emoji: string; title: string; color: string }) {
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
