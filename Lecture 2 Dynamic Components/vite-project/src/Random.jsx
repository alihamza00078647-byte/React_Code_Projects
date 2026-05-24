function Random(){
    let num = Math.floor(Math.random() * 100);
    
    return <div>
        <h2 style={{"color": "red"}}>This is a Random {num} Number</h2>
    </div>
}


export default Random;