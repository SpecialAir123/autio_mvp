import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VectorSvg from "./assets/home_1/Vector.svg";
import Vector25Svg from "./assets/home_1/Vector 25.svg";

import Group92Svg from "./assets/home_1/Group 92.svg";
import UnionSvg from "./assets/home_1/Union.svg";
import BgImageL from "./assets/home_1/bg_image_L.svg";
import BlurL from "./assets/home_1/blur_L.svg";

// Import assets for Home_2
import BeachImage from "./assets/home_2/source/caleb-george-G7hmn5v3zU8-unsplash.jpg";
import JeepImage from "./assets/home_2/jeep.svg";
import PalmTreesImage from "./assets/home_2/source/steven-pahel-645g50Mxy8s-unsplash.jpg";
import BeachIcon from "./assets/home_2/beach, coast, resort, palm, sun, sea, 2, line, basicons 1.svg";

import HotelIcon from "./assets/home_2/hotel 1.svg";

import DownArrowIcon from "./assets/home_2/Vector_25-1.svg";
import CarIcon from "./assets/home_2/Union-1.svg";

import TreesIcon from "./assets/home_2/trees 1.svg";
import RoundCircleArrow from "./assets/home_2/round_circle_arrow.svg";

// Import assets for Home_3
import UnionHome3Svg from "./assets/home_3/Union.svg";
import CarImageSvg from "./assets/home_3/Car image.svg";
import DistanceIconPng from "./assets/home_3/distance_icon.png";
import BudgetIconSvg from "./assets/home_3/budget_icon.svg";
import RectangleSvg from "./assets/home_3/rectangle.svg";
import LocationIconSvg from "./assets/home_3/location_icon.svg";
import ArrowButtonSvg from "./assets/home_3/arrow_button.svg";
import TipsIconSvg from "./assets/home_3/tips_icon.svg";

