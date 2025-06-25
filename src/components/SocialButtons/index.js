import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function SocialButtons() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="https://github.com/vishnugopy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
        aria-label="GitHub"
      >
        <FaGithub className="text-xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/vishnugopy/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a
        href="https://twitter.com/vishnugopy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
        aria-label="Twitter"
      >
        <FaTwitter className="text-xl" />
      </a>
    </div>
  );
}

export default SocialButtons;
