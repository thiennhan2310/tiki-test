import React from 'react';


const Title = ({title,size='3'})  =>{
  const H = `h${size}`
  return <H> {title} </H>
}

export default Title;