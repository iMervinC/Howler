import {
  useQuery,
  UseQueryOptions,
  useMutation,
  useQueryClient,
} from 'react-query'
import axios from 'axios'
import { HowlT } from '@/types/Howl.model'

export const fetcher = async (_url: string) => {
  const { data } = await axios.get(_url)
  return data
}

export const useGetHowls = (options?: UseQueryOptions<HowlT[]>) => {
  return useQuery('howls', () => fetcher('/api/howl'), options)
}

export const useCreateHowl = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (newHowl: { howl: string }) => axios.post('/api/howl', newHowl),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('howls')
      },
    }
  )
}
