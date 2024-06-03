import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../server/FetchData';

const Details = () => {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState<any>(null);
    console.log("userDetails", userDetails);


    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const user = await getUserDetails(id);
                setUserDetails(user);
            } catch (error) {
                console.log("error", error);
            }
        };
            fetchUserDetails();
    }, [id]);

    const { name, username, email, address, phone, website, company } = userDetails || {};

    return (
        <div>
            <div className='details_card'>
                <h2>User Details</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}` : ''}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>Company:</strong> {company ? `${company.name}, ${company.catchPhrase}, ${company.bs}` : ''}</p>
            </div>
        </div>
    );
}

export default Details;
