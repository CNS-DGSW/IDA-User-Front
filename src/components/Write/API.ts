import axios from "axios"

const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MjQ2MTc2LCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5NjEzODU4LCJleHAiOjE3MDk2MTU2NTh9.-E6QPo9SDKPdiAxH07zlqigxMLxshJrgUWrMKyfVdHQ"

const Api = axios.create({
  baseURL: "http://52.79.189.147:8080",
  params: {},
  headers: {
    Authorization: token,
  },
})

export default Api
