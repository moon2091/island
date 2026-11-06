import React from 'react';
import { Compass, Waves, Sparkles, Trees, Sailboat, Flame, Tent } from 'lucide-react';
import { CATEGORIES } from '../data/seedCampsites';

const ICON_MAP = {
  Compass,
  Waves,
  Sparkles,
  Trees,
  Sailboat,
  Flame,
  Tent,
};

export function CategoryPills({ selectedCategory, onSelectCategory }) {
  return (
    <div className="border-b border-sand-300 bg-sand-50/70 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Compass;
            const isSelected =
              (cat.id === 'all' && (!selectedCategory || selectedCategory === 'All Camps' || selectedCategory === 'all')) ||
              selectedCategory === cat.name;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id === 'all' ? 'All Camps' : cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-nature-900 text-white border-nature-900 shadow-sm ring-2 ring-nature-900/10'
                    : 'bg-white text-stone-700 border-sand-400 hover:border-stone-400 hover:bg-sand-200'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isSelected ? 'text-campfire-sunset' : 'text-stone-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
