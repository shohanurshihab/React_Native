interface Product {
    id: string;
    brand: string;
    name: string;
    imageUrl: string;
    originalPrice: number;
    discountPrice: number;
    offerPercentage: number;
    rating: number;
    ratingCount: number;
    tags: string[];
    specs: { key: string; value: string }[]; // Update the type to array of objects with key and value properties
}