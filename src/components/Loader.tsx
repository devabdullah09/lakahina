import loaderBlack from '../assets/logo/loader(black).png'
import loaderWhite from '../assets/logo/loader(white).png'

interface LoaderProps {
  variant?: 'black' | 'white'
  fullScreen?: boolean
}

function Loader({ variant = 'black', fullScreen = true }: LoaderProps) {
  const loaderImage = variant === 'white' ? loaderWhite : loaderBlack

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <img
          src={loaderImage}
          alt="Loading..."
          className="w-32 h-32 animate-pulse"
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <img
        src={loaderImage}
        alt="Loading..."
        className="w-24 h-24 animate-pulse"
      />
    </div>
  )
}

export default Loader
