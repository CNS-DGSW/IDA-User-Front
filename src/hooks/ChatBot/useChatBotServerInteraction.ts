// import { useState } from "react"

export const useChatBotServerInteraction = () => {
  // [ Chat GPT openAi 연결 비활성화 -> 나중에 이런 형식으로 자체 생성 AI 서버와 HTTP 통신 예정 ]
  // const chatAi = async (data: string) => {
  //   try {
  //     const post = await axios.post(
  //       "https://api.openai.com/v1/completions",
  //       {
  //         model: "text-davinci-003",
  //         prompt: `${data}`,
  //         temperature: 0.9,
  //         max_tokens: 521,
  //         top_p: 1,
  //         frequency_penalty: 0,
  //         presence_penalty: 0.6,
  //         stop: [" Human:", " AI:"],
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPEN_API),
  //         },
  //       },
  //     )
  //     console.log(String(process.env.NEXT_PUBLIC_OPEN_API))
  //     console.log(post)
  //     setChatBotChatContent((prev) => ({
  //       ...prev,
  //       answer: [
  //         ...prev.answer,
  //         { text: post.data.choices[0].text, id: post.data.id },
  //       ],
  //     }))
  //   } catch (error) {
  //     console.log(error)
  //     alert("오류가 발생하였습니다.")
  //     setChatBotChatContent({ questions: "", answer: [] })
  //   }
  // }
  return {
    // chatAi,
  }
}
