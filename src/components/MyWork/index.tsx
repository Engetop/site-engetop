import { Users, Eye, Chats } from 'phosphor-react'

export function MyWork() {

  return (
    <div className="flex flex-col bg-inherit gap-10 items-center mx-auto py-20 max-w-[1114px] px-4">
      <div className="flex flex-col lg:flex-row gap-36 items-center justify-between my-12">
        <h2 className="block font-semibold text-5xl leading-[54px] text-gray-100">
          {/* Método desenhado para
          acelerar a sua evolução */}
          CONSTRUINDO UMA PARCERIA DE LONGO PRAZO COM O CLIENTE
        </h2>

        <div className='max-w-[500px]'>
          <p className="block font-normal text-base leading-7 text-gray-100">
            {/* Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionarprofissionalmente */}
            Se você deseja um serviço de topografia de alta qualidade, não
            hesite em entrar em contato conosco. Estamos ansiosos para
            trabalhar com você e ajudá-lo a alcançar seus objetivos de
            construção.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Users color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Missão</span>
          <p className='font-normal text-base text-gray-400'>
          Oferecer soluções personalizadas em engenharia, topografia e projetos, utilizando equipamentos modernos e uma equipe altamente qualificada, visando a satisfação e fidelização dos nossos clientes. <br />
          </p>
        </div>
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Eye color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Visão</span>
          <p className='font-normal text-base text-gray-400'>
          Ser uma empresa líder em soluções de engenharia, topografia e projetos, reconhecida pela excelência em nossos serviços e pelo compromisso com a satisfação dos nossos clientes.<br />
          </p>
        </div>
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Chats color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Valores</span>
          <p className='font-normal text-base text-gray-400'>
          Comprometimento com a qualidade dos serviços. <br /> Atendimento personalizado e focado nas necessidades do cliente. <br /> Ética e transparência em todas as relações. <br /> Busca constante por inovação e tecnologia de ponta. <br /> Responsabilidade social e ambiental.<br />
          </p>
        </div>
      </div>


    </div>
  )
}