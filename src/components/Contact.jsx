import React, { useState } from 'react'

const Contact = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('form sent')

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div name='contact' className='w-full sm:h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={ handleSubmit } action='https://getform.io/f/5a06de45-0af7-4c3c-91c1-7352bd246904' className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Fale comigo por este email - rafael.lacana@hotmail.com</p>
          <p className='text-gray-300 py-4'>Ou use alguma das redes nos links acima</p>
        </div>

        <input className='bg-[#ccd6f6] p-2 rounded-lg' type='text' placeholder='name' name='name' value={ name } onChange={ e => setName(e.target.value) }/>
        <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type='email' placeholder='email' name='email' value={ email } onChange={ e => setEmail(e.target.value) } />
        <textarea
          className='bg-[#ccd6f6] p-2 rounded-lg'
          name='message'
          rows='10'
          placeholder='your message'
          value={ message }
          onChange={ e => setMessage(e.target.value) }
        ></textarea>
        <button
          type='submit'
          className='text-white border-2 rounded-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >send</button>
      </form>
    </div>
  )
}

export default Contact