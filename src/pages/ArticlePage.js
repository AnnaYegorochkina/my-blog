import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const loadArticleInfo = async () => {
            // const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`); // after proxy adding no need
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        };
        
        loadArticleInfo();
    }, []);

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
            <h1>{article.title}</h1>
            <p>This article has {articleInfo.upvotes} upvote(s)</p>
            {article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <CommentsList comments={articleInfo.comments} />
        </>
    );
}

export default ArticlePage;