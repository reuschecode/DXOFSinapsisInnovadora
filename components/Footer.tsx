
import React from 'react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black py-24 px-6 md:px-24 lg:px-48 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="mb-12 md:mb-0">
          <Logo size="sm" className="mb-6" />
          <p className="text-white/40 text-base mt-4 font-medium">&copy; {new Date().getFullYear()} {t('footer', 'rights')}</p>
        </div>
        <div className="space-y-3 text-left md:text-right">
          <p className="text-white text-base font-light hover:text-red-600 cursor-pointer transition-colors">{t('footer', 'p1')}</p>
          <p className="text-white text-base font-light hover:text-red-600 cursor-pointer transition-colors">{t('footer', 'p2')}</p>
          <p className="text-white text-base font-light hover:text-red-600 cursor-pointer transition-colors">{t('footer', 'p3')}</p>
          <p className="text-white text-base font-light hover:text-red-600 cursor-pointer transition-colors">{t('footer', 'p4')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
