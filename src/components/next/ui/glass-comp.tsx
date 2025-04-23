import React from 'react';
import { cn } from "../../../lib/utils";
interface GlassmorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlassmorphicCard = React.forwardRef<HTMLDivElement, GlassmorphicCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-lg p-6 backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassmorphicCard.displayName = 'GlassmorphicCard';

export { GlassmorphicCard };
