export interface Tail {
  created_at: Date
  id: number
  name: string
  pages: Page[]
  poster_path: string
}

export interface Page {
  page_num: number
  photo_text: string
  text: string[] | string
}
