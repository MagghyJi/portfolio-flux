'use client'

import { useState, useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export function Studio() {
  const [mounted, setMounted] = useState(false)

  // UseEffect runs only on the client after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextStudio config={config} />
}
