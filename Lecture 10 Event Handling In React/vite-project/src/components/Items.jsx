import style from "./Items.module.css";


function Item(props) {

    function BuyBtnEventHandler(event) {
        console.log(event)
        console.log(`${props.EachItem} Is bought OyeOye..`);
    }

    return (
        <>
        <li className={`list-group-item ${style.inlist}`}>
            {props.EachItem}
            <button onClick={(event) => BuyBtnEventHandler(event)} 
            className={style.buyBtn}>Buy</button>
        </li>
        </>
    );
}


export default Item;