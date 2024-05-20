export const QUERY_KEYS = Object.freeze({
  FAQ: {
    getFAQquestionList: "/question",
    getFAQanswerList: (id: string) => ["/question/id", id],
  },
  Inform: {
    getInform: "/notice/id",
    getInformList: "/notice",
  },
})
