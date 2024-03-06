import axios from "axios"

const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MjQ2MTc2LCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5Njg2MzAwLCJleHAiOjE3MDk2ODgxMDB9.aVbWNmjM7OROK2jurRzFUptqZoye3MfY3UAgWIPGCng"

const Api = axios.create({
  baseURL: "http://52.79.189.147:8080",
  params: {},
  headers: {
    Authorization: token,
  },
})

export default Api
