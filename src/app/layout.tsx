import "./globals.css";
import MainHeader from "@/components/layouts/MainHeader";
import { Inter, Gorditas } from "next/font/google";
import MainFooter from "@/components/layouts/MainFooter";
import GlobalProviders from "@/providers/GlobalProviders";

const inter_regular = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-inter-regular",
});

const inter_bold = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-inter-bold",
});

const gordita_regular = Gorditas({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-gordita-regular",
});

const gordita_bold = Gorditas({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-gordita-bold",
});

export const metadata = {
  title: "Quiz App",
  description: "Resuelve pregunta y gana puntos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter_regular.variable} ${inter_bold.variable} ${gordita_regular.variable} ${gordita_bold.variable} flex flex-col screen-top`}
      >
        <GlobalProviders>
          <MainHeader></MainHeader>
          <main className="flex flex-col flex-grow">{children}</main>
          <MainFooter></MainFooter>
        </GlobalProviders>
      </body>
    </html>
  );
}
