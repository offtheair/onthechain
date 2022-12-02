import { Suspense } from 'react'

import { ChannelComponent } from '../../components/ChannelComponent'

export default function ChannelPage(/* {
  params,
}: {
  params: { channel: string }
} */) {
  const curatedMedia = [
    'https://ipfs.io/ipfs/bafybeibjz7p2sbp2s7pyt6gu5ngf3dlwx3kc4d2wgpozq34oqpmckhioqq',
    'https://zora-prod.mypinata.cloud/ipfs/bafybeiddgjqghkr5dgkekywbalv4qqa7oozu5xm4fsfeudydcodm6ol45i',
  ]

  return (
    <Suspense fallback='...'>
      <ChannelComponent curatedMedia={curatedMedia} />
    </Suspense>
  )
}
