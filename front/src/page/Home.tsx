import { Link } from "react-router-dom"
import image from "../assets/river.png"
const cards = [{ topic: "Math", title: "Matemática" },
{ topic: "english", title: "Inglês" },
{ topic: "history", title: "História" },
{ topic: "arts", title: "Artes" },
{ topic: 'physic', title: "Física" },
{ topic: "chemical", title: "Química" }
]
export const Home = () => {
    return (
        <>

            <div className="grid grid-cols-2 mb-8 bg-slate-400 gap-2">
                <div>
                    <h2 className="text-center text-white mt-6 pb-4 font-bold text-xl">Chats Educacionais</h2>
                    <p className="text-sm pl-10 text-white">Conecte-se e aprenda com a nossa plataforma de chat educacional!
                        Na era digital em constante evolução, a comunicação eficaz e a colaboração são fundamentais para o sucesso educacional.
                        Com nossa aplicação de chat de educação, proporcionamos um ambiente interativo e seguro onde alunos, professores e instrutores podem se conectar,
                        trocar ideias e colaborar em tempo real, enriquecendo assim a experiência de aprendizagem</p>
                </div>
                <div className="pb-10 pt-4 pr-6">
                    <img src={image} />
                </div>
            </div>
            <div className="grid grid-cols-3 pl-8">
                {cards &&
                    cards.map((card) => (
                        <div key={card.topic} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                            <Link to={`/chat?topic=${card.topic}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{card.title}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-teal-600 dark:text-gray-400">Chatbot para ajudar os alunos na disciplina de {card.topic}</p>

                        </div>
                    ))
                }
            </div>
        </>
    )
}