import axios from 'axios';

export const userListFetch = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;
    } catch (error) {
        console.error("Error fetching the user list:", error);

    }
};


export const userCreate = async (values: any) => {
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/users", values);
        console.log("res", res);

    } catch (error) {
        console.error("error", error);
    }
};

export const userDelete = async (id: number) => {
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log("res", res);

    }
    catch (error) {
        console.error("error", error);
    }
}

export const getUserDetails = async (id: any) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return res.data;
    }
    catch (error) {
        console.error("error", error);
    }
}
