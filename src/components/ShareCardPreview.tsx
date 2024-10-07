import React, { useRef, useEffect } from 'react'

interface ShareCardPreviewProps {
  cardContent: {
    title: string
    description: string
    backgroundColor: string
    textColor: string
    author: string
  }
}

const ShareCardPreview: React.FC<ShareCardPreviewProps> = ({ cardContent }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        // Set canvas size
        canvas.width = 1200
        canvas.height = 630

        // Draw background
        ctx.fillStyle = cardContent.backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Set text color
        ctx.fillStyle = cardContent.textColor

        // Draw title
        const titleFontSize = 72
        ctx.font = `bold ${titleFontSize}px "Noto Serif SC", serif`
        ctx.textAlign = 'left'
        
        const maxTitleWidth = canvas.width - 200
        const titleLines = wrapText(ctx, cardContent.title, maxTitleWidth)
        let titleY = 120
        titleLines.forEach((line, index) => {
          ctx.fillText(line, 100, titleY + index * (titleFontSize + 20))
        })

        // Draw description
        const descriptionFontSize = 36
        ctx.font = `300 ${descriptionFontSize}px "Noto Sans SC", sans-serif`
        const maxDescriptionWidth = canvas.width - 200
        const descriptionLines = wrapText(ctx, cardContent.description, maxDescriptionWidth)
        
        let descriptionY = titleY + titleLines.length * (titleFontSize + 20) + 60
        descriptionLines.forEach((line, index) => {
          ctx.fillText(line, 100, descriptionY + index * (descriptionFontSize + 15))
        })

        // Draw author
        const authorFontSize = 28
        ctx.font = `italic ${authorFontSize}px "Noto Serif SC", serif`
        ctx.fillText(`—— ${cardContent.author}`, 100, canvas.height - 60)

        // Draw decorative elements
        ctx.strokeStyle = cardContent.textColor
        ctx.lineWidth = 2
        
        // Top-left corner
        ctx.beginPath()
        ctx.moveTo(40, 40)
        ctx.lineTo(140, 40)
        ctx.moveTo(40, 40)
        ctx.lineTo(40, 140)
        ctx.stroke()

        // Bottom-right corner
        ctx.beginPath()
        ctx.moveTo(canvas.width - 40, canvas.height - 40)
        ctx.lineTo(canvas.width - 140, canvas.height - 40)
        ctx.moveTo(canvas.width - 40, canvas.height - 40)
        ctx.lineTo(canvas.width - 40, canvas.height - 140)
        ctx.stroke()
      }
    }
  }, [cardContent])

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split('')
    const lines: string[] = []
    let currentLine = words[0]

    for (let i = 1; i < words.length; i++) {
      const char = words[i]
      const width = ctx.measureText(currentLine + char).width
      if (width < maxWidth) {
        currentLine += char
      } else {
        lines.push(currentLine)
        currentLine = char
      }
    }
    lines.push(currentLine)
    return lines
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <canvas ref={canvasRef} style={{ width: '100%', height: 'auto' }}></canvas>
    </div>
  )
}

export default ShareCardPreview