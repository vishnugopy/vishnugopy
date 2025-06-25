function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Vishnu Gopy</div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#works"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Works
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
