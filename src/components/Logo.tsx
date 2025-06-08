import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light' | 'dark';
  withBackground?: boolean;
}

const sizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
};

const variants = {
  default: 'opacity-100',
  light: 'opacity-90',
  dark: 'opacity-90 invert'
};

export function Logo({ 
  className, 
  size = 'md', 
  variant = 'default',
  withBackground = true
}: LogoProps) {
  return (
    <div 
      className={cn(
        'relative',
        withBackground && 'p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10',
        'transition-all duration-300 hover:bg-white/10',
        sizes[size],
        variants[variant],
        className
      )}
    >
      <div className={cn(
        'relative w-full h-full',
        'rounded-lg overflow-hidden'
      )}>
        <Image
          src="/images/TW-logo.png"
          alt="TW Bridge Monogram"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 