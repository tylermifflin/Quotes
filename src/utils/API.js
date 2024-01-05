import axios from "axios";

const quotes = async () => {
    try {
        const response = await axios.get("https://zenquotes.io/api/quotes/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };

export default quotes;