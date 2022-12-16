import React from 'react'
import { Button } from 'antd'
import { NextPageWithLayout } from './_app'
import MainLayout from '@features/home/layouts/main'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className='m-0 text-white'>Hello</h1>

      <Button type='primary'>Primary</Button>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
