
import './search-box.styles.css';

const SearchBox =(props:any)=>{

    return(
        <input className={`search-box ${props.className}`} 
        type='search' 
        placeholder={props.placeholder} 
        onChange={props.onChangeHandler} />
    )

}



export default SearchBox;