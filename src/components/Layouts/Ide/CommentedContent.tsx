import React, { useState, useEffect, useRef } from "react";

interface CommentedContentProps {
  children: React.ReactNode;
  isCommented?: boolean;
}

const CommentedContent = ({
  children,
  isCommented = true,
}: CommentedContentProps) => {
  const [lines, setLines] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const updateLines = () => {
    if (textContainerRef.current) {
      const style = getComputedStyle(textContainerRef.current);
      //   const fontSize = parseInt(style.fontSize, 10);
      const lineHeight = parseInt(style.lineHeight, 10);
      const maxHeight = textContainerRef.current.offsetHeight;
      setLines(Math.ceil(maxHeight / lineHeight) + (isCommented ? 1 : 0));
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
      <div
        className={`flex-col hidden ${
          !isCommented && "w-auto pe-3"
        } text-right lg:flex w-32`}
      >
        {Array.from({ length: lines }, (_, n) => n + 1).map((n) => (
          <div
            className={`grid justify-end ${
              isCommented && "grid-cols-2"
            }  text-slate-muted`}
            key={n}
          >
            <span className="col-span-1 mr-3">{n}</span>
            {isCommented && (
              <>
                {n === 1 && (
                  <div className="flex justify-center col-span-1">/**</div>
                )}
                {n > 1 && n < lines && (
                  <div className="flex justify-center col-span-1">*</div>
                )}
                {n === lines && (
                  <div className="flex justify-center col-span-1 pl-2">*/</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="text-slate-muted" ref={textContainerRef}>
        {isCommented && <br className="hidden lg:block" />}
        {children}
      </div>
    </div>
  );
};

export default CommentedContent;
