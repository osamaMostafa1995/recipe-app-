const Recipe = ({title ,  img, ingredients}) => {
    return ( 
        <div className="recipe">
            {/* <h1></h1>
            <ul>
                {ingredients.map((ingredient)=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
           
            <img src={img} alt="" /> */}
            <div class="card" >
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-text">{title}</h5>
  </div>
  <div className="overlay">
    <div className="ingredient">
    <ul>
                {ingredients.map((ingredient)=>(
                    <li><p>{ingredient.text}</p></li>
                ))}
            </ul>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default Recipe;