import Button from '../components/Button/Button'
import Input from '../components/Input'
import Map from '../components/Map'

export default function ProductWrite() {

  
  return (
    <form className="form">
      <Input type="file" accept="image/*" multiple={true} />
      <Input label="제목" placeholder="글제목"/>
      <Input label="가격" type="number" />
      <Map style={{ width: '100%', height: '200px' }} />

      <div className="buttons">
        <Button />
      </div>
    </form>
  )
}
