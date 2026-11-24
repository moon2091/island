import React, { useState } from 'react';
import { Newspaper, ExternalLink, BookOpen, X, ArrowUpRight } from 'lucide-react';
import { TRAVEL_ARTICLES } from '../data/travelArticles';

export function TravelArticles() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="bg-sand-50 py-14 sm:py-18 border-b border-sand-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nature-100 text-nature-900 border border-nature-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5 text-nature-800" />
            <span>গণমাধ্যম ও ভ্রমণ প্রকাশনা (Media Press &amp; Travel Blog)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nature-950 tracking-tight">
            National Media Features on Char Heyar &amp; Shonar Char
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
            দৈনিক ইত্তেফাক, দৈনিক জনকণ্ঠ, আজকের পত্রিকা এবং ভ্রমণ গাইডের বিশেষ প্রতিবেদন ও ভ্রমণ গাইডলাইন। শিরোনামে ক্লিক করে মূল প্রতিবেদন পড়ুন।
          </p>
        </div>

        {/* Blog-Style Clickable Headlines List */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-sand-300 shadow-card divide-y divide-sand-200 overflow-hidden">
          {TRAVEL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className="group p-4 sm:p-6 hover:bg-sand-50/90 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                  {/* Editorial Index Number */}
                  <span className="text-sm sm:text-base font-black font-mono text-campfire/70 group-hover:text-campfire pt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0 flex-1">
                    {/* Source & Metadata Line */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-nature-100 text-nature-900">
                        {article.source}
                      </span>
                      <span className="text-stone-400">&bull;</span>
                      <span className="text-stone-500">{article.category}</span>
                      <span className="hidden sm:inline text-stone-400">&bull;</span>
                      <span className="hidden sm:inline text-stone-400">{article.date}</span>
                    </div>

                    {/* Clickable News Headline */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block group/link"
                    >
                      <h3 className="font-extrabold text-base sm:text-lg text-nature-950 group-hover/link:text-campfire transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5 font-medium">
                        {article.en_title}
                      </p>
                    </a>

                    {/* Brief Blog Excerpt */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Compact Action Row */}
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-campfire hover:text-campfire-hover inline-flex items-center gap-1 transition-colors"
                      >
                        <span>মূল প্রতিবেদন পড়ুন ({article.source_en})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setActiveArticle(article)}
                        className="font-semibold text-stone-500 hover:text-nature-900 inline-flex items-center gap-1 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>সারাংশ পড়ুন (Quick Summary)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Click Arrow */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${article.en_title}`}
                  className="hidden sm:flex w-9 h-9 rounded-full border border-sand-300 group-hover:border-campfire group-hover:bg-campfire group-hover:text-white text-stone-400 items-center justify-center shrink-0 transition-all mt-1"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-sand-50 rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-8 shadow-2xl border border-sand-300 relative my-6 sm:my-8 animate-in fade-in zoom-in-95 duration-200">
            
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
