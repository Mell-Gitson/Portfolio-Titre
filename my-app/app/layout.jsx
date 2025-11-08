import "./globals.css";

export const metadata = {
  title: "Mon Portfolio",
  description: "Développeur Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="relative">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/assets/adn.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video> */}
        
        
        <main className="relative z-10 bg-black/50 backdrop-blur-sm min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}