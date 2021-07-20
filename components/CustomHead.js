import React from 'react'
import Head from "next/head"

function CustomHead({ title, keywords, description }) {
  return (
    <Head>
      <title>Pateando Latas | {title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  )
}

export default CustomHead
