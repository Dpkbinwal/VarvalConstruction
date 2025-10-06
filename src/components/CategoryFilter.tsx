import { Button } from "@/components/ui/button";
import { Wrench, Zap, Hammer, Paintbrush, Droplet, Ruler } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { name: "All", icon: Wrench },
  { name: "Plumber", icon: Droplet },
  { name: "Electrician", icon: Zap },
  { name: "Mason", icon: Hammer },
  { name: "Carpenter", icon: Ruler },
  { name: "Painter", icon: Paintbrush },
];

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
            Filter by:
          </span>
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <Button
                key={category.name}
                variant={isSelected ? "default" : "outline"}
                className="flex items-center gap-2 whitespace-nowrap hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                onClick={() => onCategoryChange(category.name)}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
