import React from 'react'
import Article from './article'
import Aside from './aside'

function Main() {
  return (
    <div style={{height:'350px'}} className='container bg-secondary p-2 row'>
        <Article/>
        <Aside/>

    </div>
  )
}

export default Main