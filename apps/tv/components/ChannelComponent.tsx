'use client'

/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */

import { Suspense, useRef } from 'react'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Html,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import styles from './channel.module.css'

export function ChannelComponent({ curatedMedia }: { curatedMedia: string[] }) {
  return (
    <div className={styles.wrapper}>
      <Suspense>{JSON.stringify(curatedMedia)}</Suspense>
      <Canvas camera={{ position: [0, 0, -15], fov: 55 }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
            <Screen position={[10, 0, 0]} src={curatedMedia[0]} />
            <Screen position={[-10, 0, 0]} src={curatedMedia[1]} />
          </group>
          <Environment preset='city' />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls
          enablePan={false}
          enableZoom
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

const Screen = (props: JSX.IntrinsicElements['mesh'] & { src: string }) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (
      props.src ===
      'https://ipfs.io/ipfs/bafybeibjz7p2sbp2s7pyt6gu5ngf3dlwx3kc4d2wgpozq34oqpmckhioqq'
    ) {
      return (ref.current.rotation.x += 0.01)
    }
    return (ref.current.rotation.y -= 0.01)
  })
  return (
    <mesh ref={ref} {...props}>
      <object3D />
      <Html
        className={styles.screen}
        distanceFactor={1.5}
        position={[0, 0, 0.5]}
        transform
        occlude
      >
        <video
          loop
          playsInline
          controls
          autoPlay={
            props.src ===
            'https://ipfs.io/ipfs/bafybeibjz7p2sbp2s7pyt6gu5ngf3dlwx3kc4d2wgpozq34oqpmckhioqq'
          }
          src={props.src}
          className={styles.image}
        />
      </Html>
    </mesh>
  )
}
