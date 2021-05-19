import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <div>
                        <strong>Actor Name:</strong> {item.portrayed}
                    </div>
                    <div>
                        <strong>Nickname:</strong> {item.nickname}
                    </div>
                    <div>
                        <strong>Birthday:</strong> {item.birthday}
                    </div>
                    <div>
                        <strong>Status:</strong> {item.status}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem