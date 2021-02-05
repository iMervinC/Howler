import React, { FC } from 'react'
import Globe from '@/components/Globe'
import PageWarp from '@/components/PageWarp'

const projects: FC = () => {
  return (
    <PageWarp title={'Projects'}>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Globe fill1="#2F2504" fill2="#594E36">
          <h2
            className="text-6xl self-center text-center z-30"
            style={{ color: '#2F2504', WebkitTextStroke: '1px white' }}
          >
            Men At Work!
          </h2>
        </Globe>
      </div>
    </PageWarp>
  )
}

export default projects
