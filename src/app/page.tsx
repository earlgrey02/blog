'use client'
import { Button, Divider, Flex, Link, List, ListItem, Text } from '@chakra-ui/react'
import Motion from '@/lib/motion/component/Motion'
import Image from 'next/image'
import { GitHubIcon } from '@/lib/chakra/component/icons'
import NextLink from 'next/link'
import { getPosts } from '@/module/post/api'
import PostItem from '@/component/PostItem'
import { fadeIn, fadeInRight } from '@/lib/motion/animations'

const Page = () => {
  const posts = getPosts().slice(0, 3)

  return (
    <Flex flexDirection="column">
      <Motion variants={fadeIn} initial="initial" animate="animate" transition={{ duration: 1 }}>
        <Flex
          gap={{
            base: '1.2rem',
            sm: '1.6rem'
          }}
          height={{
            base: '7rem',
            sm: '10rem'
          }}>
          <Flex position="relative" height="inherit" aspectRatio={1}>
            <Image
              src="https://avatars.githubusercontent.com/u/82157140?v=4"
              alt="earlgrey02"
              style={{ borderRadius: '0.4rem' }}
              fill
              priority
              objectFit="cover"
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            paddingY={{
              base: 0,
              sm: '0.4rem'
            }}>
            <Flex flexDirection="column">
              <Text
                fontSize={{
                  base: '0.8rem',
                  sm: '1rem'
                }}
                color="grayAlpha.600"
                letterSpacing="-0.02rem">
                Backend Developer
              </Text>
              <Text
                fontSize={{
                  base: '1.4rem',
                  sm: '1.8rem'
                }}
                fontWeight={800}
                lineHeight={{
                  base: '1.8rem',
                  sm: '2rem'
                }}
                letterSpacing="0.05rem">
                정상윤
              </Text>
            </Flex>
            <Flex>
              <Text
                fontSize={{
                  base: '0.8rem',
                  sm: '0.95rem'
                }}>
                그저 평범한 공대생의 개발 블로그입니다.
              </Text>
            </Flex>
            <Flex>
              <Button as={NextLink} marginLeft={-2} padding={0} href="https://github.com/earlgrey02" target="_blank">
                <GitHubIcon
                  boxSize={{
                    base: '1.6rem',
                    sm: '1.9rem'
                  }}
                />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Motion>
      <Motion
        as={Divider}
        marginY="30px"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1,
          delay: 0.3
        }}
      />
      <Motion
        as={Flex}
        justify="space-between"
        align="center"
        marginBottom="2rem"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}>
        <Text
          fontSize={{
            base: '1rem',
            sm: '1.2rem'
          }}
          fontWeight={800}>
          최근 게시글
        </Text>
        <Link as={NextLink} href="/post" _hover={{ transform: 'scale(1.02)' }}>
          <Text
            fontSize={{
              base: '0.7rem',
              sm: '0.9rem'
            }}
            color="grayAlpha.600">
            모든 게시글 보기 →
          </Text>
        </Link>
      </Motion>
      <Motion
        as={List}
        spacing={{
          base: '1.6rem',
          sm: '1.8rem'
        }}
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.5
        }}>
        {posts.map(post => (
          <Motion as={ListItem} variants={fadeInRight} key={post.id}>
            <PostItem post={post} />
          </Motion>
        ))}
      </Motion>
    </Flex>
  )
}

export default Page
