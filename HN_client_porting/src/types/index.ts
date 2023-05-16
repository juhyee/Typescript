import View from '../core/view';

//TypeScript - interface 인터페이스
export interface Store {
  feeds: NewsFeed[];
  currentPage: number;
}

// 중복되는 타입 하나로 결합
export interface News {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

export interface NewsFeed extends News {
  readonly points: number;
  readonly comments_count: number;
  read?: boolean;
}

export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

export interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

export interface RouteInfo {
  path: string;
  page: View;
}
