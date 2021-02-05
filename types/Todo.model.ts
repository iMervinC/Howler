export interface List {
  id: number
  text: string
  checked: boolean
}

export type RC = () => boolean

export type Onchange = (id: number) => void
