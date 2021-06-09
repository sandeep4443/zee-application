import React from 'react'

const GenreItems = ({ genreList, genValue }) => {
    return (
        <div>
            {genreList.length > 0 && <strong>{genValue} : {genreList.length}</strong>}
            {genreList && genreList.map(genre => (
                <section className="cards">
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front' style={{ margin: 10 + 'px' }}>
                                <div>
                                    <strong>Title</strong> {genre.Title}
                                </div>
                                <div>
                                    <strong>Nickname:</strong> {genre.US_Gross}
                                </div>
                                <div>
                                    <strong>Birthday:</strong> {genre.MPAA_Rating}
                                </div>
                                <div>
                                    <strong>Status:</strong> {genre.Major_Genre}
                                </div>
                                <div>
                                    <strong>Status:</strong> {genre.IMDB_Rating}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
            )}
        </div>
    )
}

export default GenreItems

