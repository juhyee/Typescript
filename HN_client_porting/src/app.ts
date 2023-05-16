// javascript HN_client app.js => ts 파일로 porting
//기존 app.ts 파일 분리 / 모듈 & 캡슐화
import Router from './core/router';
import { NewsFeedView, NewsDetailView } from './page';
import { Store } from './types';


// 공유되는 값
const store: Store = {
  currentPage: 1,
  feeds: [],
};
declare global {
  interface Window {
    store: Store
  }
}

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();
