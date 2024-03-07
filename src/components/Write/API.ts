import axios from "axios"

const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MjQ2MTc2LCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5ODA2NTM0LCJleHAiOjE3MDk4MDgzMzR9.W-ZVkGFihKGub8DNbt_xlHSYIZvyTc20Gw7LrdkfNhE"

const Api = axios.create({
  baseURL: "http://52.79.189.147:8080",
  params: {},
  headers: {
    Authorization: token,
  },
})

export default Api
