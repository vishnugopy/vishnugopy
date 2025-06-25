import MyWorks from "../../components/MyWorks";

function HomePage() {
  return (
    <main>
      <section
        id="home"
        className="min-h-96 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 ">
            VISHNUGOPY
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-semibold tracking-widest mb-12 animate-fade-in-up delay-100 max-w-3xl mx-auto">
            CONCEPTEUR ET DEVELOPPEUR D'APPLICATIONS WEB
          </p>
        </div>
        {/* Enhanced gradient background effects */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 to-blue-500/20 rounded-full blur-[100px] opacity-70 z-0 animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/30 to-primary/20 rounded-full blur-[100px] opacity-70 z-0 animate-pulse" />
      </section>
      <MyWorks />
    </main>
  );
}

export default HomePage;
