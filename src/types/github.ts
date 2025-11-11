export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
  weekday?: number;
}

export interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

export interface ContributionMonth {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
  months?: ContributionMonth[];
  colors?: string[];
}

export interface CalendarProps {
  data?: ContributionCalendar;
}

export interface GithubStatsProps {
  data?: {
    totalContributions?: number;
    weeks?: ContributionWeek[];
    months?: ContributionMonth[];
  };
}
