import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { WorkerCard } from "@/components/WorkerCard";

const mockWorkers = [
  {
    id: 1,
    name: "Manish Rana",
    role: "Master Plumber",
    rating: 4.9,
    location: "Downtown",
    available: true,
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop",
    experience: "12"
  },
  {
    id: 2,
    name: "Mamta Sharma",
    role: "Certified Electrician",
    rating: 4.8,
    location: "West Side",
    available: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    experience: "8"
  },
  {
    id: 3,
    name: "Rajpreet Singh",
    role: "Expert Mason",
    rating: 5.0,
    location: "East District",
    available: false,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    experience: "15"
  },
  {
    id: 4,
    name: "Pradeep Binwal",
    role: "Lead Carpenter",
    rating: 4.7,
    location: "North Area",
    available: true,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    experience: "10"
  },
  {
    id: 5,
    name: "Deepika Sharma",
    role: "Professional Painter",
    rating: 4.9,
    location: "South Side",
    available: true,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    experience: "7"
  },
  {
    id: 6,
    name: "Govind Joshi",
    role: "Senior Electrician",
    rating: 4.8,
    location: "Central",
    available: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    experience: "14"
  },
];

const Workers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get search and category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  // Filter workers based on search and category
  const filteredWorkers = useMemo(() => {
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    
    return mockWorkers.filter((worker) => {
      // Category filter
      const categoryMatch = 
        selectedCategory === "All" || 
        worker.role.toLowerCase().includes(selectedCategory.toLowerCase());
      
      // Search filter
      const searchMatch = 
        !searchQuery ||
        worker.name.toLowerCase().includes(searchQuery) ||
        worker.role.toLowerCase().includes(searchQuery) ||
        worker.location.toLowerCase().includes(searchQuery);
      
      return categoryMatch && searchMatch;
    });
  }, [searchParams, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {searchParams.get("search") 
              ? `Search Results for "${searchParams.get("search")}"` 
              : "Available Workers"}
          </h1>
          <p className="text-muted-foreground text-lg">
            {filteredWorkers.length} skilled construction professional{filteredWorkers.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {filteredWorkers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkers.map((worker) => (
              <WorkerCard key={worker.id} {...worker} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No workers found matching your criteria</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Workers;
