import Faker from "faker";
function Cards(){
    return(
        <div className="ui cards">
        <div className="card">
            <div className="content">
                <img
                   className="right floated mini ui image"src={Faker.image.image()}/>
                <div className="header">Jenny Lawrence</div>
                <div className="meta">New user</div>
                <div className="description">
                    Jenny requested permission to view your contact details
                </div>
            </div>
        </div>
        </div>
    );
}
export default Cards;