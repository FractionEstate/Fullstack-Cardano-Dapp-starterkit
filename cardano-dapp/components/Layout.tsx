import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      <main className="ml-16 mt-16 mb-12 p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
