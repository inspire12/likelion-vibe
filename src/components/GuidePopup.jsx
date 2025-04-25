import React, { useState, useEffect } from 'react';

const GuidePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('guideLastShown');
    const today = new Date().toDateString();

    if (!lastShown || lastShown !== today) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('guideLastShown', new Date().toDateString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-8 rounded-lg max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">LIKELION VIBE에 오신 것을 환영합니다!</h2>
        <div className="space-y-4">
          <p>LIKELION VIBE는 멋쟁이사자처럼의 새로운 플랫폼입니다.</p>
          <p>주요 기능:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>멋쟁이사자처럼의 다양한 활동을 한눈에 확인</li>
            <li>실시간 소식과 업데이트 확인</li>
            <li>멤버들과의 소통 및 네트워킹</li>
          </ul>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidePopup; 