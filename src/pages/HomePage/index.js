import SocialButtons from "../../components/SocialButtons";
import MyWorks from "../../components/MyWorks";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <main>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-500 via-blue-400 to-primary bg-clip-text text-transparent animate-fade-in-up">
            VISHNUGOPY
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium tracking-widest mb-10 animate-fade-in-up delay-100">
            CONCEPTEUR ET DEVELOPPEUR D'APPLICATIONS WEB
          </p>
          <SocialButtons />
        </div>
        {/* Optional: Add a blurred gradient background effect */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-blue-500/10 rounded-full blur-3xl opacity-60 z-0" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 to-primary/10 rounded-full blur-3xl opacity-60 z-0" />
      </section>
      <MyWorks />
      <Footer />
    </main>
  );
}

export default HomePage;
