import type { Product } from '../api/products';
import ProductCard from './ProductCard';
import CategorySection from './components/CategorySection';


interface CategorySectionProps {
  category: string;
  products: Product[];
}

const CATEGORIES = ['bavoirs', 'doudous', 'couvertures'];


export default function CategorySection({ category, products }: CategorySectionProps) {
  if (products.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 px-8 max-w-4xl mx-auto capitalize">
        {category}
      </h2>
        {CATEGORIES.map((category) => (
          <CategorySection
            key={category}
            category={category}
            products={products.filter((p) => p.category === category)}
          />
        ))}
    </div>
  );
}