function Home_1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressPosition, setProgressPosition] = useState(70); // Start at the left end of the slide bar
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string>('toolkit'); // Track which card is selected, default to toolkit

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Calculate scale to ensure full width is visible
        const scaleX = (viewportWidth - 40) / 1920; // Leave 20px margin on each side
        const scaleY = (viewportHeight - 40) / 1080; // Leave 20px margin on each side
        const initialScale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 100%
        
        // Apply scale
        container.style.transform = `scale(${initialScale})`;
        container.style.transformOrigin = 'top left';
        
        // Position to ensure right side is visible
        container.style.marginLeft = '20px';
        container.style.marginTop = '20px';
        
        // Ensure the container is properly positioned
        container.style.position = 'relative';
        container.style.left = '0';
        container.style.top = '0';
      }
    };

    // Initial scale
    updateScale();
    
    // Update scale on window resize
    window.addEventListener('resize', updateScale);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Slide bar functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const progressBar = document.querySelector('[data-progress-bar]');
        if (progressBar) {
          const rect = progressBar.getBoundingClientRect();
          const x = e.clientX - rect.left;
          // Constrain sliding to only the white segments area (approximately 200px to 1356px)
          const clampedX = Math.max(70, Math.min(x, 1450));
          setProgressPosition(clampedX);
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        const progressBar = document.querySelector('[data-progress-bar]');
        if (progressBar) {
          const rect = progressBar.getBoundingClientRect();
          const x = e.touches[0].clientX - rect.left;
          // Constrain sliding to only the white segments area (approximately 200px to 1356px)
          const clampedX = Math.max(200, Math.min(x, 1356));
          setProgressPosition(clampedX);
        }
      }
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="autio-page-container" ref={containerRef}>
      <div className="w-[1920px] h-[1080px] relative bg-white rounded-[25px] border-0">
        {/* Header Items - Directly positioned on horizontal line at top */}
        
        {/* Left Section: Union.svg + Greeting + Group 92.svg + Search Button */}
        <div className="left-[60px] top-[20px] absolute flex items-center gap-4 z-20">
          {/* Union.svg */}
          <img src={UnionSvg} alt="Union icon" className="w-8 h-6" />
          
          {/* Greeting Text */}
          <div className="text-[#9C9C9C] text-[14px] font-['Fieldstones'] font-normal">
            Hi, This is Vroom
          </div>
          
          {/* Group 92.svg */}
          <img src={Group92Svg} alt="Group 92 icon" className="w-8 h-6" />
          
          {/* Search Button */}
          <div className="bg-[#214538] rounded-[20px] px-6 py-2">
            <div className="text-white text-[14px] font-['Fieldstones'] font-normal">
              Prompt to search
            </div>
          </div>
        </div>
        
        {/* Center: Service Description */}
        <div className="left-[851px] top-[39px] absolute text-[#9C9C9C] text-[14px] font-['Fieldstones'] font-normal z-20">
          -Ultimate Used Car Searching Engine
        </div>
        
        {/* Right Section: User Name + Avatar */}
        <div className="left-[1776px] top-[39px] absolute flex items-center gap-3 z-20">
          <div className="text-[#1E1E1E] text-[14px] font-['Fieldstones'] font-normal">
            Jasen
          </div>
          <div className="w-8 h-8 bg-[#214538] rounded-full"></div>
        </div>

        {/* Hero Text - Both lines in same structure */}
        <div className="left-[72px] top-[120px] absolute z-20">
          <div className="text-[#1E1E1E] text-[80px] font-['Fieldstones'] font-normal uppercase tracking-[5.40px] break-words leading-tight">
            HI! THIS IS A TOOL TO HELP YOU
          </div>
          
          {/* Second Line of Hero Text and Lifestyle Badge - Same structure */}
          <div className="flex items-center gap-8 mt-8">
            <div className="text-[#1E1E1E] text-[80px] font-['Fieldstones'] font-normal uppercase tracking-[5.40px] break-words leading-tight">
              FIND THE RIGHT CAR FOR
            </div>
            
            {/* Lifestyle Badge - Now in same structure as second line */}
            <div className="w-[600px] h-[80px] px-8 bg-[#214538] rounded-[43.17px] justify-center items-center inline-flex">
              <div className="text-[#FEFEFE] text-[56px] font-['Fieldstones'] font-normal uppercase tracking-wide break-words whitespace-nowrap">
                your lifestyle
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container - All elements positioned relative to this */}
        <div className="relative w-full h-full">
          {/* Background Image and Blur - Combined structure */}
          <div className="absolute left-[60px] top-[408px] w-[1800px] h-[610px] z-0">
            {/* Background Image */}
            <img 
              src={BgImageL} 
              alt="Background" 
              className="w-full h-full object-cover rounded-[25px]"
            />
            {/* Blur Overlay - Above background image */}
            <div className="absolute inset-0 z-10">
              <img 
                src={BlurL} 
                alt="Blur overlay" 
                className="w-full h-full object-cover rounded-[25px]"
              />
            </div>
          </div>

          {/* About This Tool Box - Left Side - All 4 corners rounded */}
          <div className="absolute left-[71px] top-[408px] w-[788.72px] h-[230.75px] px-[23px] py-[37px] bg-white rounded-[25px] outline outline-[1.03px] outline-[#214538] outline-offset-[-1.03px] z-30">
            
            {/* Top Row: Title + Buttons horizontally aligned */}
            <div className="flex items-center gap-4 mb-6">
              {/* Title */}
              <div className="text-[#1E1E1E] text-[24px] font-['Fieldstones'] font-bold capitalize break-words">
                About this tool
              </div>
              
              {/* Buttons arranged horizontally */}
              <div className="flex items-center gap-3">
                <div 
                  className={`px-4 py-1 rounded-[20px] outline outline-[1.53px] outline-[#214538] outline-offset-[-1.53px] flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 ${
                    selectedCard === 'toolkit' 
                      ? 'bg-[#214538] hover:bg-[#214538]' 
                      : 'bg-white hover:bg-green-100'
                  }`}
                  onClick={() => setSelectedCard('toolkit')}
                >
                  <div className={`text-[14px] font-['Fieldstones'] font-normal break-words ${
                    selectedCard === 'toolkit' ? 'text-white' : 'text-black'
                  }`}>Tool kit</div>
                </div>
                
                <div 
                  className={`px-4 py-1 rounded-[20px] outline outline-[1.53px] outline-[#214538] outline-offset-[-1.53px] flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 ${
                    selectedCard === 'lifestyle' 
                      ? 'bg-[#214538] hover:bg-[#214538]' 
                      : 'bg-white hover:bg-green-100'
                  }`}
                  onClick={() => setSelectedCard('lifestyle')}
                >
                  <div className={`text-[14px] font-['Fieldstones'] font-normal break-words ${
                    selectedCard === 'lifestyle' ? 'text-white' : 'text-black'
                  }`}>Life style based</div>
                </div>
                
                <div 
                  className={`px-4 py-1 rounded-[20px] outline outline-[1.53px] outline-[#214538] outline-offset-[-1.53px] flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 ${
                    selectedCard === 'usercentered' 
                      ? 'bg-[#214538] hover:bg-[#214538]' 
                      : 'bg-white hover:bg-green-100'
                  }`}
                  onClick={() => setSelectedCard('usercentered')}
                >
                  <div className={`text-[14px] font-['Fieldstones'] font-normal break-words ${
                    selectedCard === 'usercentered' ? 'text-white' : 'text-black'
                  }`}>User Centered</div>
                </div>
                
                <div 
                  className={`px-4 py-1 rounded-[20px] outline outline-[1.53px] outline-[#214538] outline-offset-[-1.53px] flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 ${
                    selectedCard === 'aisearch' 
                      ? 'bg-[#214538] hover:bg-[#214538]' 
                      : 'bg-white hover:bg-green-100'
                  }`}
                  onClick={() => setSelectedCard('aisearch')}
                >
                  <div className={`text-[14px] font-['Fieldstones'] font-normal break-words ${
                    selectedCard === 'aisearch' ? 'text-white' : 'text-black'
                  }`}>AI Search Engine</div>
                </div>
              </div>
            </div>
            
            {/* Description text below */}
            <div className="text-Color-Dark-Primary text-[18px] font-['Fieldstones'] font-normal leading-[17.78px] break-words">
              {selectedCard === 'toolkit' ? "Your search, your way. We give you more than just filters — this is your ultimate toolkit for finding your car. Browse with confidence using smart comparisons, side-by-side spec breakdowns, budget tools, and vibe-based search prompts" :
               selectedCard === 'lifestyle' ? "We don't just show you listings — we show you how a car fits into your world. Weekend adventurer? Daily city warrior? Soccer parent with a caffeine addiction? We factor in your lifestyle, routines, and dreams to recommend cars that feel right." :
               selectedCard === 'usercentered' ? "You're the driver here (even before the test drive). This site is built around you. The more you explore, the better we get at understanding what matters to you — comfort, storage, fuel economy, you name it. Every interaction shapes a smarter, smoother experience. It's like having a car concierge that speaks your language and never pushes the hard sell." :
               selectedCard === 'aisearch' ? "Hi, this is an AI-ebbed searching engine for you to get the best car fit your life-style. The tool itself will adjust base on your familiarity of vehicles and your preference seamlessly." :
               "Hi, this is an AI-ebbed searching engine for you to get the best car fit your life-style. The tool itself will adjust base on your familiarity of vehicles and your preference seamlessly."}
            </div>
          </div>

          {/* Info Box - Right Side */}
          <div className="absolute left-[1015px] top-[457px] w-[777px] h-[210px] px-10 py-[51px] bg-Color-Dark-Green rounded-[31px] flex-col justify-start items-end gap-8 inline-flex z-30">
            <div className="justify-start text-Color-Light-Primary text-[20px] font-['Fieldstones'] font-bold capitalize break-words">We'd like to know a little bit more about you</div>
            <div className="w-[623px] text-right justify-start text-Color-Light-Secondary text-[16px] font-['Fieldstones'] font-normal leading-[17.78px] break-words">Base on how much you know about the cars, this tool will adjust itself to provide you with better service! Now drag the bar to adjust the system base on your preferences!</div>
          </div>

          {/* Progress Bar - Updated to match second image */}
          <div className="absolute left-[124px] top-[845.09px] w-[1556px] h-[70.82px] bg-[#214538] rounded-[49.27px] flex items-center justify-center relative z-30" data-progress-bar>
            {/* Four white horizontal lines as segments */}
            <div className="flex items-center gap-[32.84px]">
              <div className="w-80 h-1 bg-white rounded-full"></div>
              <div className="w-80 h-1 bg-white rounded-full"></div>
              <div className="w-80 h-1 bg-white rounded-full"></div>
              <div className="w-80 h-1 bg-white rounded-full"></div>
            </div>
            
            {/* Draggable Progress Indicator */}
            <div 
              className="w-[51px] h-[51px] absolute cursor-grab active:cursor-grabbing"
              style={{ 
                left: `${progressPosition}px`,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <img src={VectorSvg} alt="Progress indicator" className="w-full h-full" />
            </div>
          </div>

          {/* Right Dark Green Circular Button with Vector 25.svg - Larger and aligned */}
          <div 
            className="absolute left-[1700px] top-[845px] w-16 h-16 bg-[#214538] rounded-full flex items-center justify-center z-30 cursor-pointer hover:bg-[#1a5f3a] transition-all duration-200 active:scale-95"
            onClick={() => window.location.href = '/home_2'}
          >
            <img src={Vector25Svg} alt="Arrow icon" className="w-8 h-8" />
          </div>

          {/* Knowledge Level Labels */}
          <div className="absolute left-[308px] top-[792px] justify-start items-center gap-[200px] inline-flex z-30">
            <div className="text-center text-Color-Light-Primary text-2xl font-bold font-['Fieldstones'] uppercase leading-normal tracking-wide">Beginner</div>
            <div className="text-center text-Color-Light-Primary text-2xl font-bold font-['Fieldstones'] uppercase leading-normal tracking-wide">Casual Driver</div>
            <div className="text-center text-Color-Light-Primary text-2xl font-bold font-['Fieldstones'] uppercase leading-normal tracking-wide">Enthusiast</div>
            <div className="text-center text-Color-Light-Primary text-2xl font-bold font-['Fieldstones'] uppercase leading-normal tracking-wide">PROFESSIONAL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home_2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Calculate scale to ensure full width is visible
        const scaleX = (viewportWidth - 40) / 1920; // Leave 20px margin on each side
        const scaleY = (viewportHeight - 40) / 1080; // Leave 20px margin on each side
        const initialScale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 100%
        
        // Apply scale
        container.style.transform = `scale(${initialScale})`;
        container.style.transformOrigin = 'top left';
        
        // Position to ensure right side is visible
        container.style.marginLeft = '20px';
        container.style.marginTop = '20px';
        
        // Ensure the container is properly positioned
        container.style.position = 'relative';
        container.style.left = '0';
        container.style.top = '0';
      }
    };

    // Initial scale
    updateScale();
    
    // Update scale on window resize
    window.addEventListener('resize', updateScale);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="autio-page-container" ref={containerRef}>
      <div className="w-[1920px] h-[1080px] relative bg-white rounded-[25px] border-0">
        {/* Header Items - Directly positioned on horizontal line at top */}
        
        {/* Left Section: Union.svg + Greeting + Group 92.svg + Search Button */}
        <div className="left-[60px] top-[20px] absolute flex items-center gap-4 z-20">
          {/* Union.svg */}
          <img src={UnionSvg} alt="Union icon" className="w-8 h-6" />
          
          {/* Greeting Text */}
          <div className="text-[#9C9C9C] text-[14px] font-['Fieldstones'] font-normal">
            Hi, This is Vroom
          </div>
          
          {/* Group 92.svg */}
          <img src={Group92Svg} alt="Group 92 icon" className="w-8 h-6" />
          
          {/* Search Button */}
          <div className="bg-[#214538] rounded-[20px] px-6 py-2">
            <div className="text-white text-[14px] font-['Fieldstones'] font-normal">
              Prompt to search
            </div>
          </div>
        </div>
        
        {/* Center: Service Description */}
        <div className="left-[851px] top-[39px] absolute text-[#9C9C9C] text-[14px] font-['Fieldstones'] font-normal z-20">
          -Ultimate Used Car Searching Engine
        </div>
        
        {/* Right Section: User Name + Avatar */}
        <div className="left-[1776px] top-[39px] absolute flex items-center gap-3 z-20">
          <div className="text-[#1E1E1E] text-[14px] font-['Fieldstones'] font-normal">
            Jasen
          </div>
          <div className="w-8 h-8 bg-[#214538] rounded-full"></div>
        </div>

        {/* Hero Text - Both lines in same structure */}
        <div className="left-[72px] top-[120px] absolute z-20">
          <div className="text-[#1E1E1E] text-[80px] font-['Fieldstones'] font-normal uppercase tracking-[5.40px] break-words leading-tight">
            I'M LOOKING FOR A CAR THAT ...
          </div>
        </div>
        
        {/* Three Cards Container - Easy to adjust size and position together */}
        <div className="absolute left-[72px] top-[265px] flex gap-4 z-20">
          {/* Left Card - Beach Day */}
          <div className="relative">
            <img className="w-[450px] h-[450px] rounded-3xl" src={BeachImage} alt="Beach Day" />
            <div className="absolute inset-0 bg-black/40 rounded-3xl backdrop-blur-[6px]"></div>
            {/* Beach Day Title and Subtitle */}
            <div className="left-[72px] top-[100px] absolute z-30">
              <div className="text-white text-2xl font-normal font-['Fieldstones'] uppercase leading-normal tracking-wide">BEACH DAY</div>
              <div className="text-white text-sm font-normal font-['Fieldstones'] mt-2">Get ready for your beach day!</div>
            </div>
            {/* Beach Icon */}
            <div className="absolute top-[23px] right-[23px] w-14 h-14 p-1.5 bg-green-900 rounded-3xl inline-flex justify-start items-center gap-3.5">
              <img src={BeachIcon} alt="Beach icon" className="w-10 h-10" />
            </div>
          </div>

          {/* Middle Card - Jeep */}
          <div className="relative">
            <img className="w-[439px] h-[502px] rounded-3xl" src={JeepImage} alt="Jeep Wrangler" />
            {/* Tree Icon */}
            <div className="absolute top-[23px] right-[23px] w-14 h-14 p-1.5 bg-green-900 rounded-3xl inline-flex justify-start items-center gap-3.5">
              <img src={TreesIcon} alt="Tree icon" className="w-11 h-11" />
            </div>
          </div>

          {/* Right Card - Palm Trees */}
          <div className="relative">
            <img className="w-[439px] h-[502px] rounded-3xl" src={PalmTreesImage} alt="Palm Trees" />
            {/* Hotel Icon */}
            <div className="absolute top-[23px] right-[23px] w-14 h-14 px-2 py-1.5 bg-green-900 rounded-3xl inline-flex justify-center items-center gap-3.5">
              <img src={HotelIcon} alt="Hotel icon" className="w-10 h-10" />
            </div>
          </div>
        </div>
        

        {/* Right Arrow Button */}
        <div className="w-12 h-12 p-2.5 left-[1737px] top-[914px] absolute bg-green-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-2.5">
          <img src={DownArrowIcon} alt="Arrow icon" className="w-6 h-6" />
        </div>
        
        <div className="left-[72px] top-[839px] absolute justify-start text-stone-900 text-2xl font-normal font-['Fieldstones'] uppercase leading-normal tracking-wide">Now PLEASE TELL US MORE about your dream car, YOUR LIFESTYLE OR ANYTHING IN YOUR MIND!</div>
        <div className="w-[1739px] h-24 left-[72px] top-[888px] absolute rounded-[80px] border border-green-900"></div>
        <div className="left-[166.43px] top-[928.55px] absolute inline-flex justify-start items-center gap-2">
          <div className="justify-start text-Color-Dark-Primary text-sm font-normal font-['Fieldstones']">|</div>
          <div className="text-Color-Dark-Secondary text-sm font-normal font-['Fieldstones']">I can take my surf boards, supplies and my friends to the beach for a beach day. Also use it for daily commute to work...</div>
        </div>
        {/* Car Icon */}
        <div className="left-[115px] top-[928.05px] absolute">
          <img src={CarIcon} alt="Car icon" className="w-9 h-6" />
        </div>
        
        {/* Right Sidebar Info Box */}
        <div className="w-72 left-[1537px] top-[724px] absolute justify-start text-stone-900 text-sm font-normal font-['Fieldstones']">Let's start by imagining your life with this new car, think about how you gonna use it.</div>
        
        {/* Round Circle Arrow Icon above Life Style button */}
        <div className="left-[1530px] top-[530px] absolute">
          <img src={RoundCircleArrow} alt="Round circle arrow" className="w-18 h-18" />
        </div>
        
        <div className="w-28 h-10 px-5 py-2.5 left-[1536.57px] top-[657px] absolute bg-green-900 rounded-3xl outline outline-[0.78px] outline-offset-[-0.78px] outline-green-900 inline-flex justify-center items-center gap-2">
          <div className="text-center justify-center text-white text-base font-normal font-['Fieldstones']">Life Style</div>
        </div>
        <div className="w-32 h-10 px-5 py-2.5 left-[1659.57px] top-[657px] absolute rounded-3xl outline outline-[0.78px] outline-offset-[-0.78px] outline-green-900 inline-flex justify-center items-center gap-2">
          <div className="text-center justify-center text-green-900 text-base font-normal font-['Fieldstones']">Fun Events</div>
        </div>
      </div>
    </div>
  );
}

