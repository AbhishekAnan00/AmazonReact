import React, { useContext } from 'react'
import { Layout } from '../../components/Layout/Layout'
import MyContext from '../../Context/Data/MyContext'

export const Order = () => {


  const Context = useContext(MyContext) 
  // const {name ,Class} = Context

  return (
     <Layout>
      order
     </Layout>
  )
}
