import { Link } from "react-router-dom";

export default function MiniPost (props) {
    const { post } = props;
    const CHAR_LIMIT = 35;

    return (
        <div className="flex flex-col p-2 lg:p-0 gap-1 sm:gap-4 lg:gap-0 sm:flex-row sm:max-h-14 w-full justify-between bg-gray-300 rounded-xl text-md">
            <div className="flex gap-4 lg:gap-0">
                <img className="object-cover h-12 lg:h-3/4 aspect-square rounded-lg self-center lg:mx-2" src={post.media} alt={post.title} />
                <p className="text-default self-center">
                    {post.title.length > CHAR_LIMIT ? post.title.slice(0, CHAR_LIMIT) + "..." : post.title }
                </p>
            </div>
            
            <div className="flex gap-4 justify-center items-center lg:px-4">
                <Link to={`/recipe/${post.id}`}>
                    <button className="btn btn-sm btn-info">View</button>
                </Link>
                <Link to={`/recipe/${post.id}/edit`}>
                    <button className="btn btn-sm btn-accent">Edit</button>
                </Link>
                <Link to={`/recipe/${post.id}/delete`}>
                    <button className="btn btn-sm btn-error">Delete</button>
                </Link>
            </div>
        </div>
    );
}