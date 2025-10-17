import { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const languages = [
  { code: 'vi', name: 'Tiếng Việt' , short: 'VI' },
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', short: 'KO' },
  { code: 'zh', name: '中文', flag: '🇨🇳', short: 'ZH' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', short: 'JA' }
];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const t = (key) => getTranslation(language, key);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsBottomSheetOpen(false);
  };

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Desktop: Elegant pills layout
  if (!isMobile) {
    return (
      <div className="flex items-center gap-1 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-1 border border-slate-200/60 shadow-sm">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`group flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ease-out ${
              language === lang.code
                ? 'bg-white text-slate-800 shadow-md border border-slate-200/80 scale-105'
                : 'text-slate-600 hover:text-slate-800 hover:bg-white/60 hover:scale-102'
            }`}
            title={lang.name}
          >
           
            <span className="font-semibold tracking-wide">{lang.short}</span>
            {language === lang.code && (
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    );
  }

  // Mobile: Elegant globe button + Premium bottom sheet
  return (
    <>
      <button
        onClick={openBottomSheet}
        className="group flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 hover:border-blue-300/60 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 ease-out shadow-sm hover:shadow-md text-slate-600 hover:text-blue-600"
        aria-label="Change language"
      >
        <Globe size={18} className="group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Premium Bottom Sheet Portal */}
      {isBottomSheetOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-end">
          {/* Elegant Backdrop */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-sm" 
            onClick={closeBottomSheet}
          />
          
          {/* Premium Bottom Sheet */}
          <div className="relative w-full bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden border-t border-slate-200/60">
            {/* Elegant Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200/60 bg-gradient-to-r from-slate-50/80 to-white/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Globe size={16} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Chọn ngôn ngữ</h3>
              </div>
              <button
                onClick={closeBottomSheet}
                className="p-2 rounded-xl hover:bg-slate-100/80 transition-all duration-200 group"
              >
                <X size={20} className="text-slate-500 group-hover:text-slate-700 transition-colors" />
              </button>
            </div>
            
            {/* Premium Language Options */}
            <div className="p-6 space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`group w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 ease-out ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border border-blue-200/60 shadow-md scale-[1.02]'
                      : 'hover:bg-slate-50/80 text-slate-700 hover:scale-[1.01] hover:shadow-sm'
                  }`}
                >
                  <div className="relative">
                    <span className="text-3xl filter drop-shadow-sm">{lang.flag}</span>
                    {language === lang.code && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base">{lang.name}</div>
                    <div className="text-sm text-slate-500 font-medium">{lang.short}</div>
                  </div>
                  {language === lang.code && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Elegant Footer */}
            <div className="p-6 bg-gradient-to-r from-slate-50/60 to-white/60 border-t border-slate-200/60">
              <div className="text-center text-sm text-slate-500">
                Chọn ngôn ngữ để trải nghiệm tốt nhất
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

  