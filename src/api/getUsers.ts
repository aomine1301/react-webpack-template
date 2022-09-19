export interface Users {
  email: string
  id: number
  name: string
  phone: string
  photo: string
  position: string
  position_id: number
  registration_timestamp: number
}
export const getUsers = async (): Promise<Users[]> => {
  let users: Users[] = []
  await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      users = res.users
    })
  return users
}
