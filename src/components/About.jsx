import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' >

      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>

          <div></div>

        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Da engenharia para a programação</p>
          </div>
          <div>
            <p>
              Depois que comecei a estudar programação, me encontrei.
              <br />
              <br />

              Gosto de aprender coisas novas, de testar, de aplicar...
              Me encontrei nessa área e é onde quero atuar.
              <br />
              <br />

              Gosto de ver algo ser criado e depois ver funcionando.
              Poder fazer a vida das pessoas melhor é algo que me estimula muito a querer participar.
              
            </p>
          </div>
        </div>



      </div>

    </div>
  )
}

export default About