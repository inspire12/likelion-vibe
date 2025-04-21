import homeImg from '../assets/home.jpg'

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <h1 className="text-4xl text-white bg-black bg-opacity-50 px-4 py-2 rounded">
        Welcome to My Portfolio
      </h1>
    </div>
  )
}
