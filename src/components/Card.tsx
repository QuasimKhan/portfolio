export default function Card({ title, description, image, link }) {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        {/* Image Section */}
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          
        </div>
      </div>
    );
  }
  