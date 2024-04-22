export const QUERY_KEYS = Object.freeze({
  FAQ: {
    getFAQquestionList: "/question",
    getFAQanswerList: (id: string) => ["/question/id", id],
  },
})
