import homeImg from '../assets/home.jpg'
import Carousel from '../components/Carousel'
import WordCloud from '../components/WordCloud'

export default function Home() {
  return (
    <div>
      <div className="h-screen relative">
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homeImg})` }}
        />
        {/* 반투명 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-80" />
        {/* 컨텐츠 */}
        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="p-8 rounded-lg text-center">
            <h1 className="text-4xl text-white mb-4">
              안녕하세요 개발자 서영학의 포트폴리오입니다.
            </h1>
            <p className="text-lg text-white">
              여기에 간단한 자기소개나 프로젝트 요약을 작성하세요.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <Carousel />
      </div>
      <div className="py-10">
        <WordCloud />
      </div>
    </div>
  )
}
