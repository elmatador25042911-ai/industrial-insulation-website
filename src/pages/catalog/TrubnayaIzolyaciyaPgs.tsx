import { Link, useLocation } from "react-router-dom";
import { getCatalogReturnPath } from "@/lib/catalog-return";
import InternalLayout from "@/components/layouts/InternalLayout";

const TrubnayaIzolyaciyaPgs = () => {
  const { pathname } = useLocation();
  const catalogReturnPath = getCatalogReturnPath(pathname);

  return (
    <InternalLayout>
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 pt-24">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            lineHeight: 1.15,
          }}
        >
          Трубная изоляция <span className="text-orange-500">для промышленности и ПГС</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-10">
          Страница в разработке
        </p>
        <Link
          to={catalogReturnPath}
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide rounded-sm transition-colors"
        >
          Вернуться в каталог
        </Link>
      </div>
      </main>
    </InternalLayout>
  );
};

export default TrubnayaIzolyaciyaPgs;