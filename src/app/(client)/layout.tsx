import ThemeProvider from "@/context/ThemesProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <ThemeProvider>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </ThemeProvider>
    </div>
  );
}
