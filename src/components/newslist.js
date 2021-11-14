import axios from "axios";
import React, {useEffect, useState} from "react";
import NewsItem from "./newsitem";

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a3fc75f37970474bb2674a1dd915b8c6");
            setArticles(res.data.articles)
            console.log(res);
        };
        
        getArticles();
    })

    return (
        <div>
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem title = {title} description={description} url={url} urlToImage={urlToImage} />
            ))}
        </div>
    );
};

export default NewsList;