import React from 'react'

const Tags = ({tagName,HandleTag,selected}) => {
  const TagStyle = {
    HTML : {backgroundColor: '#fda821'},
    CSS : {backgroundColor: '#c7a4ca'},
    JavaScript : {backgroundColor: '#ffd12c'},
    React : {backgroundColor: '#4cdafc'},
    Nodejs : {backgroundColor: '#9bdd99'},
    default : {backgroundColor: '#f9f9f9'},
  }
  return (
    <div className=''>
        <button type='button' style={selected ? TagStyle[tagName] : TagStyle.default} className='px-1 border bg-gray-100 rounded-md mx-1' onClick={() => HandleTag(tagName)}>{tagName}</button>
      
    </div>
  )
}

export default Tags