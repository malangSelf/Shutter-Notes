import React from 'react'

interface ShareCardFormProps {
  cardContent: {
    title: string
    description: string
    backgroundColor: string
    textColor: string
    author: string
  }
  setCardContent: React.Dispatch<React.SetStateAction<{
    title: string
    description: string
    backgroundColor: string
    textColor: string
    author: string
  }>>
}

const ShareCardForm: React.FC<ShareCardFormProps> = ({ cardContent, setCardContent }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCardContent(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          标题
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={cardContent.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="输入标题"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          描述
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={cardContent.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="输入描述"
        ></textarea>
      </div>
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          作者
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={cardContent.author}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="输入作者名"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 mb-1">
            背景颜色
          </label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={cardContent.backgroundColor}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="textColor" className="block text-sm font-medium text-gray-700 mb-1">
            文字颜色
          </label>
          <input
            type="color"
            id="textColor"
            name="textColor"
            value={cardContent.textColor}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </form>
  )
}

export default ShareCardForm