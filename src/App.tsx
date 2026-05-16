/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Train, 
  Plane, 
  Utensils, 
  Home, 
  Camera, 
  Info, 
  Users,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Compass
} from 'lucide-react';
import { itineraryData } from './data';
import { Day, Activity } from './types';

const ActivityIcon = ({ type }: { type: Activity['type'] }) => {
  switch (type) {
    case 'transport': return <Train className="w-5 h-5 text-blue-500" />;
    case 'dining': return <Utensils className="w-5 h-5 text-orange-500" />;
    case 'lodging': return <Home className="w-5 h-5 text-emerald-500" />;
    case 'activity': return <Camera className="w-5 h-5 text-purple-500" />;
    case 'leisure': return <Compass className="w-5 h-5 text-sky-500" />;
    default: return <Info className="w-5 h-5 text-gray-500" />;
  }
};

interface ActivityCardProps {
  activity: Activity;
  index: number;
  isLast: boolean;
  key?: React.Key;
}

const ActivityCard = ({ activity, index, isLast }: ActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="grid md:grid-cols-[100px_1fr] gap-8">
        <div className="pt-2">
          <span className="text-[11px] font-mono font-bold text-zinc-300 group-hover:text-[#d97706] transition-colors">
            {activity.time}
          </span>
        </div>
        
        <div className={`pb-16 ${!isLast ? 'border-b border-[#e5e2db]' : ''} last:pb-0`}>
          <div className="flex items-center gap-3 mb-4">
             <div className="flex-shrink-0 w-10 h-10 bg-white border border-[#e5e2db] rounded-xl flex items-center justify-center shadow-sm">
               <ActivityIcon type={activity.type} />
             </div>
             <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 italic">{activity.type}</span>
          </div>
          
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-3xl font-serif text-[#1d1c1a] leading-tight">{activity.title}</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              {activity.splitGroup && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all
                    ${isExpanded ? 'bg-[#1d1c1a] text-white border-[#1d1c1a]' : 'bg-transparent text-zinc-400 border-[#e5e2db] hover:border-[#1d1c1a] hover:text-[#1d1c1a]'}
                  `}
                >
                  <span>{isExpanded ? 'Hide Options' : 'View Paths'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              )}
              {(activity.longDescription || activity.images || activity.bookingUrl) && (
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all
                    ${showDetails ? 'bg-[#d97706] text-white border-[#d97706]' : 'bg-transparent text-zinc-400 border-[#e5e2db] hover:border-[#d97706] hover:text-[#d97706]'}
                  `}
                >
                  <span>{showDetails ? 'Collapse' : 'Learn More'}</span>
                </button>
              )}
            </div>
          </div>

          <p className="text-zinc-600 text-base leading-relaxed font-serif italic max-w-2xl">
            {activity.description}
          </p>
          
          <AnimatePresence>
            {activity.splitGroup && isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#e5e2db]" />
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#f3f2ee] rounded-full border border-[#e5e2db]">
                       <Users className="w-3 h-3 text-[#d97706]" />
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Concurrent Pathways</span>
                    </div>
                    <div className="h-px flex-1 bg-[#e5e2db]" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group/path bg-white border border-[#e5e2db] p-7 rounded-2xl shadow-sm hover:border-[#d97706]/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-[#d97706]/10 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-[#d97706]">🌿</span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1d1c1a]">Scenic Pathway</span>
                        </div>
                        <div className="text-[9px] font-mono text-zinc-400">悠遊組</div>
                      </div>
                      <p className="text-[13px] text-zinc-700 leading-relaxed font-serif italic pr-4">
                        {activity.splitGroup.groupB}
                      </p>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d97706]/5 to-transparent rounded-tr-2xl pointer-events-none" />
                    </div>

                    <div className="relative group/path bg-[#f3f2ee]/40 border border-[#e5e2db] p-7 rounded-2xl shadow-sm hover:border-[#1d1c1a]/20 transition-all duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-zinc-200 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-zinc-500">⚡</span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1d1c1a]">Active Pathway</span>
                        </div>
                        <div className="text-[9px] font-mono text-zinc-400">挑戰組</div>
                      </div>
                      <p className="text-[13px] text-zinc-700 leading-relaxed font-serif italic pr-4">
                        {activity.splitGroup.groupA}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showDetails && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-8 border-t border-dashed border-[#e5e2db] space-y-8">
                  {activity.longDescription && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        <Info className="w-3 h-3" />
                        <span>Background & Details</span>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed font-serif">
                        {activity.longDescription}
                      </p>
                    </div>
                  )}

                  {activity.images && activity.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {activity.images.map((img, i) => (
                        <motion.div 
                          key={i}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="aspect-[4/3] rounded-xl overflow-hidden border border-[#e5e2db] shadow-inner"
                        >
                          <img 
                            src={img} 
                            alt={`${activity.title} view ${i + 1}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activity.bookingUrl && (
                    <div className="pt-4">
                      <a 
                        href={activity.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#f3f2ee] rounded-xl border border-[#e5e2db] text-[11px] font-bold uppercase tracking-widest text-[#1d1c1a] hover:bg-[#1d1c1a] hover:text-white hover:border-[#1d1c1a] transition-all group"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{activity.bookingLabel || 'Book / Reservations'}</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [showOverview, setShowOverview] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const currentDay = itineraryData.days[selectedDayIndex];

  // Scroll to top when view or day changes
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedDayIndex, showOverview]);

  // Group days by location for sidebar navigation
  const groupedDays = itineraryData.days.reduce((acc, day, idx) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.location === day.location) {
      lastGroup.days.push({ ...day, originalIndex: idx });
    } else {
      acc.push({
        location: day.location,
        days: [{ ...day, originalIndex: idx }]
      });
    }
    return acc;
  }, [] as { location: string, days: (Day & { originalIndex: number })[] }[]);

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#1d1c1a] font-sans flex overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#f3f2ee] border-r border-[#e5e2db] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-10">
          <div className="flex items-center gap-3 mb-2">
            <Compass className="w-5 h-5 text-[#d97706]" />
            <h1 className="text-xl font-serif font-semibold tracking-tight text-[#1d1c1a]">Norway Journey</h1>
          </div>
          <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em] ml-8">May – June 2026</p>
        </div>

        <nav className="mt-4 px-6 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)] scrollbar-hide pb-20">
          <button
            onClick={() => { setShowOverview(true); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${showOverview ? 'bg-[#e8e6e1] text-[#1d1c1a]' : 'text-zinc-500 hover:bg-[#e8e6e1]/50 hover:text-[#1d1c1a]'}`}
          >
            <Compass className="w-4 h-4" />
            <span>Overview</span>
          </button>
          
          <div className="pt-8 pb-4 px-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            Timeline
          </div>

          <div className="space-y-6">
            {groupedDays.map((group, groupIdx) => {
              const isCurrentGroup = !showOverview && group.days.some(d => d.originalIndex === selectedDayIndex);
              
              return (
                <div key={groupIdx} className="space-y-2">
                  <div className={`px-4 flex items-center gap-2 transition-colors ${isCurrentGroup ? 'text-[#d97706]' : 'text-zinc-400'}`}>
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{group.location}</span>
                  </div>
                  <div className="space-y-1 pl-2 border-l border-zinc-200 ml-5">
                    {group.days.map((day) => (
                      <button
                        key={day.day}
                        onClick={() => { 
                          setSelectedDayIndex(day.originalIndex); 
                          setShowOverview(false);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group
                          ${!showOverview && selectedDayIndex === day.originalIndex ? 'bg-white text-[#1d1c1a] shadow-sm border border-[#e5e2db]' : 'text-zinc-500 hover:text-[#1d1c1a]'}
                        `}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[10px] font-mono rounded transition-colors
                          ${!showOverview && selectedDayIndex === day.originalIndex ? 'bg-[#1d1c1a] text-white' : 'bg-transparent border border-zinc-300 text-zinc-400 group-hover:border-zinc-400'}
                        `}>
                          {day.day}
                        </div>
                        <div className="text-left overflow-hidden">
                          <span className="text-[12px] font-medium block leading-tight truncate">{day.date}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-8 bg-[#f3f2ee] border-t border-[#e5e2db]">
          <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium">
            <Users className="w-4 h-4" />
            <span>{itineraryData.groupSize} Members</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 relative h-screen overflow-y-auto w-full bg-[#fbfaf8]">
        {/* Mobile Header */}
        <header className="md:hidden sticky top-0 z-40 bg-[#fbfaf8] border-b border-[#e5e2db] px-6 py-4 flex items-center justify-between">
          <header className={`md:hidden sticky top-0 z-40 bg-[#fbfaf8]/80 backdrop-blur-md border-b border-[#e5e2db] px-6 py-4 flex items-center justify-between transition-all`}>
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-zinc-600">
              <Menu className="w-6 h-6" />
            </button>
            <span className="text-sm font-serif font-semibold text-[#1d1c1a]">Norway Journey</span>
            <div className="w-6" />
          </header>
        </header>

        <div className="max-w-3xl mx-auto px-8 py-12 md:px-12 md:py-16">
          {/* Top Breadcrumb / Nav Indicator */}
          <div className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <button onClick={() => setShowOverview(true)} className="hover:text-[#1d1c1a] transition-colors">Norway</button>
            <ChevronRight className="w-3 h-3" />
            {showOverview ? (
              <span className="text-[#d97706]">Overview</span>
            ) : (
              <>
                <span className="text-zinc-600">{currentDay.location}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#d97706]">Day {currentDay.day}</span>
              </>
            )}
          </div>
          <AnimatePresence mode="wait">
            {showOverview ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="mb-24">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97706]">
                      Official Itinerary
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-serif text-[#1d1c1a] tracking-tight leading-[1.1] mb-12">
                    {itineraryData.title}
                  </h1>
                  <div className="flex flex-wrap gap-12 text-zinc-600 mt-12">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Window</span>
                      <div className="flex items-center gap-3 text-[#1d1c1a]">
                        <Calendar className="w-4 h-4 text-[#d97706]" />
                        <span className="text-xl font-serif italic">{itineraryData.dates}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Size</span>
                      <div className="flex items-center gap-3 text-[#1d1c1a]">
                        <Users className="w-4 h-4 text-[#d97706]" />
                        <span className="text-xl font-serif italic">{itineraryData.groupSize} Members</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-24">
                  <div className="flex items-center gap-4 mb-8">
                     <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Essential Tips</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-12">
                    {itineraryData.tips.map((tip, i) => (
                      <div key={i}>
                        <h3 className="text-xs font-bold text-[#1d1c1a] uppercase tracking-wider mb-2">{tip.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed font-serif italic">{tip.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-24">
                  <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-12">Route Overview</h2>
                  <div className="relative pl-12 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#e5e2db]">
                    {itineraryData.days.filter((day, index, self) => 
                      index === 0 || day.location !== self[index - 1].location
                    ).map((day, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[45px] top-1 w-6 h-6 bg-[#fbfaf8] border border-[#e5e2db] rounded-full flex items-center justify-center z-10 group-hover:border-[#d97706] transition-colors">
                          <div className="w-1.5 h-1.5 bg-[#d97706]/40 rounded-full group-hover:bg-[#d97706] transition-colors" />
                        </div>
                        <h3 className="text-2xl font-serif text-[#1d1c1a]">{day.location}</h3>
                        <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest mt-1">From Day {day.day}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => { setShowOverview(false); setSelectedDayIndex(0); }}
                  className="group px-12 py-5 bg-[#1d1c1a] text-white rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#d97706] transition-all flex items-center gap-4 shadow-xl shadow-[#1d1c1a]/10"
                >
                  Enter Itinerary <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={selectedDayIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                   <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[11px] font-bold text-[#d97706] uppercase tracking-[0.4em]">
                        Day {currentDay.day}
                      </span>
                      <div className="h-px w-8 bg-[#e5e2db]"></div>
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.2em]">{currentDay.date}</span>
                    </div>
                    <h2 className="text-6xl font-serif text-[#1d1c1a] tracking-tight leading-none">{currentDay.location}</h2>
                   </div>
                   <div className="flex gap-3">
                     <button 
                       disabled={selectedDayIndex === 0}
                       onClick={() => setSelectedDayIndex(i => i - 1)}
                       className="p-4 bg-white border border-[#e5e2db] rounded-full text-zinc-400 disabled:opacity-20 hover:text-[#1d1c1a] hover:border-[#1d1c1a] transition-all"
                     >
                       <ChevronLeft className="w-5 h-5" />
                     </button>
                     <button 
                       disabled={selectedDayIndex === itineraryData.days.length - 1}
                       onClick={() => setSelectedDayIndex(i => i + 1)}
                       className="p-4 bg-white border border-[#e5e2db] rounded-full text-zinc-400 disabled:opacity-20 hover:text-[#1d1c1a] hover:border-[#1d1c1a] transition-all"
                     >
                       <ChevronRight className="w-5 h-5" />
                     </button>
                   </div>
                </div>

                <div className="bg-[#f3f2ee] border border-[#e5e2db] p-8 md:p-12 rounded-3xl mb-24 relative">
                  <div className="absolute -top-4 -left-4 p-3 bg-[#d97706] text-white rounded-full">
                    <Compass className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-serif italic text-[#1d1c1a] leading-relaxed">
                    "{currentDay.summary}"
                  </p>
                </div>

                <div className="space-y-20">
                  {currentDay.activities.map((activity, i) => (
                    <ActivityCard 
                      key={i} 
                      activity={activity} 
                      index={i} 
                      isLast={i === currentDay.activities.length - 1} 
                    />
                  ))}
                </div>

                {/* Bottom Navigation */}
                <div className="mt-32 pt-12 border-t border-[#e5e2db] flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Current Progress</span>
                    <div className="flex items-center gap-2">
                      {itineraryData.days.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 rounded-full transition-all duration-500 ${i === selectedDayIndex ? 'w-8 bg-[#d97706]' : 'w-2 bg-zinc-200'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {selectedDayIndex > 0 ? (
                      <button 
                        onClick={() => {
                          setSelectedDayIndex(i => i - 1);
                        }}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#e5e2db] text-xs font-bold uppercase tracking-widest text-[#1d1c1a] hover:bg-[#e8e6e1] transition-all"
                      >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Previous Day
                      </button>
                    ) : (
                      <button 
                        onClick={() => setShowOverview(true)}
                        className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#e5e2db] text-xs font-bold uppercase tracking-widest text-[#1d1c1a] hover:bg-[#e8e6e1] transition-all"
                      >
                        Full Overview
                      </button>
                    )}

                    {selectedDayIndex < itineraryData.days.length - 1 ? (
                      <button 
                        onClick={() => {
                          setSelectedDayIndex(i => i + 1);
                        }}
                        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#1d1c1a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#d97706] transition-all shadow-lg shadow-[#1d1c1a]/10"
                      >
                        Next Day
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button 
                        onClick={() => setShowOverview(true)}
                        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#1d1c1a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#d97706] transition-all shadow-lg shadow-[#1d1c1a]/10"
                      >
                        Journey End
                        <Compass className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