function Home_3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [travelPosition, setTravelPosition] = useState(274); // Start position for travel slider
  const [isDraggingTravel, setIsDraggingTravel] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Calculate scale to ensure full width is visible
        const scaleX = (viewportWidth - 40) / 1920; // Leave 20px margin on each side
        const scaleY = (viewportHeight - 40) / 1080; // Leave 20px margin on each side
        const initialScale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 100%
        
        // Apply scale
        container.style.transform = `scale(${initialScale})`;
        container.style.transformOrigin = 'top left';
        
        // Position to ensure right side is visible
        container.style.marginLeft = '20px';
        container.style.marginTop = '20px';
        
        // Ensure the container is properly positioned
        container.style.position = 'relative';
        container.style.left = '0';
        container.style.top = '0';
      }
    };

    // Initial scale
    updateScale();
    
    // Update scale on window resize
    window.addEventListener('resize', updateScale);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Travel slide bar functionality
  const handleTravelMouseDown = (e: React.MouseEvent) => {
    setIsDraggingTravel(true);
    e.preventDefault();
  };

  const handleTravelTouchStart = (e: React.TouchEvent) => {
    setIsDraggingTravel(true);
  };

  useEffect(() => {
    const handleTravelMouseMove = (e: MouseEvent) => {
      if (isDraggingTravel) {
        // Use fixed positioning since we removed the data-travel-bar
        const x = e.clientX - 102; // 102px is the left offset
        // Constrain sliding to full bar length (0px to 384px)
        const clampedX = Math.max(0, Math.min(x, 374));
        setTravelPosition(102 + clampedX);
      }
    };

    const handleTravelTouchMove = (e: TouchEvent) => {
      if (isDraggingTravel) {
        // Use fixed positioning since we removed the data-travel-bar
        const x = e.touches[0].clientX - 102; // 102px is the left offset
        // Constrain sliding to full bar length (0px to 384px)
        const clampedX = Math.max(0, Math.min(x, 374));
        setTravelPosition(102 + clampedX);
      }
    };

    const handleTravelMouseUp = () => setIsDraggingTravel(false);
    const handleTravelTouchEnd = () => setIsDraggingTravel(false);

    if (isDraggingTravel) {
      document.addEventListener('mousemove', handleTravelMouseMove);
      document.addEventListener('mouseup', handleTravelMouseUp);
      document.addEventListener('touchmove', handleTravelTouchMove);
      document.addEventListener('touchend', handleTravelTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleTravelMouseMove);
      document.removeEventListener('mouseup', handleTravelMouseUp);
      document.removeEventListener('touchmove', handleTravelTouchMove);
      document.removeEventListener('touchend', handleTravelTouchEnd);
    };
  }, [isDraggingTravel]);

  return (
    <div className="autio-page-container" ref={containerRef}>
      <div className="w-[1920px] h-[1080px] relative bg-white rounded-3xl overflow-hidden">
        
        <div className="w-12 h-12 p-2.5 left-[1737px] top-[914px] absolute bg-green-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-2.5">
          <img src={ArrowButtonSvg} alt="Arrow button" className="w-7 h-7" />
        </div>


        {/* Right Arrow Button */}
        <div className="w-12 h-12 p-2.5 left-[1737px] top-[914px] absolute bg-green-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-2.5">
          <img src={DownArrowIcon} alt="Arrow icon" className="w-6 h-6" />
        </div>
        
        <div className="left-[72px] top-[839px] absolute justify-start text-stone-900 text-2xl font-normal font-['Fieldstones'] uppercase leading-normal tracking-wide">Now PLEASE TELL US MORE about your dream car, YOUR LIFESTYLE OR ANYTHING IN YOUR MIND!</div>
        <div className="w-[1739px] h-24 left-[72px] top-[888px] absolute rounded-[80px] border border-green-900"></div>
        <div className="left-[166.43px] top-[928.55px] absolute inline-flex justify-start items-center gap-2">
          <div className="justify-start text-Color-Dark-Primary text-sm font-normal font-['Fieldstones']">|</div>
          <div className="text-Color-Dark-Secondary text-sm font-normal font-['Fieldstones']">I can take my surf boards, supplies and my friends to the beach for a beach day. Also use it for daily commute to work...</div>
        </div>
        {/* Car Icon */}
        <div className="left-[115px] top-[928.05px] absolute">
          <img src={CarIcon} alt="Car icon" className="w-9 h-6" />
        </div>

        <img className="w-[960px] h-[1228px] left-[789px] top-[-200px] absolute rounded-3xl" src={CarImageSvg} alt="Car background" />
        
        <div className="left-[40px] top-[121px] absolute justify-start">
          <span className="text-Color-Dark-Primary text-8xl font-normal font-['Fieldstones'] uppercase">Awesome, Last</span>
          <span className="text-Color-Light-Primary text-8xl font-normal font-['Fieldstones'] uppercase"> few q</span>
          <span className="text-white text-8xl font-normal font-['Fieldstones'] uppercase">uestions</span>
        </div>
        
        {/* Budget Section */}
        <div className="w-[624px] h-40 left-[72px] top-[251px] absolute">
          <img src={RectangleSvg} alt="Budget background" className="w-full h-full" />
        </div>
        <div className="left-[628px] top-[251px] absolute inline-flex justify-start items-center gap-2.5">
          <img src={BudgetIconSvg} alt="Budget icon" className="w-16 h-16" />
        </div>
        <div className="left-[102px] top-[275px] absolute justify-start text-white text-2xl font-medium font-['Fieldstones'] uppercase">What is your Budget?</div>
        
        {/* Tips Section */}
        <div className="w-[532px] h-[479px] left-[1190px] top-[277px] absolute bg-Color-Dark-Green rounded-[31px]"></div>
        <div className="w-8 h-4 left-[334.76px] top-[345.57px] absolute text-center justify-center text-Color-Light-Primary text-xl font-normal font-['Fieldstones'] uppercase">-</div>
        <div className="w-52 h-0 left-[102px] top-[362.57px] absolute outline outline-1 outline-offset-[-0.50px] outline-white"></div>
        <div className="w-52 h-0 left-[392.60px] top-[362.57px] absolute outline outline-1 outline-offset-[-0.50px] outline-white"></div>
        <div className="w-32 h-5 left-[127.01px] top-[335px] absolute text-center justify-start text-white text-xl font-normal font-['Fieldstones'] capitalize">30,000$</div>
        <div className="w-32 h-5 left-[432px] top-[335px] absolute text-center justify-start text-white text-xl font-normal font-['Fieldstones'] capitalize">35,000$</div>
        
        <div className="left-[1249px] top-[330px] absolute text-right justify-start text-Color-Light-Primary text-3xl font-normal font-['Fieldstones'] uppercase">helpful tips</div>
        <div className="left-[1486px] top-[325px] absolute">
          <img src={TipsIconSvg} alt="Tips icon" className="w-12 h-12" />
        </div>
        
        <div className="w-36 h-10 px-4 py-3.5 left-[1249px] top-[403px] absolute bg-Color-Light-Primary rounded-[33px] inline-flex justify-center items-center gap-2.5">
          <div className="text-green-900 text-xs font-normal font-['Fieldstones'] uppercase whitespace-nowrap">Set a Budget</div>
        </div>
        <div className="w-36 h-10 px-4 py-3.5 left-[1405px] top-[403px] absolute rounded-[33px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div className="text-white text-xs font-normal font-['Fieldstones'] uppercase whitespace-nowrap">Get History Report</div>
        </div>
        <div className="w-36 h-10 px-4 py-3.5 left-[1561px] top-[403px] absolute rounded-[33px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
          <div className="text-white text-xs font-normal font-['Fieldstones'] uppercase whitespace-nowrap">Inspection Details</div>
        </div>
        
        {/* Distance Section */}
        <div className="w-[624px] h-40 left-[72px] top-[445px] absolute">
          <img src={RectangleSvg} alt="Distance background" className="w-full h-full" />
        </div>
        <div className="left-[627px] top-[445px] absolute inline-flex justify-start items-center gap-2.5">
          <img src={LocationIconSvg} alt="Location icon" className="w-16 h-16" />
        </div>
        <div className="w-96 left-[102px] top-[474px] absolute justify-start text-white text-xl font-normal font-['Fieldstones'] uppercase">How far will you go for it?</div>
        <div className="w-96 h-32 left-[1246px] top-[495px] absolute justify-start text-Color-Light-Primary text-sm font-normal font-['Fieldstones']">Determine Your Price Range: Include not just the purchase price, but also taxes, registration, insurance, and potential repairs. <br/>Consider Financing: If you're taking out a loan, get pre-approved to know how much you can afford and what your interest rate will be.</div>
        <div className="left-[313.29px] top-[542px] absolute justify-center text-white text-sm font-normal font-['Fieldstones'] capitalize">Around</div>
        <div className="w-48 h-0 left-[402.02px] top-[558.22px] absolute outline outline-1 outline-offset-[-0.50px] outline-white"></div>
        <div className="w-44 h-0 left-[102px] top-[557px] absolute outline outline-1 outline-offset-[-0.50px] outline-white"></div>
        <div className="w-24 left-[142.77px] top-[531px] absolute text-center justify-start text-white text-xl font-normal font-['Fieldstones'] capitalize">20 miles</div>
        <div className="w-28 left-[443.02px] top-[533px] absolute text-center justify-start text-green-300 text-sm font-normal font-['Fieldstones'] capitalize">Zip Code</div>
        
        {/* Travel Section */}
        <div className="w-[624px] h-40 left-[72px] top-[642px] absolute">
          <img src={RectangleSvg} alt="Travel background" className="w-full h-full" />
        </div>
        <div className="left-[627px] top-[642px] absolute inline-flex justify-start items-center gap-2.5">
          <img src={DistanceIconPng} alt="Distance icon" className="w-16 h-16" />
        </div>
        <div className="w-64 left-[102px] top-[667px] absolute justify-start text-white text-xl font-normal font-['Fieldstones'] uppercase">How much do you travel per day?</div>
        <div className="left-[540px] top-[739px] absolute text-center justify-start text-white text-xl font-normal font-['Fieldstones'] capitalize">20 Miles</div>
        <div 
          className="w-2.5 h-2.5 absolute bg-green-300 rounded-full cursor-grab active:cursor-grabbing z-10"
          style={{ 
            left: `${travelPosition}px`,
            top: '748px'
          }}
          onMouseDown={handleTravelMouseDown}
          onTouchStart={handleTravelTouchStart}
        />
        <div className="w-96 h-[5px] left-[102px] top-[751px] absolute bg-zinc-300 rounded-[47px]"></div>
        <div 
          className="h-[5px] left-[102px] top-[751px] absolute bg-green-300 rounded-[47px]"
          style={{ 
            width: `${Math.max(0, travelPosition - 102)}px`
          }}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Simple routing based on URL path
function App() {
  const path = window.location.pathname;
  
  if (path === '/home_2') {
    return <Home_2 />;
  }
  
  if (path === '/home_3') {
    return <Home_3 />;
  }
  
  // Default to Home_1
  return <Home_1 />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
