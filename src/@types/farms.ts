export type FarmRisk = 'low' | 'medium' | 'high';
export type FarmStars = 0 | 1 | 2 | 3 | 4 | 5;

export interface FarmRating {
  stars: FarmStars;
  upVotes: number;
  downVotes: number;
  risk: FarmRisk;
}

export interface Farm {
  id: string;
  displayName: string;
  description: string;
  masterchefAddress: string;
  tokenAddress: string;
  rating: FarmRating;
}

export type FarmsState = {
  isLoading: boolean;
  error: boolean;
  farms: Farm[];
  farm: Farm | null;
  sortBy: string | null;
  filters: {
    name: string;
    risk: string;
    stars: number;
  };
};
