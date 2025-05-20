import React from 'react';
import { cn } from '@/lib/utils';

// NeoCard Component
export interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {}
const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white border-2 border-black shadow-brutal flex flex-col',
        className
      )}
      {...props}
    />
  )
);
NeoCard.displayName = 'NeoCard';

// NeoCardHeader Component
export interface NeoCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const NeoCardHeader = React.forwardRef<HTMLDivElement, NeoCardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 flex flex-col space-y-1.5', className)} // Standard padding, can be overridden
      {...props}
    />
  )
);
NeoCardHeader.displayName = 'NeoCardHeader';

// NeoCardTitle Component
export interface NeoCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
const NeoCardTitle = React.forwardRef<HTMLHeadingElement, NeoCardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-bold leading-none tracking-tight', // Using Space Grotesk implicitly via body style
        className
      )}
      {...props}
    />
  )
);
NeoCardTitle.displayName = 'NeoCardTitle';

// NeoCardDescription Component
export interface NeoCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
const NeoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  NeoCardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-600', className)} // Example muted color, can adjust
    {...props}
  />
));
NeoCardDescription.displayName = 'NeoCardDescription';

// NeoCardContent Component
export interface NeoCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
const NeoCardContent = React.forwardRef<HTMLDivElement, NeoCardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0 flex-grow', className)} {...props} /> // Standard padding, can be overridden
  )
);
NeoCardContent.displayName = 'NeoCardContent';

// NeoCardFooter Component
export interface NeoCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
const NeoCardFooter = React.forwardRef<HTMLDivElement, NeoCardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)} // Standard padding, can be overridden
      {...props}
    />
  )
);
NeoCardFooter.displayName = 'NeoCardFooter';

export {
  NeoCard,
  NeoCardHeader,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
  NeoCardFooter,
}; 