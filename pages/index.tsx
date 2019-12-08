import React from 'react'
import Link from 'next/link'

const Home = () => (
  <>
    <h1>Home</h1>
    <ul>
      <li>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </li>
    </ul>
  </>
)

export default Home
