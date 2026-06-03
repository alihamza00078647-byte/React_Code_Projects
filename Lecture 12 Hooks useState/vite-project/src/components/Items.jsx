import style from "./Items.module.css";


function Item({EachItem, handleBuyButton, bought }) {
    
    return (
        <>
        <li className={`list-group-item ${style.inlist} ${bought && 'active'}`}>
            {EachItem}
            <button onClick={handleBuyButton}
            className={style.buyBtn}>Buy</button>
        </li>
        </>
    );
}


export default Item;