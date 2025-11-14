import React, { useState } from 'react';
import { generateStatementOfClaim, US_STATES } from '../lib/SmallClaimsTemplate';

const SmallClaimsGenerator: React.FC = () => {
    const [formData, setFormData] = useState({
        jurisdiction: 'California',
        plaintiffName: '',
        plaintiffAddress: '',
        defendantName: '',
        defendantAddress: '',
        claimAmount: '',
        reasonForClaim: '',
        dateOfIncident: '',
    });

    const [generatedText, setGeneratedText] = useState('');
    const [copied, setCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = generateStatementOfClaim(formData);
        setGeneratedText(text);
        setTimeout(() => {
            document.getElementById('generated-document-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedText).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    
    const handleDownload = () => {
        alert("DOCX download is a simulated feature. Please copy the text and paste it into a word processor.");
    }

    return (
        <div className="w-full max-w-7xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Parties Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Plaintiff (Your Information)</h3>
                             <input type="text" name="plaintiffName" placeholder="Your Full Name" value={formData.plaintiffName} onChange={handleChange} required className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"/>
                            <textarea name="plaintiffAddress" placeholder="Your Full Address" value={formData.plaintiffAddress} onChange={handleChange} required rows={3} className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"></textarea>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Defendant (Their Information)</h3>
                            <input type="text" name="defendantName" placeholder="Defendant's Full Name" value={formData.defendantName} onChange={handleChange} required className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"/>
                            <textarea name="defendantAddress" placeholder="Defendant's Full Address" value={formData.defendantAddress} onChange={handleChange} required rows={3} className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"></textarea>
                        </div>

                        {/* Claim Details Section */}
                        <div className="md:col-span-2 space-y-4 pt-6 mt-4 border-t border-white/15">
                            <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Claim Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="jurisdiction" className="block text-sm font-medium mb-1 text-gray-300">Jurisdiction (State)</label>
                                    <select id="jurisdiction" name="jurisdiction" value={formData.jurisdiction} onChange={handleChange} className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all">
                                        {US_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="claimAmount" className="block text-sm font-medium mb-1 text-gray-300">Amount Claimed ($)</label>
                                    <input id="claimAmount" type="number" name="claimAmount" placeholder="e.g., 1500.00" value={formData.claimAmount} onChange={handleChange} required className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"/>
                                </div>
                                <div>
                                    <label htmlFor="dateOfIncident" className="block text-sm font-medium mb-1 text-gray-300">Date of Incident</label>
                                    <input id="dateOfIncident" type="date" name="dateOfIncident" value={formData.dateOfIncident} onChange={handleChange} required className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="reasonForClaim" className="block text-sm font-medium mb-1 text-gray-300">Reason for Claim</label>
                                <textarea id="reasonForClaim" name="reasonForClaim" placeholder="Describe in detail why you are filing this claim. e.g., 'Breach of contract for failure to repay a loan of $500 issued on...' or 'Damage to personal property caused by the defendant on...'" value={formData.reasonForClaim} onChange={handleChange} required rows={6} className="w-full p-3 bg-gray-800/60 rounded-md border border-white/15 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 text-lg transform hover:scale-105">
                            Generate Statement of Claim
                        </button>
                    </div>
                </form>

                {generatedText && (
                    <div id="generated-document-section" className="mt-12 pt-8 border-t border-white/15">
                        <h3 className="text-2xl font-semibold mb-4 text-center">Your Generated Document</h3>
                        <div className="bg-gray-800/50 rounded-lg p-1">
                            <textarea readOnly value={generatedText} className="w-full h-96 p-4 bg-gray-900/80 text-gray-200 font-mono text-sm rounded-md border border-gray-700 focus:outline-none resize-none" />
                        </div>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button onClick={handleCopy} className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 text-white ${copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                                {copied ? 'Copied!' : 'Copy Text'}
                            </button>
                             <button onClick={handleDownload} className="px-6 py-2 rounded-md font-semibold bg-gray-600 hover:bg-gray-700 text-white">
                                Download DOCX (Simulated)
                            </button>
                        </div>
                    </div>
                )}
                 <div className="mt-8 bg-yellow-900/30 border border-yellow-600/50 text-yellow-200 px-4 py-3 rounded-lg text-sm" role="alert">
                    <strong className="font-bold">Legal Disclaimer: </strong>
                    <span className="block sm:inline ml-1">This document is a template only and does not constitute legal advice. Its success depends on adherence to your local court's specific procedures and rules. Always consult with a legal professional.</span>
                </div>
            </div>
        </div>
    );
};

export default SmallClaimsGenerator;