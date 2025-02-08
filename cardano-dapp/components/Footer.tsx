import { brandName } from "../config/brandConfig";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 left-16 h-12 bg-gray-100 border-t flex items-center justify-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
    </footer>
  );
}
