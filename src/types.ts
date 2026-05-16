export interface Activity {
  time: string;
  title: string;
  description: string;
  longDescription?: string;
  images?: string[];
  bookingUrl?: string;
  bookingLabel?: string;
  location?: string;
  type: 'transport' | 'activity' | 'dining' | 'lodging' | 'leisure';
  splitGroup?: {
    groupA: string;
    groupB: string;
  };
}

export interface Day {
  day: number;
  date: string;
  location: string;
  summary: string;
  activities: Activity[];
}

export interface Itinerary {
  title: string;
  duration: string;
  groupSize: number;
  dates: string;
  days: Day[];
  tips: {
    title: string;
    content: string;
  }[];
}
