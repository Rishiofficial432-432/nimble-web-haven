
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 border border-gray-100 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md bg-white",
      className
    )}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <Icon size={24} />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
