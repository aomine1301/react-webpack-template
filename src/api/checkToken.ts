export interface TokenResponseI {
  success: boolean
  token: string
}

export const checkToken = async (): Promise<string> => {
  let token = ''
  await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function (response) {
      return response.json()
    })
    .then(function (data: TokenResponseI) {
      if (data.success) {
        token = data.token
      }
    })
    .then(() => localStorage.setItem('token', token))

  return token
}
