import React, { useState } from 'react';
import { Newspaper, ExternalLink, BookOpen, X, MapPin, Calendar, CheckCircle2, ChevronRight, Globe } from 'lucide-react';
import { TRAVEL_ARTICLES } from '../data/travelArticles';

export function TravelArticles() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="bg-sand-50 py-16 sm:py-20 border-b border-sand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nature-100 text-nature-900 border border-nature-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Newspaper className="w-4 h-4 text-nature-800" />
            <span>গণমাধ্যম ও ভ্রমণ প্রকাশনা (Media Coverage & Travel Guides)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-nature-950 tracking-tight">
            National Media Features on Char Heyar & Shonar Char
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            দৈনিক ইত্তেফাক, দৈনিক জনকণ্ঠ, আজকের পত্রিকা এবং ভ্রমণ গাইডের বিশেষ প্রতিবেদন ও দিকনির্দেশনা পড়ুন।
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRAVEL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-sand-300 hover:border-stone-400 shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-nature-950/85 backdrop-blur-md text-white text-[11px] font-bold">
                    {article.source_en}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold">
                    {article.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                    <Globe className="w-3.5 h-3.5 text-nature-800" />
                    <span>{article.category}</span>
                    <span>&bull;</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-stone-900 leading-snug hover:text-nature-900 transition-colors mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-5 pt-0 border-t border-sand-200/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="font-bold text-nature-900 hover:text-nature-950 flex items-center gap-1 transition-colors py-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-campfire" />
                  <span>হাইলাইটস পড়ুন</span>
                </button>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-stone-500 hover:text-campfire flex items-center gap-1 transition-colors py-1"
                  title="মূল সংবাদ পোর্টালে পড়ুন"
                >
                  <span>মূল নিউজ লিংক</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-sand-50 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-sand-300 relative my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-sand-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Source Pill */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-nature-100 text-nature-900 text-xs font-extrabold">
                {activeArticle.source}
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                {activeArticle.date}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-nature-950 mb-3 leading-snug">
              {activeArticle.title}
            </h2>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-5 bg-stone-200">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-sm max-w-none text-stone-800 text-xs sm:text-sm leading-relaxed space-y-3 mb-6 whitespace-pre-line">
              {activeArticle.content}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-sand-300">
              <a
                href={activeArticle.url}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-nature-900 hover:bg-nature-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>Read Full Article on {activeArticle.source_en}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-full sm:w-auto px-4 py-2 text-stone-600 hover:text-stone-900 font-semibold text-xs"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
