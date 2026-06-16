import Icon from "@/components/ui/icon";

export interface ProductData {
  id: string;
  label: string;
  title: string;
  image: string;
  imageCaption: string;
  description: string;
  advantages: string[];
  reversed?: boolean;
}

export const ProductSection = ({ data }: { data: ProductData }) => (
  <section className="relative overflow-hidden border-t border-white/5">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      {/* Заголовок раздела */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">{data.label}</span>
        </div>
        <h2 className="cat-h2 text-white">{data.title}</h2>
      </div>

      {/* Блок 1: фото + описание и преимущества */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          data.reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Фото */}
        <div className="lg:col-span-6 lg:[direction:ltr]">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 blur-[50px]" />
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10"
              style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.8)" }}
            >
              <img
                src={data.image}
                alt={data.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-orange-500" />
              <div className="absolute left-5 right-5 bottom-5 text-[11px] tracking-[0.18em] text-gray-300 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {data.imageCaption}
              </div>
            </div>
          </div>
        </div>

        {/* Описание и преимущества */}
        <div className="lg:col-span-6 lg:[direction:ltr]">
          <h3
            className="text-white text-[22px] sm:text-[24px] mb-5 leading-[1.2]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
            }}
          >
            Описание и преимущества
          </h3>
          <p className="text-gray-400 text-base leading-[1.7] mb-7">
            {data.description}
          </p>
          <ul className="space-y-3.5">
            {data.advantages.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #e63012, #f97316)" }}
                >
                  <Icon name="Check" size={11} className="text-white" />
                </span>
                <span className="text-gray-300 text-[14.5px] leading-snug">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProductSection;
