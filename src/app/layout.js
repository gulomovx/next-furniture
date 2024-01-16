"use client";
import { Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist";
import ReduxProvider from "../redux/provider";
import { persistStore } from "redux-persist";
import { AnimatePresence } from "framer-motion";
const inter = Unbounded({ subsets: ["latin"], weight: "400" });
let persistor = persistStore(store);

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PersistGate loading={null} persistor={persistor}>
              <Navbar />
              {children}
            <Footer />
          </PersistGate>
        </ReduxProvider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
