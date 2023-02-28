import MovieGrid from "../MovieGrid";

const Trending = () => {
    return <>
    <h3 className="border-b border-primary mt-4 pb-2">Trending</h3>
    <div className="my-8">
    <MovieGrid/>
    </div>
    <div className="flex justify-center">
        <button className="btn hover:scale-125 hover:transition ease-out duration-500">Load More</button>
    </div>

    </>;
}
 
export default Trending;