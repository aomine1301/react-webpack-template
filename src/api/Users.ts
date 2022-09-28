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
export const createUser = async (formData: any) => {
  let response = {}
  const token = localStorage.getItem('token')
  const data = new FormData()
  data.append('name', formData.name)
  data.append('email', formData.email)
  data.append('phone', formData.phone)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  data.append('position_id', Number(formData.position_id))
  data.append('photo', formData.photo)
  console.log('data', formData)
  await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({ ...formData }),
    headers: { Token: token },
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      response = data
      if (data.success) {
        console.log('succees')
      } else {
        console.log('not successs')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  return response
}
