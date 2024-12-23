export default function FeaturesAndPress() {
  return (
    <div className="text-center py-4 bg-primary">
      <h2 className="text-4xl font-bold mt-4 mb-2 text-black">
        Features & Press
      </h2>
      <div className="flex justify-center mb-4">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16 text-primary"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="overflow-hidden py-6">
        <div className="flex space-x-12 animate-scroll">
          <div className="text-4xl">🏈</div>
          <div className="text-4xl">🏺</div>
          <div className="text-4xl">🍽️</div>
          <div className="text-4xl">🎨</div>
          <div className="text-4xl">📱</div>
          <div className="text-4xl">👕</div>
          <div className="text-4xl">🏈</div>
          <div className="text-4xl">🏺</div>
          <div className="text-4xl">🍽️</div>
          <div className="text-4xl">🎨</div>
          <div className="text-4xl">📱</div>
          <div className="text-4xl">👕</div>
        </div>
      </div>
    </div>
  );
}
