import type { Page, Tail } from '@/utils/typeTail'
import { ref } from 'vue'

const tails = ref<Array<Tail>>()
const tail = ref<Tail>()
const api_key = import.meta.env.VITE_SUPA_KEY
const auth = import.meta.env.VITE_SUPA_AUTHORIZATION

export async function getTails() {
  try {
    const response = await fetch(
      'https://xzamhtlddbgsvoourgme.supabase.co/rest/v1/tails?select=*',
      {
        headers: {
          apikey: api_key,
          Authorization: auth
        }
      }
    )
    if (response.status != 200) {
      throw new Error('Error http:' + response.status)
    }
    tails.value = await response.json()
    return tails.value
  } catch (error) {
    console.log(error)
  }
}

export async function getTailById(id: string | string[]) {
  try {
    const response = await fetch(
      'https://xzamhtlddbgsvoourgme.supabase.co/rest/v1/tails?id=eq.' + id,
      {
        headers: {
          apikey: api_key,
          Authorization: auth
        }
      }
    )
    if (response.status != 200) {
      throw new Error('Error http:' + response.status)
    }
    tail.value = await response.json()
    return tail.value
  } catch (error) {
    console.log(error)
  }
}
/*
export async function geMovieById(
  lang: string | string[],
  id: string | string[]
): Promise<Movie | undefined> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?` +
        new URLSearchParams({
          language: lang,
          api_key: api_key
        })
    )
    movie.value = await response.json()
    return movie.value
    if (response.status != 200) {
      throw new Error('Error http:' + response.status)
    }
  } catch (error) {
    console.log(error)
  }
}
 */
