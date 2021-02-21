import { useQuery } from 'react-query'
import axios from 'axios'

const fetcher = async (_url: string) => {
  const { data } = await axios.get(_url)
  return data
}

export const useGetHowls = () => {
  return useQuery('howls', () => fetcher('/api/howl'))
}

export const useGetUserHowls = () => {
  return useQuery('howls', () => fetcher('/api/howl/:id'), {
    refetchInterval: 5000,
  })
}
