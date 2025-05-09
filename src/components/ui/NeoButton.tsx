import React from 'react';
import { cn } from '@/lib/utils'; // Assuming cn utility is still relevant for merging classes

// Simplified props for now to avoid complex type conflicts
// TODO: Refine these props for better type safety with polymorphic rendering
export interface NeoButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  type?: 'button' | 'submit' | 'reset'; // Explicitly list button types
  onClick?: React.MouseEventHandler<HTMLElement>; // Generic click handler
  [key: string]: any; // Allow other props, use with caution
}

const NeoButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  NeoButtonProps
>(({ className, children, href, variant = 'default', type, ...props }, ref) => {
  // Base styles for all variants
  const baseStyles =
    'px-6 py-3 font-bold text-center transition-all duration-200 ease-in-out border-2 border-black transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 inline-block'; // Added inline-block

  // Variant specific styles
  let variantStyles = '';
  switch (variant) {
    case 'outline':
      variantStyles = 'bg-transparent text-black hover:bg-yellow-400 hover:text-black shadow-brutal hover:shadow-none';
      break;
    case 'ghost': // Example of a less prominent button, might not use shadow-brutal
      variantStyles = 'bg-transparent text-black hover:bg-gray-200';
      break;
    case 'default':
    default:
      variantStyles = 'bg-black text-white hover:bg-yellow-400 hover:text-black shadow-brutal hover:shadow-none -rotate-1 hover:rotate-0';
      break;
  }

  const commonClassNames = cn(baseStyles, variantStyles, className);

  if (href) {
    return (
      <a 
        href={href} 
        className={commonClassNames} 
        ref={ref as React.Ref<HTMLAnchorElement>} 
        onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement>} // Cast onClick if needed
        {...props} // Spread remaining props, type conflicts might still occur if not careful
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type || 'button'} 
      className={commonClassNames} 
      ref={ref as React.Ref<HTMLButtonElement>} 
      onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>} // Cast onClick if needed
      {...props} // Spread remaining props
    >
      {children}
    </button>
  );
});

NeoButton.displayName = 'NeoButton';

export { NeoButton }; 