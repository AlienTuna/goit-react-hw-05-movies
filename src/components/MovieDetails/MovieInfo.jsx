// import default_poster from 'src\img\default_poster.png';
const MovieInfo = ({data}) => {
    // console.log(data)
    const  { img, title, year, score, overview, genres } = data;
    return (
        <div>
            <img src={img} alt={title} height="500" />
            <div>
                <h2>{title}<span> ({year})</span>
                </h2>
                <div>User score: {score}</div>
                <h3>Overview</h3>
                <span>{overview}</span>
                <h3>Genres</h3>
                <span>{genres}</span>
            </div>
        </div>
    )
}

export default MovieInfo;