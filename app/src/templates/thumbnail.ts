type GetThumbnailHTMLProps = {
	title: string
}

export const getThumbnailHTML = (props: GetThumbnailHTMLProps): string => {
	const { title } = props

	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Thumbnail</title>
    
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet">
    
      <style>
        body {
          margin: 0;
          font-family: Ubuntu, sans-serif;
          color: #FFFFFF;
          background: #000000;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
            radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
          background-size: 100px 100px;
          height: 100vh;
        }
    
        #wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
    
        svg {
          height: 96px;
          margin-top: 40px;
        }
    
        h1 {
          font-size: 62px;
          line-height: 80px;
    
          max-width: 80%;
        }
      </style>
    </head>
    <body>
      <div id="wrapper">
        <h1>${title}</h1>
    
        <svg width="312" height="470" viewBox="0 0 312 470" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.0772 434C-32.4229 352.5 -15.4227 218.5 88.5772 149.5L142.577 198C50.5772 260 66.6671 345.847 108.077 376C187.077 433.524 226 360.5 226 360.5L151 292L206.5 255L311.577 348.5C285.077 467.5 143.077 503.857 62.0772 434Z" fill="#F2F2F2"/>
          <path d="M311.577 0V309.5L249.577 253.5V127.5L168.5 181L114.5 132.5L311.577 0Z" fill="#5328FE"/>
        </svg>
      </div>
    </body>
    </html>
  `
}
