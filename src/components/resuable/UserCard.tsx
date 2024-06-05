import { MdOutlineDeleteOutline } from "react-icons/md";
import classes from "../resuable/style.module.css";

const UserCard = ({ userData, onDelete, handleGetUserDetail }: any) => {
    console.log("userData", userData);

    const {
        id,
        name,
        username,
        email,
        address: { street, suite, city, zipcode },
        phone,
        website,
        company: { name: companyName, catchPhrase, bs }
    } = userData;


    const handleDeleteClick = () => {
        onDelete(id); 
    };

    const handleUserDetails = () => {
        handleGetUserDetail(id)
    }



    return (
        <div key={id} className={classes.user_card}>
            <div className="user_data_profile">
                <h3>Name: {name}</h3>
                <h4>Username: {username}</h4>
                <p>Email: {email}</p>
                <p>Address: {suite}, {street}, {city}, {zipcode}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Company: {companyName}</p>
                <p>Catch Phrase: {catchPhrase}</p>
                <p>BS: {bs}</p>
            </div>
            <div className={classes.delete_icons}>

                <div className={classes.details}>
                    <button onClick={handleUserDetails}>Details</button>
                    <MdOutlineDeleteOutline style={{ color: "red", cursor: "pointer" }} onClick={handleDeleteClick} />

                </div>
            </div>
        </div>
    );
};

export default UserCard;
