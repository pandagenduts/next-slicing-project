import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Testing Front End',
  description: 'Created by: Donny Rendi',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${poppins.variable}`}>
        <main className='min-h-screen'>
          <Header />
          {children}
          <NavBar />
        </main>
      </body>
    </html>
  );
}
