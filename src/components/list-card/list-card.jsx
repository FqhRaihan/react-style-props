import styled from "./list-card.module.css"

function ListCard() {
  return (
    <div className={`${styled.listcard} ${styled.margin}`}>
        <div className={styled.card + " " + styled.margin}>satu</div>
        <div className={styled.card + " " + styled.margin}>dua</div>
        <div className={styled.card + " " + styled.margin}>tiga</div>
    </div>
  )
}

export default ListCard