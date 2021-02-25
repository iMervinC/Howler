import {
  useQuery,
  UseQueryOptions,
  useMutation,
  useQueryClient,
} from 'react-query'
import axios from 'axios'
import { HowlT, HowlUser } from '@/types/Howl.model'

export const fetcher = async (_url: string) => {
  const { data } = await axios.get(_url)
  return data
}

export const useGetHowls = (options?: UseQueryOptions<HowlT[]>) => {
  return useQuery<HowlT[]>('howls', () => fetcher('/api/howl'), options)
}

export const useGetHowlById = (_id: string) => {
  return useQuery<HowlT>(['howls', _id], () => fetcher(`/api/howl/${_id}`), {
    enabled: false,
  })
}

export const useCreateHowl = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (newHowl: { howl: string }) => axios.post('/api/howl', newHowl),
    {
      onSuccess: (data) => {
        queryClient.setQueryData<HowlT[]>('howls', (old) => [
          data.data,
          ...old!,
        ])
        // console.log(data)
        queryClient.invalidateQueries('howls')
      },
    }
  )
}

export const useDeleteHowl = () => {
  const queryClient = useQueryClient()
  return useMutation((howlId: string) => axios.delete(`/api/howl/${howlId}`), {
    onSuccess: (_, variable) => {
      queryClient.setQueryData<HowlT[]>('howls', (old) =>
        old!.filter((howl) => howl._id !== variable)
      )
      queryClient.invalidateQueries('howls')
    },
  })
}

export const useUpdateHowl = (_id: string) => {
  const queryClient = useQueryClient()
  return useMutation(
    (howlTxt: { howl: string }) => axios.patch(`/api/howl/${_id}`, howlTxt),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('howls')
      },
    }
  )
}

//User Hooks
export const useGetUser = (
  userTag: string,
  options?: UseQueryOptions<HowlUser>
) => {
  return useQuery(['user', userTag], () => fetcher(`/api/${userTag}`), options)
}

export const useGetUserHowls = (
  userId: string,
  options?: UseQueryOptions<HowlT[]>
) => {
  return useQuery(
    ['howls', `user-${userId}`],
    () => fetcher(`/api/${userId}/howls`),
    options
  )
}

export const useUserGetHowls = (userTag: string) => {
  const { data: userProfile, isLoading: userStatus } = useGetUser(userTag)

  const userId = userProfile?._id

  const { data: howls, isLoading: howlStatus } = useGetUserHowls(userId!, {
    enabled: !!userId,
  })

  return { userProfile, howls, userStatus, howlStatus }
}
