"use client"
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from 'next-auth/react';
import { useReducer } from "react";
import { AppDispatchContext, AppStateContext } from "./containers/AppConainer";
import reducer, { initialState } from "./services/state/store";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <SessionProvider session={session}>
                <AppStateContext.Provider value={state}>
                  <AppDispatchContext.Provider value={dispatch}>
                    {children}
                  </AppDispatchContext.Provider>
                </AppStateContext.Provider>
            </SessionProvider>
          </body>
    </html>
  );
}
