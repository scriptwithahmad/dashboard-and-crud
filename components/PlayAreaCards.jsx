const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function PlayAreaCards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative border rounded-md">
              <div className="h-60 overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="relative h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <span className="absolute top-2 right-2 bg-blue-400 text-white p-1 px-3 rounded-full">
                  $99/hr
                </span>
              </div>
              <div className="px-4">
                {/* Price */}
                <div className="pb-2 pt-4 flex items-center justify-between">
                  {/* Profile */}
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      src="https://srv.carbonads.net/static/30242/214e19ab24dfe618f5372f2a8430b9872569ed23"
                      alt=""
                    />
                    <p>Ghulam Qadir</p>
                  </div>
                  <p className="text-lg text-blue-500">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star-half"></i>
                  </p>
                </div>
                <div className="mb-4 pt-4">
                  <h3 className="text-base text-gray-700 line-clamp-1">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      Top 5 Programming Language in 2023 to Learn
                    </a>
                  </h3>
                  <h3 className="flex items-center text-gray-600 justify-end mt-5">
                    view details <i class="text-lg bx bx-chevron-right"></i>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
