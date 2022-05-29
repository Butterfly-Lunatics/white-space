import Router, { useRouter } from 'next/router'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import useAuth, { sleep } from '../../hooks/useAuthentication'

const Index: NextPage = () => {
  const router = useRouter()
  const uid = router.asPath.slice(
    router.asPath.lastIndexOf('/') + 1,
    router.asPath.length
  )
  const [{ user }] = useAuth()
  useEffect(() => {
    sleep(1000).then(() => {
      console.log(user?.get('username'), uid)
      if (user?.get('username') !== uid) Router.replace('/404')
    })
  }, [])
  return <div>hello</div>
}

export default Index
