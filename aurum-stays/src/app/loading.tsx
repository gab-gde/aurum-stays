export default function Loading() {
  return (
    <div className="min-h-screen bg-[#111217] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#D4A843]/20 border-t-[#D4A843] rounded-full animate-spin" />
        <p className="text-gray-500 text-sm tracking-wider uppercase">Loading</p>
      </div>
    </div>
  );
}
