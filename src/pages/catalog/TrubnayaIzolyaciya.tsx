import { Link } from "react-router-dom";

const TrubnayaIzolyaciya = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Трубная изоляция
        </h1>
        <p className="text-gray-400 mb-8">Страница в разработке</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
};

export default TrubnayaIzolyaciya;
