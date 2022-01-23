export const BannerArray = [
    {
        url: "https://thumbs.dreamstime.com/b/christmas-banner-gingerbread-man-cookies-mulled-wine-holiday-decorations-fir-branches-festive-bokeh-lighting-dark-80838264.jpg",
        text: "웹툰모아는 비영리 웹사이트입니다.",
    },
    {
        url: "https://thumbs.dreamstime.com/b/xmas-banner-204671559.jpg",
        text: "모든 웹툰은 공식 사이트로 연결되어 있습니다.",
    },
    {
        url: "https://thumbs.dreamstime.com/b/christmas-holidays-banner-tree-bokeh-background-gifts-lights-wooden-floor-161932746.jpg",
        text: "지속적으로 업데이트 중입니다.",
    },
    {
        url: "https://thumbs.dreamstime.com/z/merry-christmas-colorful-balls-banner-decoration-stars-backgroun-background-text-77218307.jpg",
        text: "웹툰모아는 웹툰 정보/비교 사이트 입니다.",
    },
];

export const categoryTab = ["일반", "정보", "공유", "요청", "질문", "후기"];
export const categoryArray = [
    { name: "전체", url: "" },
    { name: "공지", url: "?category=공지" },
    { name: "일반", url: "?category=일반" },
    { name: "정보", url: "?category=정보" },
    { name: "공유", url: "?category=공유" },
    { name: "요청", url: "?category=요청" },
    { name: "질문", url: "?category=질문" },
    { name: "후기", url: "?category=후기" },
];

export const GnbArray = [
    {
        id: 0,
        name: "연재중",
        url: "webtoon?category=ongoing",
    },
    {
        id: 1,
        name: "완결",
        url: "webtoon?category=completed",
    },
    { id: 2, name: "BL/GL", url: "webtoon?category=BL/GL" },
    { id: 3, name: "성인", url: "webtoon?category=adult" },
    { id: 4, name: "My", url: "user" },
    { id: 5, name: "커뮤니티", url: "community" },
];

export const FilterArray = [
    {
        title: "연재",
        list: ["전체", "네이버", "카카오", "카카오페이지", "버프툰", "기타"],
    },
    {
        title: "요일",
        list: ["전체", "월", "화", "수", "목", "금", "토", "일", "완결"],
    },
    {
        title: "장르",
        list: [
            "전체",
            "스토리",
            "에피소드",
            "옴니버스",
            "감성",
            "개그",
            "공포",
            "드라마",
            "로맨스",
            "무협",
            "액션",
            "일상",
            "소년",
            "스포츠",
            "스릴러",
            "시대극",
            "판타지",
            "학원",
            "BL/GL",
        ],
    },
    {
        title: "나이",
        list: ["전체", "전체 이용가", "12세", "15세", "18세"],
    },
    // {
    //     title: "초성",
    //     list: [
    //         "전체",
    //         "ㄱ",
    //         "ㄴ",
    //         "ㄷ",
    //         "ㄹ",
    //         "ㅁ",
    //         "ㅂ",
    //         "ㅅ",
    //         "ㅇ",
    //         "ㅈ",
    //         "ㅊ",
    //         "ㅋ",
    //         "ㅌ",
    //         "ㅍ",
    //         "ㅎ",
    //         "a-z",
    //         "0-9",
    //     ],
    // },
];

export const MainArray = [
    {
        image: "http://spnimage.edaily.co.kr/images/photo/files/NP/S/2021/11/PS21111700082.jpg",
        title: "연재웹툰",
        link: "/webtoon?category=ongoing",
    },
    {
        image: "https://img.etnews.com/photonews/2104/1408381_20210428103333_670_0001.jpg",
        title: "완결웹툰",
        link: "/webtoon?category=completed",
    },
    {
        image: "https://dn-img-page.kakao.com/download/resource?kid=bl4JKE/hzmU187Nli/KazQYNzCqNRTK06fmof5k0&filename=th2",
        title: "BL/GL웹툰",
        link: "/webtoon?category=BL/GL",
    },
    {
        image: "https://w.namu.la/s/9810f6e1bee8f22356a41c350c3de67fc69914740e32cd0a78743d07153847d9e1798b9d79ff895190791ca49d8f0822d7c773fde5801db11500f5ab79225c85d929de863ea88ffc6e275c42247c7374",
        title: "성인웹툰",
        link: "/webtoon?category=adult",
    },

    {
        image: "https://static8.depositphotos.com/1368414/973/i/950/depositphotos_9730733-stock-photo-community.jpg",
        title: "커뮤니티",
        link: "/community",
    },
    {
        image: "http://t1.kakaocdn.net/membership/product/resource/d12164b1-100a-4327-995f-cb3245ce6e0a",
        title: "My",
        link: "/user",
    },
];

export const MainQnAArray = [
    {
        question: "이거 불법 사이트임?",
        answer: "ㄴㄴ 웹툰 호스팅 절대 안함. Wiki처럼 웹툰 정보 모아놓고 비교하는 웹사이트로 운영 할 것",
    },
    {
        question: "이 사이트 왜 만듬?",
        answer: "취미로, 불법 웹사이트 쓰기 싫어서",
    },
    {
        question: "광고 받음?",
        answer: "수익목적으로는 안받음, 공익광고나, 커뮤니티 관련 광고만 넣을 예정",
    },
    {
        question: "서버비 어쩜?",
        answer: "트래픽 높아지면 그때 걱정하지 뭐",
    },
    {
        question: "비밀번호 안전함?",
        answer: "Salt 치고 Hash 해서 개발자 며느리도(며느리 없음) 모름",
    },
    {
        question: "버그 언제 고침?",
        answer: "몰?루",
    },
    {
        question: "기능은 추가 언제됨?",
        answer: "지속적으로 업데이트 하는데 개발자가 허접이라 좀 걸림",
    },
];

export const RecWebtoonArray = [
    {
        _id: 1,
        title: "1초",
        category: "ongoing",
        publisher: "Naver",
        author: "시니 / 광운",
        genre: "스토리, 드라마",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/725586/thumbnail/thumbnail_IMAG06_94506834-c312-4ad9-a704-996570d0c6fc.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=725586",
        age: "전체",
        days: "금",
    },
    {
        _id: 2,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
    {
        _id: 3,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
    {
        _id: 4,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
    {
        _id: 5,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
    {
        _id: 6,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
    {
        _id: 7,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
    {
        _id: 8,
        title: "쌉니다 천리마마트 ",
        category: "completed",
        publisher: "Naver",
        author: "김규삼",
        genre: "스토리, 개그",
        image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
        url: "https://comic.naver.com/webtoon/list?titleId=697679",
        age: "전체",
        days: "완결",
    },
];
