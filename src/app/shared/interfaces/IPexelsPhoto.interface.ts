export interface IPexelsListResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: IPexelsPhoto[];
  next_page: number;
}

interface IPexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: ISrcPexelsPhoto;
  liked: boolean;
  alt: string;
}

interface ISrcPexelsPhoto {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
