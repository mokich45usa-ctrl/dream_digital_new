"use client"

import { Mail, MessageCircle, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import Logo from '../../my materials/Logo.webp';

interface FooterProps {
  onGetStarted?: () => void;
}

export function Footer({ onGetStarted }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  // Expose window methods to open modals from anywhere (e.g., LeadModal)
  useEffect(() => {
    // @ts-ignore
    window.__openPrivacy = () => setPrivacyOpen(true);
    // @ts-ignore
    window.__openTerms = () => setTermsOpen(true);
  }, []);

  return (
    <footer className="bg-accent-dark text-white py-16 lg:py-20">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Brand */}
          <div>
            <div className="mb-6">
              {logoError ? (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <span className="text-accent-dark font-black text-base">DD</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-black tracking-tight">DREAM</span>
                    <span className="font-black tracking-tight">DIGITAL</span>
                  </div>
                </div>
              ) : (
                <img 
                  src={Logo}
                  alt="Dream Digital" 
                  className="h-12 w-auto"
                  onError={() => setLogoError(true)}
                  loading="eager"
                />
              )}
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Professional websites for modern businesses. Fast, affordable, and built to convert.
            </p>
            <div className="flex items-start gap-2 text-white/60">
              <svg 
                className="w-4 h-4 mt-1 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-white/70">Sacramento, California</p>
                <p className="text-xs text-white/50">Serving businesses nationwide</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="packages"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="work"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="testimonials"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="faq"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/16192072318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://t.me/dreamdigitalteam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a 
                href="mailto:dreamdigital72@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>dreamdigital72@gmail.com</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/dreamdigital.team?igsh=MXQzZmwxbmR0eGk4NA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579975773975&mibextid=wwXIfr&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Dream Digital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                onClick={(e) => { e.preventDefault(); setPrivacyOpen(true); }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                onClick={(e) => { e.preventDefault(); setTermsOpen(true); }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                onClick={(e) => { e.preventDefault(); setCookieOpen(true); }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Legal Modals */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-[92vw] sm:max-w-[48rem] md:max-w-[48rem] lg:max-w-[48rem] max-h-[85vh] p-0 overflow-hidden rounded-soft bg-elevated border-2 border-border">
          <div className="sticky top-0 z-10 bg-elevated/95 backdrop-blur-sm border-b border-border px-6 py-4">
            <DialogHeader>
              <DialogTitle className="text-text-primary">Privacy Policy</DialogTitle>
            </DialogHeader>
          </div>
          <div className="px-6 py-4 prose prose-sm max-w-none text-text-secondary h-[calc(85vh-64px)] overflow-y-auto">
            <p><strong>Effective Date:</strong> October 18, 2025</p>
            <p>DreamDigital Team (“DreamDigital,” “we,” “us,” or “our”) operates the website <span className="font-mono">dreamdigital.team</span> (the “Site”). This Privacy Policy explains what we collect, how we use it, and the choices you have.</p>
            <h4>1) Information We Collect</h4>
            <p><strong>A. Information You Voluntarily Submit</strong></p>
            <p>When you fill out forms on our Site (e.g., to request a quote or consultation), we collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Optional project details or business info you choose to share</li>
            </ul>
            <p><strong>B. Information Collected Automatically</strong></p>
            <p>When you visit the Site, certain data is collected automatically via Google Analytics 4 (GA4) and similar tools, such as:</p>
            <ul>
              <li>IP address, browser type/version, device/OS, screen resolution</li>
              <li>Date/time of access, pages viewed, on-site actions and interactions</li>
              <li>General location derived from IP (city/country)</li>
            </ul>
            <p>We use cookies and similar technologies to enable this collection. You can control cookies through your browser settings.</p>
            <h4>2) How We Use Your Information</h4>
            <ul>
              <li>Communication: To respond to inquiries, send proposals, and provide customer support.</li>
              <li>Service Improvement: To analyze Site usage and improve performance, content, and user experience.</li>
              <li>Marketing & Advertising: To run analytics and targeted/remarketing ads (e.g., via GA4 and Google Ads).</li>
              <li>Site Functionality & Security: To maintain and protect the Site and our services.</li>
            </ul>
            <p>We do not sell your personal information.</p>
            <h4>3) Cookies & Tracking Technologies</h4>
            <p>We use:</p>
            <ul>
              <li>Essential cookies for basic Site functionality.</li>
              <li>Analytics cookies (GA4) to understand how visitors use the Site.</li>
              <li>Advertising cookies (e.g., Google Ads) for interest-based ads and remarketing.</li>
            </ul>
            <p>Your choices: You can disable cookies in your browser. To manage Google ad personalization, visit <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="underline">adssettings.google.com</a>. GA opt-out tools are available at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="underline">tools.google.com/dlpage/gaoptout</a>.</p>
            <h4>4) Sharing of Data</h4>
            <ul>
              <li>No sale of names/emails. We do not share your Name or Email with third parties for their own marketing.</li>
              <li>We may share automatically collected data with trusted vendors only to operate analytics and advertising (e.g., Google Analytics / Google Ads) and to comply with law, protect our rights, or complete a business transfer.</li>
              <li>Service providers are bound by agreements to process data solely on our instructions.</li>
            </ul>
            <h4>5) Your Rights</h4>
            <p>Depending on your location (e.g., under CCPA/CPRA in California or similar laws elsewhere), you may have rights to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Delete your personal information</li>
              <li>Opt out of certain processing (e.g., targeted advertising/remarketing)</li>
            </ul>
            <p>To make a request, email <a href="mailto:dreamdigital72@gmail.com" className="underline">dreamdigital72@gmail.com</a> with “Privacy Request” in the subject. We may need to verify your identity.</p>
            <h4>6) Data Retention</h4>
            <p>We retain personal information only as long as necessary for the purposes described above and to comply with legal, accounting, or reporting obligations. GA4 retention settings may apply to analytics data.</p>
            <h4>7) Data Security</h4>
            <p>We implement reasonable technical and organizational safeguards to protect personal information. However, no method of transmission or storage is completely secure.</p>
            <h4>8) International Transfers</h4>
            <p>If you access the Site from outside the United States, your information may be processed in the U.S. By using the Site, you consent to this processing.</p>
            <h4>9) Children’s Privacy</h4>
            <p>Our Site is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, contact us to delete it.</p>
            <h4>10) Changes to This Policy</h4>
            <p>We may update this Policy periodically. The “Effective Date” above shows the latest revision. Material changes will be posted on this page.</p>
            <h4>11) Contact Us</h4>
            <p>Questions or requests about this Policy or your data rights: <a href="mailto:dreamdigital72@gmail.com" className="underline">dreamdigital72@gmail.com</a></p>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-[92vw] sm:max-w-[48rem] md:max-w-[48rem] lg:max-w-[48rem] max-h-[85vh] p-0 overflow-hidden rounded-soft bg-elevated border-2 border-border">
          <div className="sticky top-0 z-10 bg-elevated/95 backdrop-blur-sm border-b border-border px-6 py-4">
            <DialogHeader>
              <DialogTitle className="text-text-primary">Terms of Service</DialogTitle>
            </DialogHeader>
          </div>
          <div className="px-6 py-4 prose prose-sm max-w-none text-text-secondary h-[calc(85vh-64px)] overflow-y-auto">
            <p><strong>Effective Date:</strong> October 18, 2025</p>
            <p>Welcome to DreamDigital Team (“we,” “our,” “us”). By using our website or purchasing our services, you agree to these Terms and Conditions. Please read them carefully before proceeding.</p>
            <h4>1. Services Provided</h4>
            <p>DreamDigital Team offers professional website services, including:</p>
            <ul>
              <li>Web design and development</li>
              <li>UI/UX design</li>
              <li>Performance optimization and support</li>
            </ul>
            <p>Each project is delivered according to the service packages and pricing outlined on our website or in individual client proposals.</p>
            <h4>2. Payment Terms</h4>
            <ul>
              <li>A 50% deposit of the total project cost is required to begin work.</li>
              <li>The remaining 50% is due upon project completion and approval.</li>
              <li>Payments are accepted via Stripe or other secure payment processors listed on our site.</li>
              <li>Work will not commence until the deposit is received.</li>
            </ul>
            <p>All payments are non-refundable once work has begun, due to the time and resources allocated to each custom project.</p>
            <h4>3. Client Obligations</h4>
            <p>The client agrees to:</p>
            <ul>
              <li>Provide all required materials promptly, including text, images, logos, and relevant account access (domain, hosting, CMS, etc.).</li>
              <li>Review and approve project milestones or designs within reasonable timeframes.</li>
              <li>Ensure all provided materials are owned by or licensed to them and do not infringe third-party rights.</li>
            </ul>
            <p>DreamDigital Team will not be responsible for delays caused by missing client materials or communication delays.</p>
            <h4>4. Limitation of Liability</h4>
            <ul>
              <li>We are not responsible for errors or issues that arise after 7 days of project delivery, unless covered by an ongoing support plan.</li>
              <li>Web technologies evolve continuously; thus, we cannot guarantee permanent compatibility across all browsers, plugins, or devices.</li>
              <li>The client is fully responsible for the content they provide (including images, text, and business information).</li>
              <li>DreamDigital Team is not liable for indirect, incidental, or consequential damages, including loss of data, profits, or business opportunities.</li>
            </ul>
            <h4>5. Revisions and Additional Work</h4>
            <p>Each project includes a defined number of revision rounds (as stated in the service package). Additional revisions, new features, or pages requested after project delivery will be billed separately.</p>
            <h4>6. Governing Law and Jurisdiction</h4>
            <p>These Terms are governed by the laws of the State of California, United States. Any dispute arising from or related to this Agreement shall be resolved in the courts located in Sacramento, California.</p>
            <p>By using our services, you acknowledge and agree to this jurisdiction.</p>
            <h4>7. Contact Information</h4>
            <p>If you have any questions regarding these Terms or our services, please contact us: <a href="mailto:support@dreamdigital.team" className="underline">support@dreamdigital.team</a></p>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={cookieOpen} onOpenChange={setCookieOpen}>
        <DialogContent className="max-w-[92vw] sm:max-w-[48rem] md:max-w-[48rem] lg:max-w-[48rem] max-h-[85vh] p-0 overflow-hidden rounded-soft bg-elevated border-2 border-border">
          <div className="sticky top-0 z-10 bg-elevated/95 backdrop-blur-sm border-b border-border px-6 py-4">
            <DialogHeader>
              <DialogTitle className="text-text-primary">Cookie Policy</DialogTitle>
            </DialogHeader>
          </div>
          <div className="px-6 py-4 prose prose-sm max-w-none text-text-secondary h-[calc(85vh-64px)] overflow-y-auto">
            <p><strong>Effective Date:</strong> October 18, 2025</p>
            <p>This Cookie Policy explains how DreamDigital Team (“we,” “our,” or “us”) uses cookies and similar technologies on the website <span className="font-mono">https://dreamdigital.team</span>.</p>
            <h4>1. What Are Cookies?</h4>
            <p>Cookies are small text files stored on your device when you visit a website. They help us provide a better browsing experience, analyze traffic, and improve our services.</p>
            <p>Cookies can be:</p>
            <ul>
              <li>Essential cookies — required for website functionality (e.g., remembering preferences or forms).</li>
              <li>Analytics cookies — used to understand how visitors interact with our website (via Google Analytics 4).</li>
              <li>Advertising cookies — used for targeted ads and remarketing (e.g., through Google Ads).</li>
            </ul>
            <h4>2. How We Use Cookies</h4>
            <ul>
              <li>Ensure the website functions properly</li>
              <li>Measure and analyze website performance</li>
              <li>Personalize user experience</li>
              <li>Display relevant ads through trusted platforms like Google Ads</li>
            </ul>
            <h4>3. Managing Cookies</h4>
            <p>You can manage or disable cookies through your browser settings at any time. However, disabling essential cookies may affect the functionality of the website.</p>
            <p>To control Google ad personalization, visit: <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="underline">adssettings.google.com</a></p>
            <p>To opt out of Google Analytics tracking, visit: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="underline">tools.google.com/dlpage/gaoptout</a></p>
            <h4>4. Third-Party Cookies</h4>
            <p>We may use third-party cookies from:</p>
            <ul>
              <li>Google Analytics (GA4) — to analyze website traffic</li>
              <li>Google Ads — to deliver personalized advertising</li>
            </ul>
            <p>These third parties may collect information such as your IP address, device, and browsing behavior on our site.</p>
            <h4>5. Updates to This Policy</h4>
            <p>We may update this Cookie Policy periodically. Updates will be reflected with a new Effective Date at the top of this page.</p>
            <h4>6. Contact Us</h4>
            <p>For questions about this Cookie Policy or data privacy, contact us at: <a href="mailto:support@dreamdigital.team" className="underline">support@dreamdigital.team</a></p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}