function CardProduct({name,img,price}) {
    return(
        <div className="border-black border-solid border">
            <img src={img} alt="" width={300} />
            <h1> {name}</h1>
            <span>{price}</span>
        </div>
    )
}
export default CardProduct