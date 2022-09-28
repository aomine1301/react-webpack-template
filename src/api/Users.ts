export interface ResponseUsers {
  success: boolean
  total_pages: number
  total_users: number
  count: number
  page: number
  links: Links
  users: User[]
}

export interface Links {
  next_url: string
  prev_url: string
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  position: string
  position_id: number
  registration_timestamp: number
  photo: string
}
export type Inputs = {
  name: string
  email: string
  phone: string
  position_id: number
  photo: File
}
export interface ResponseCreateUser {
  success: boolean
  user_id?: number
  message: string
  fails?: any
}
export interface Pagination {
  page: number
  count: number
}
export const getUsers = async (page = 1, count = 5): Promise<ResponseUsers> => {
  let users: ResponseUsers = {} as ResponseUsers
  await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      users = res
    })
  return users
}
export const createUser = async (formData: any): Promise<ResponseCreateUser> => {
  let response: ResponseCreateUser = {} as ResponseCreateUser
  const token = localStorage.getItem('token')
  const data = new FormData()

  for (const name in formData) {
    data.append(name, formData[name])
  }

  await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: data,
    headers: { Token: token },
  })
    .then<ResponseCreateUser>(function (response) {
      return response.json()
    })
    .then(function (data) {
      response = data
    })
    .catch(function (error) {
      console.log(error)
    })
  return response
}
