export interface IUsers {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: listaUsers[]
  support: Support
}

export interface listaUsers {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}
