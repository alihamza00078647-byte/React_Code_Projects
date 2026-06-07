
function WelcomeMsg({DummyData}) {

    return (
        <>
            <h1>There are No Posts yet.</h1>
            <button className="btn btn-primary" onClick={DummyData}>Fetch Data from Server.</button>
        </>
    )
}


export default WelcomeMsg;