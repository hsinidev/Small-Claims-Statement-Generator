import React from 'react';
import Layout from './components/Layout';
import SmallClaimsGenerator from './components/SmallClaimsGenerator';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Create Your Statement of Claim
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Easily generate a professional legal template for your Small Claims Court filing. Fill out the form below to get started.
          </p>
      </div>
      <SmallClaimsGenerator />
      <SeoArticle />
    </Layout>
  );
};

export default App;
