import React, { useState, useEffect, useRef } from "react";

interface CommentedContentProps {
  children: React.ReactNode;
}

const CommentedContent: React.FC<CommentedContentProps> = ({ children }) => {
  const [lines, setLines] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const updateLines = () => {
    if (textContainerRef.current) {
      const style = getComputedStyle(textContainerRef.current);
      //   const fontSize = parseInt(style.fontSize, 10);
      const lineHeight = parseInt(style.lineHeight, 10);
      const maxHeight = textContainerRef.current.offsetHeight;
      setLines(Math.ceil(maxHeight / lineHeight) + 1);
    }
  };

  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
    window.addEventListener("click", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("click", updateLines);
    };
  }, []);

  return (
    <div className="flex items-start font-fira">
      {/* Number and command (*) */}
      <div className="flex-col hidden w-32 text-right lg:flex">
        {Array.from({ length: lines }, (_, n) => n + 1).map((n) => (
          <div
            className="grid justify-end grid-cols-2 text-slate-muted"
            key={n}
          >
            <span className="col-span-1 mr-3">{n}</span>
            {n === 1 && (
              <div className="flex justify-center col-span-1">/**</div>
            )}
            {n > 1 && n < lines && (
              <div className="flex justify-center col-span-1">*</div>
            )}
            {n === lines && (
              <div className="flex justify-center col-span-1 pl-2">*/</div>
            )}
          </div>
        ))}
      </div>

      {/* Text */}
      <div className=" text-slate-muted" ref={textContainerRef}>
        <br />
        {children}
      </div>
    </div>
  );
};

export default CommentedContent;
