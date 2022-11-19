import React from "react";
import Article from './article.js'

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        author: 'Jan Nowek',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint beatae iusto amet, doloribus reprehenderit dicta quidem libero nemo quas quae. Eius id dolor similique quia vitae iusto ut neque quo!'
    },
    {
        id: 2,
        title: 'Czarne dziury',
        author: 'Jan Newton',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint beatae iusto amet, doloribus reprehenderit dicta quidem libero nemo quas quae. Eius id dolor similique quia vitae iusto ut neque quo!'
    },
    {
        id: 3,
        title: 'Ciag fibonacciego',
        author: 'Fibonacci',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint beatae iusto amet, doloribus reprehenderit dicta quidem libero nemo quas quae. Eius id dolor similique quia vitae iusto ut neque quo!'
    },
]


const HomePage = () =>
{
    const artList = articles.map(article =>
        (
            <Article key={article.id} {...article}
            />
        ))

    return(
        <div className="home">
            {artList}
        </div>
    )
}

export default HomePage;