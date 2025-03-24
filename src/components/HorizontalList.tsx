import React, { useState, useRef, useEffect } from 'react';

const HorizontalList = () => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const listRef = useRef(null);
  const parentRef = useRef(null);

  // Check if the list is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (listRef.current) {
        const isOverflow = listRef.current.scrollWidth > listRef.current.clientWidth;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const [showAll, setShowAll] = useState(false);

  const handleMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div ref={parentRef} className="w-[100%] bg-red-200">
      <div
        ref={listRef}
        className={`flex ${showAll ? 'overflow-visible' : 'overflow-x-auto'} space-x-4`}
      >
        {/* List items */}
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
          Item 1 {parentRef.current!==undefined && parentRef.current!==null && parentRef.current.getBoundingClientRect().width}
        </div>
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
          Item 2
        </div>
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
          Item 3
        </div>
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
          Item 4
        </div>
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
          Item 5
        </div>
        {/* More items that will be hidden */}
        {!showAll && (
          <>
            <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
              Item 6
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
              Item 7
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center">
              Item 8
            </div>
          </>
        )}
      </div>

      {/* "More" button */}
      {isOverflowing && !showAll && (
        <button
          onClick={handleMoreClick}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          More
        </button>
      )}

      {showAll && (
        <button
          onClick={handleMoreClick}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default HorizontalList;
