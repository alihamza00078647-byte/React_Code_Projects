function Item(props) {

    // let {EachItem} = props; destructure Also Use in Parameters {props}

    return (
        <li className="list-group-item">
            {props.EachItem}
        </li>
    );
}


export default Item;