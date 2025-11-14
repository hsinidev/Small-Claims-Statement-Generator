
import React, { useState, ReactNode, FC } from 'react';
import Starfield from './Starfield';

// Modal Content Components
const AboutContent: FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-gray-600">This tool provides a template for a Small Claims Court Statement of Claim to help individuals prepare their initial filings. Our goal is to make the legal process more accessible. This is not legal advice. Always consult with a legal professional for your specific situation.</p>
    </>
);
const ContactContent: FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
        <p className="text-gray-600">For inquiries, please contact us at:</p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Email: <a href="mailto:hsini.web@gmail.com" className="text-indigo-600 hover:underline">hsini.web@gmail.com</a></li>
            <li>Website: <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">doodax.com</a></li>
        </ul>
    </>
);
const GuideContent: FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Guide</h2>
        <p className="text-gray-600">
            1. Fill in all the fields in the form with accurate information.<br/>
            2. Select the correct state for your jurisdiction.<br/>
            3. Clearly and concisely describe the reason for your claim.<br/>
            4. Click "Generate Statement of Claim" to create the document text.<br/>
            5. Review the generated text carefully. You can copy it or simulate a download.<br/>
            6. <strong>Disclaimer:</strong> This generated text is a template. You must verify and comply with your local court's specific formatting and filing rules.
        </p>
    </>
);
const PrivacyPolicyContent: FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Privacy Policy</h2>
        <p className="text-gray-600">We respect your privacy. This application is a client-side tool. All data you enter is processed in your browser and is never sent to or stored on our servers. Your information remains private to you.</p>
    </>
);
const TermsOfServiceContent: FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Terms of Service</h2>
        <p className="text-gray-600">By using this tool, you agree that you understand it is for informational and template-generating purposes only. The creators are not liable for any inaccuracies or for the outcome of any legal proceedings. You are responsible for ensuring your legal documents are correct and filed properly.</p>
    </>
);
const DmcaContent: FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">DMCA Policy</h2>
        <p className="text-gray-600">All content, including the structure and text of the templates, is original work. If you believe any content infringes on your copyright, please contact us with a valid DMCA takedown notice.</p>
    </>
);


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full m-4" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Close
        </button>
      </div>
    </div>
  );
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const navLinks = [
    { label: "About", content: <AboutContent /> },
    { label: "Contact", content: <ContactContent /> },
    { label: "Guide", content: <GuideContent /> },
    { label: "Privacy Policy", content: <PrivacyPolicyContent /> },
    { label: "Terms of Service", content: <TermsOfServiceContent /> },
    { label: "DMCA", content: <DmcaContent /> },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Starfield />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-4 sm:px-8 bg-black/20 backdrop-blur-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-bold text-white tracking-wider">Small Claims Generator</h1>
            <nav className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => openModal(link.content)} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="md:hidden">
                <select onChange={(e) => openModal(navLinks[parseInt(e.target.value)].content)} className="bg-white/10 text-white rounded p-2">
                    <option>Menu</option>
                    {navLinks.map((link, index) => (
                        <option key={link.label} value={index}>{link.label}</option>
                    ))}
                </select>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="py-6 text-center bg-black/20 backdrop-blur-md">
          <p className="text-sm text-gray-400">
            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>Powered by HSINI MOHAMED</a>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:underline">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:underline">hsini.web@gmail.com</a>
          </p>
        </footer>
      </div>
      <Modal isOpen={!!modalContent} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default Layout;
