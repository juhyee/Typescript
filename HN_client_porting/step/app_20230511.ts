// javascript HN_client app.js => ts 파일로 porting
// 에러로 주석처리

//TypeScript - interface 인터페이스
// interface Store {
//   currentPage: number;
//   feeds: NewsFeed[];
// }

// // 중복되는 타입 하나로 결합
// interface News {
//   readonly id: number;
//   readonly time_ago: string;
//   readonly title: string;
//   readonly url: string;
//   readonly user: string;
//   readonly content: string;
// }

// interface NewsFeed extends News {
//   readonly comments_count: number;
//   readonly points:number;
//   read?: boolean;
// }

// interface NewsDetail extends News {
//   readonly comments: NewsComment[];
// }

// interface NewsComment extends News {
//   readonly comments: NewsComment[];
//   readonly level: number;
// }

// // 변수의 타입을 명시해줘야함 프리미티브 타입/ 객체타입
// // 프리미티브 타입 - 문자열, 숫자, boolean, null, undefined
// const container: HTMLElement | null = document.getElementById('root')
// const ajax: XMLHttpRequest = new XMLHttpRequest();
// const content = document.createElement('div')
// const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'

// // 공유되는 값
// const store:Store = {
//   currentPage: 1,
//   feeds: [],
// };

// class Api {
//   url: string;
//   ajax: XMLHttpRequest;

//   // constructor 생성자
//   constructor(url: string){
//     this.url = url;
//     this.ajax = new XMLHttpRequest();
//   }

//   protected getRequest<AjaxResponse>(): AjaxResponse {
//     this.ajax.open('GET', this.url, false);
//     this.ajax.send(); //데이터 들어옴

//     return JSON.parse(ajax.response)
//   }

// }

// class NewsFeedApi extends Api {
//   getData() : NewsFeed[] {
//     return this.getRequest<NewsFeed[]>();
//   }
// }

// class NewsDetaildApi extends Api {
//   getData() : NewsDetail {
//     return this.getRequest<NewsDetail>();
//   }
// }


// function getData<AjaxResponse>(url:string): AjaxResponse {
//   ajax.open('GET', url, false);
//   ajax.send(); //데이터 들어옴

//   return JSON.parse(ajax.response) // json 파일 객체화
// }

// function makeFeeds(feeds:NewsFeed[]):NewsFeed[]{
//   for(let i = 0; i < feeds.length; i++){
//     feeds[i].read = false;
//   }
//   return feeds
// }

// function updateView(html:string): void{
//   if(container){
//     container.innerHTML = html
//   }else {
//     console.log('최상위 컨테이너가 없습니다.')
//   }
// }


// function newsFeed(): void{
//   const api = new NewsFeedApi(NEWS_URL);
//   let newsFeed:NewsFeed[] = store.feeds;
//   const newsList = []
//   // template을 사용함으로써 마크업 구조를 정확하게 알 수 있다.
//   //  {{__news_feed__}} 와 같은 마킹을 함으로써 어떤 데이터들이 들어가는지 명확하게 알 수 있어 분리를 한다.
//   let template = `
//      <div class="bg-gray-600 min-h-screen">
//       <div class="bg-white text-xl">
//         <div class="mx-auto px-4">
//           <div class="flex justify-between items-center py-6">
//             <div class="flex justify-start">
//               <h1 class="font-extrabold">Hacker News</h1>
//             </div>
//             <div class="items-center justify-end">
//               <a href="#/page/{{__prev_page__}}" class="text-gray-500">
//                 Previous
//               </a>
//               <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
//                 Next
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="p-4 text-2xl text-gray-700">
//         {{__news_feed__}}
//       </div>
//     </div>
//   `

//   // getData를 한번만 불러옴
//   if(newsFeed.length === 0){
//     newsFeed = store.feeds = makeFeeds(api.getData())
//   }


//   for(let i = (store.currentPage - 1) * 10; i <  (store.currentPage) * 10; i++){
//     newsList.push(`
//     <div class="p-6 ${newsFeed[i].read ? 'bg-red-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
//       <div class="flex">
//         <div class="flex-auto">
//           <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>
//         </div>
//         <div class="text-center text-sm">
//           <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
//         </div>
//       </div>
//       <div class="flex mt-3">
//         <div class="grid grid-cols-3 text-sm text-gray-500">
//           <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
//           <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
//           <div><i class="far fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
//         </div>
//       </div>
//     </div>
//     `)
//   }

//   template = template.replace(" {{__news_feed__}}", newsList.join(''))
//   template = template.replace("{{__prev_page__}}", String(store.currentPage > 1 ? store.currentPage - 1 : 1))
//   template = template.replace("{{__next_page__}}", String(store.currentPage < newsFeed.length / 10 ? store.currentPage + 1 : newsFeed.length / 10))

//   updateView(template)
// }

// function newsDetail(): void{
//   // hashchange => URL #부분이 변경되면 이벤트가 시작됩니다.
//   //location => location 객체는 브라우저가 기본으로 제공해주는 객체로 주소와 관련된 다양한 정보를 제공해 준다.
//   //substring => 쓰고 싶은 index값 부터 뒤에 있는 문자열을 return 해준다. (필요없는 문자열 제거)
//   const id = location.hash.substring(7) // #제거
//   const newsContent = getData<NewsDetail>(CONTENT_URL.replace('@id', id))

//    let template = `
//     <div class="bg-gray-600 min-h-screen pb-8">
//       <div class="bg-white text-xl">
//         <div class="mx-auto px-4">
//           <div class="flex justify-between items-center py-6">
//             <div class="flex justify-start">
//               <h1 class="font-extrabold">Hacker News</h1>
//             </div>
//             <div class="items-center justify-end">
//               <a href="#/page/${store.currentPage}" class="text-gray-500">
//                 <i class="fa fa-times"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="h-full border rounded-xl bg-white m-6 p-4 ">
//         <h2>${newsContent.title}</h2>
//         <div class="text-gray-400 h-20">
//           ${newsContent.content}
//         </div>

//         {{__comments__}}

//       </div>
//     </div>
//   `;

//   for(let i = 0; i < store.feeds.length; i++){
//     if(store.feeds[i].id === Number(id)){
//       store.feeds[i].read = true;
//       break;
//     }
//   }

//   updateView(template.replace('{{__comments__}}', makeComment(newsContent.comments)));
// }


// function makeComment(comments: NewsComment[]): string{
//   const commentString = []
//   for(let i = 0; i < comments.length; i++) {
//     let comment: NewsComment = comments[i]
//     commentString.push(`
//       <div style="padding-left: ${comment.level * 40}px;" class="mt-4">
//         <div class="text-gray-400">
//           <i class="fa fa-sort-up mr-2"></i>
//           <strong>${comment.user}</strong> ${comment.time_ago}
//         </div>
//         <p class="text-gray-700">${comment.content}</p>
//       </div>
//     `);
//     // 끝을 알 수 없는 경우 재귀 함수 사용
//     if(comment.comments.length > 0){
//       commentString.push(makeComment(comment.comments))
//     }
//   }
//   return commentString.join('');
// }


// function router(): void{
//   const routePath = location.hash;

//   if(routePath == ''){
//     newsFeed()
//   }else if(routePath.indexOf('#/page/') >= 0){
//     store.currentPage = Number(routePath.substring(7))
//     newsFeed();
//   }else {
//     newsDetail()
//   }
// }

// window.addEventListener('hashchange', router);

// router();