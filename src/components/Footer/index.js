import Toggle from "../ThemeToggle";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Ce site est réalisé avec ❤️ par Vishnu Gopy
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              href="./vishnugopy.pdf"
              download="vishnugopy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Télécharger mon curriculum vitae
            </a>
            <Toggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
