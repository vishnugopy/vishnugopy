import { BsArrowUpRightCircle } from "react-icons/bs";

function WorkCard({ name, link, tags, about }) {
  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 hover:line-clamp-none transition-all">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
          {about}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-sm font-medium bg-blue-900/10 text-primary rounded-full hover:bg-blue-900/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-900/90 transition-all duration-300 transform hover:scale-105 font-medium shadow-md hover:shadow-lg"
          >
            Voir le projet
            <svg
              className="w-5 h-5 ml-2 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default WorkCard;
