import React, { FC } from 'react'
import Globe from '@/components/Globe'
import PageWarp from '@/components/PageWarp'

const about: FC = () => {
  return (
    <PageWarp title={'About'}>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Globe fill1="#023E8A" fill2="#0077B6">
          <h2
            className="text-6xl self-center text-center z-30"
            style={{ color: 'transparent', WebkitTextStroke: '1px white' }}
          >
            Men At Work!
          </h2>
        </Globe>
      </div>
    </PageWarp>
  )
}

export default about
