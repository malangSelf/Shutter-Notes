import React, { useState } from 'react'
import ShareCardForm from './components/ShareCardForm'
import ShareCardPreview from './components/ShareCardPreview'
import { Download } from 'lucide-react'

function App() {
  const [cardContent, setCardContent] = useState({
    title: '分享你的想法',
    description: '创造独特的分享卡片，展示你的创意和灵感。',
    backgroundColor: '#F3F4F6',
    textColor: '#1F2937',
    author: '你的名字',
  })

  const handleDownload = () => {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.download = 'share-card.png'
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-indigo-900">分享卡片生成器</h1>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <ShareCardForm cardContent={cardContent} setCardContent={setCardContent} />
        </div>
        <div className="w-full md:w-1/2">
          <ShareCardPreview cardContent={cardContent} />
          <button
            onClick={handleDownload}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Download className="mr-2" size={24} />
            下载分享卡片
          </button>
        </div>
      </div>
    </div>
  )
}

export default App