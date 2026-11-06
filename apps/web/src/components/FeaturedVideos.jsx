import React, { useState } from 'react';
import { Play, Youtube, X, MapPin, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { TRAVEL_VIDEOS } from '../data/travelVideos';

export function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Char Hare', 'Shonar Char', 'Manta & Boat'];

  const filteredVideos = filterCategory === 'All'
    ? TRAVEL_VIDEOS
    : TRAVEL_VIDEOS.filter(v => v.category === filterCategory || v.location.includes(filterCategory));

  return (
    <section className="bg-sand-200/60 py-16 sm:py-20 border-t border-b border-sand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-campfire/10 text-campfire text-xs font-extrabold uppercase tracking-wider mb-3">
              <Youtube className="w-4 h-4 fill-campfire text-white" />
              <span>বাস্তব ভ্রমণ অভিজ্ঞতা (Visual Travel Vlogs)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-nature-950 tracking-tight">
              See the Real Adventure of Char Hare & Shonar Char
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              অভিযাত্রীদের ক্যামেরায় ধারণ করা চর হেয়ারের কোটি লাল কাঁকড়া, কাঠের ওয়াচ টাওয়ার, নির্জন বালিয়াড়ি ও সোনার চরের হরিণের ট্রেইলের বাস্তব ভিডিও চিত্র দেখে নিন।
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-nature-900 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-sand-300 border border-sand-400'
                }`}
              >
                {cat === 'All' ? 'All Videos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group bg-white rounded-2xl overflow-hidden border border-sand-300 hover:border-stone-400 shadow-card hover:shadow-float transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-campfire group-hover:bg-campfire-hover text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 ring-4 ring-white/30">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Badge Top Left */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-nature-900/90 text-white text-[11px] font-bold backdrop-blur-md">
                  {video.badge}
                </span>

                {/* Duration Bottom Right */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono font-bold flex items-center gap-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-stone-300" />
                  <span>{video.duration}</span>
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-nature-800 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-campfire" />
                    <span>{video.location}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-stone-900 leading-snug group-hover:text-nature-900 transition-colors mb-2 line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand-200 flex items-center justify-between text-xs font-bold text-campfire group-hover:text-campfire-hover">
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Watch Video Story
                  </span>
                  <span className="text-stone-400 group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-stone-800 bg-stone-900">
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-500 fill-red-500" />
                <span className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                  {activeVideo.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs font-semibold hover:bg-stone-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open on YouTube</span>
                </a>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Responsive 16:9 Video Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Description Footer */}
            <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 text-xs sm:text-sm text-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-white block mb-0.5">{activeVideo.en_title}</span>
                <span className="text-stone-400">{activeVideo.description}</span>
              </div>
              <span className="text-[11px] font-bold text-campfire uppercase tracking-wider shrink-0 bg-campfire/10 px-3 py-1 rounded-full">
                {activeVideo.location}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
