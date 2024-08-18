'use client'
import NextImage from 'next/image'
import { useCallback, useState } from 'react'
import Motion from '../../motion/component/Motion'
import { Flex } from '@chakra-ui/react'
import { fadeIn, spin } from '@/lib/motion/animations'

interface Props {
  src: string
  alt: string
}

const Image = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const loadingCompleteHandler = useCallback(() => setIsLoading(false), [])

  return (
    <Flex position="relative" justifyContent="center" alignItems="center" marginY="2rem">
      {isLoading && (
        <Motion
          position="absolute"
          width="2rem"
          height="2rem"
          border="4px solid rgb(110, 110, 110)"
          borderTopColor="transparent"
          borderLeftColor="transparent"
          borderRadius="50%"
          animation={`${spin} 0.8s infinite linear`}
          zIndex={100}
          variants={fadeIn}
          initial="initial"
          animate="animate"
        />
      )}
      <NextImage
        src={src}
        alt={alt}
        width={570}
        height={850}
        objectFit="contain"
        onLoadingComplete={loadingCompleteHandler}
        style={{
          height: 'auto',
          maxWidth: '100%'
        }}
      />
    </Flex>
  )
}

export default Image
