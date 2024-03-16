// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onChangeImg, isActive} = props
  const {thumbnailUrl, thumbnailAltTex, id} = details

  const updateImg = () => {
    onChangeImg(id)
  }

  const cn = isActive ? 'original-img' : 'image'

  return (
    <li className="list">
      <button type="button" className={`button ${cn}`} onClick={updateImg}>
        <img src={thumbnailUrl} alt={thumbnailAltTex} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
