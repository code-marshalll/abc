export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6 text-blue-400">
        Tailwind Test Page
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        If you can see the dark background and colored text, Tailwind works 🎉
      </p>
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition">
        Test Button
      </button>
    </main>
  );
}
