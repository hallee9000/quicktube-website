import { useEffect, useRef, useState } from 'react';

export default function SidebarComparison({ content }) {
  const [position, setPosition] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isDragging) {
      return undefined;
    }

    function updatePosition(clientX) {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const nextPosition = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, nextPosition)));
    }

    function handlePointerMove(event) {
      updatePosition(event.clientX);
    }

    function handlePointerUp() {
      setIsDragging(false);
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  function handlePointerDown(event) {
    if (!containerRef.current) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const nextPosition = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
    setIsDragging(true);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <span className="section-label">{content.compareHint}</span>
      </div>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] max-w-3xl touch-none"
        onPointerDown={handlePointerDown}
      >
        <img
          src="/before.jpg"
          alt="QuickTube after organization"
          className="block h-full w-full select-none object-cover object-center overflow-hidden rounded-3xl"
          draggable="false"
        />

        <img
          src="/after.jpg"
          alt="QuickTube before organization"
          className="absolute top-0 left-0 block h-full w-auto max-w-none select-none object-cover object-left overflow-hidden rounded-3xl"
          draggable="false"
          style={{ width: `${position}%` }}
        />

        <div
          className="absolute inset-y-0 z-10 w-1 bg-white/95 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
          style={{ left: `calc(${position}% - 2px)` }}
        >
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-xl text-white shadow-lg"
          >
            ↔
          </button>
        </div>
      </div>
    </div>
  );
}
