import React from 'react';
import './Card.css';
import food from './images/food.jpg';
import heartFill from './images/heart-fill.png';
import heartOutline from './images/heart-outline.png';

const Card = () => {

    const recipeAuthor = "Efecan";
    const recipeItem = {
        title: "Avokado Ezmeli Taco",
        date: "8 Haziran 2021, Salı",
        image: food,
        description:
            "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    };
    const like = 193;
    const isLiked = true;

    return (
        <div className="card">
            <div className="card-header">
                <div className="profile">
                    <span className="letter">K</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{recipeItem.title}</h5>
                    <div className="card-date">{recipeItem.date}</div>
                </div>
            </div>
            <img className="card-image" src={food} alt="Logo" />
            <div className="card-text">{recipeItem.description}</div>
            <div className="card-like-bar">
                {isLiked ? (
                    <img className="card-like-icon" src={heartFill} alt="Logo" />
                ) : (
                    <img className="card-like-icon" src={heartOutline} alt="Logo" />
                )}
                <div className="like-text">
                    <b>{like}</b> kişi bu tarifi beğendi.
                </div>
            </div>
        </div>
    )
}

export default Card;
