import { useAppSelector } from "@/hooks"

import { selectUserById } from "../users/usersSlice"

interface PostAuthorProps{
    userId: string
}


export default function PostAuthor({ userId }: PostAuthorProps) {
    const author = useAppSelector(state=>selectUserById(state, userId))
  return (
      <span>by { author?.name ?? 'Unkown author'}</span>
  )
}
