export interface User {
  id: number
  email: string
  password: string
  name: string
  role: 'customer' | 'admin'
  avatar?: string
}

export interface UserAuth extends User {
  access_token: string
  refresh_token: string
}
