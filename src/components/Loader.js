import { ThreeDots } from  'react-loader-spinner';

/**
 * The component can be provided with @width  @height
 * If not, the default values are height=80 and width=80
 * 
 * Also it can be providen with a @className string or a
 * @style object to customize the container div
 */

export const Loader = ({ 
  height=80, 
  width=80, 
  className='',
  style={}
}) => {
  return (
    <div className={ className } style={ style }>
      <ThreeDots 
        color="#DB5752" 
        height={ height } 
        width={ width } 
      />
    </div>
  )
}
