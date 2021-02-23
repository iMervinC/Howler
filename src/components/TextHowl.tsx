import React, { FC, useState } from 'react'
import { useCreateHowl, useUpdateHowl } from '@/hooks/queryHooks'
import { HowlUI, TxtHowl } from '@/types/UI.model'

const TextHowl: FC<HowlUI> = ({ modal, onClose, howlT }) => {
  const [howl, setHowl] = useState<TxtHowl>({
    value: howlT ? howlT.howl : '',
    textlimit: 280,
    rows: 2,
    minRows: 2,
    maxRows: 5,
  })
  const [textLimit, setTextLimit] = useState<boolean>(false)
  const [ring, setRing] = useState({
    stroke: '',
    strokeDasharray: '',
  })

  const mutation = howlT ? useUpdateHowl(howlT._id!) : useCreateHowl()

  // On Change Input Handler
  const changeHandler = (e: any) => {
    const textareaLineHeight = 24
    const { minRows, maxRows } = howl

    const previousRows = e.target.rows
    e.target.rows = minRows // reset number of rows in textarea

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      e.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows
      e.target.scrollTop = e.target.scrollHeight
    }

    setTextLimit(e.target.value.length > howl.textlimit ? true : false)
    setHowl({
      ...howl,
      value: e.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    })
    styleRing(howl.textlimit, howl.value.length)
  }

  // Submit Handler
  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (howl.value || howl.value !== '') {
      mutation.mutate({ howl: howl.value })
      setHowl({ ...howl, value: '' })
      modal && onClose!()
    }
  }

  const styleRing = (textlimit: number, textLenght: number) => {
    const r = 15
    const circleLength = 2 * Math.PI * r
    const okLight = 'rgb(29, 242, 47)'

    let colored = (circleLength * textLenght) / textlimit
    let gray = circleLength - colored > 0 ? circleLength - colored : 0

    setRing({
      stroke:
        textlimit - textLenght <= 0
          ? 'red'
          : textlimit - textLenght <= 20
          ? 'orange'
          : okLight,
      strokeDasharray: `${colored}  ${gray}`,
    })
  }

  return (
    <form
      className={`flex items-center flex-auto ${modal && 'flex-col'}`}
      onSubmit={submitHandler}
    >
      <textarea
        className="howl-text-area"
        placeholder="What's Howlin?"
        rows={howl.rows}
        value={howl.value}
        onChange={changeHandler}
      />
      <button
        disabled={textLimit}
        className={` flex justify-between items-center duration-300 transition-colors ${
          modal ? 'self-end' : 'self-start'
        } ${
          howl.value.length === 0
            ? 'howl-btn-disabled'
            : !textLimit
            ? 'howl-btn'
            : 'howl-btn-disabled'
        }`}
      >
        <p>Howl</p>
        <svg
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r="15"
            fill="none"
            strokeWidth="3"
            style={ring}
          />
          <path
            d="M9.26367 14.7071C9.18315 14.2654 9.24258 13.5177 10.1244 14.0606C11.0063 14.6035 15.0195 15.4327 16.9159 15.7794C17.4754 15.1595 19.663 14.585 23.9369 17.2466C25.4699 17.8699 28.2637 17.3487 29.469 17.0102C29.8438 16.8554 30.396 16.7929 29.6061 17.7813C29.244 18.0194 29.0743 18.1194 29.0054 18.1516L29.3275 18.2379C29.039 18.6345 28.4386 19.4388 28.3456 19.4826C28.1214 19.3428 28.0733 19.3269 28.0772 19.3364L28.2444 19.5812L26.7141 20.4245L27.1821 20.75L26.5339 20.9359L27.6458 21.0354L28.807 21.6972L27.9986 21.7238C28.89 22.0337 30.8251 22.5999 31.4336 22.386C28.5353 25.1721 21.9119 30.7053 18.6042 30.5489L18.3624 31.0607C18.1424 30.426 17.7076 28.9201 17.7274 27.9734L17.1353 28.6918C17.0195 27.5267 16.3166 24.8216 14.4317 23.3219C12.7962 21.5686 11.8671 21.1297 11.607 21.1294C10.9738 20.8383 9.58944 19.9097 9.11772 18.5239C9.54693 18.351 9.69368 18.2989 9.79628 18.3234C9.76984 17.9552 9.75812 17.8382 9.75557 17.8257L10.1782 18.4287C10.8204 18.3816 11.7031 18.0357 10.096 17.0288C10.0607 17.29 10.0317 17.4046 10.0216 17.4292C10.0301 17.2012 9.93459 16.6959 9.48461 16.4991C9.05327 15.964 9.06717 14.8205 9.26367 14.7071Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  )
}

export default TextHowl
