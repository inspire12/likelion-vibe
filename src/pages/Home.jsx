import homeImg from '../assets/home.jpg'

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <h1 className="text-4xl text-white bg-black bg-opacity-50 px-4 py-2 rounded">
        안녕하세요 개발자 서영학의 포트폴리오입니다.
      </h1>
      <p className="mt-4 text-lg text-white bg-black bg-opacity-50 px-4 py-2 rounded">
        여기에 간단한 자기소개나 프로젝트 요약을 작성하세요.
      </p>
    </div>
  )
}
