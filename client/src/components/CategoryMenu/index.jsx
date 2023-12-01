import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATGEGORY } from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";


function CategoryMenu() {
    const [state, dispatch] = useStoreContext();
    console.log(state);
    const {categories} = state;
    
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATGEGORY,
            currentCategory: id,
        });
    };

    return (
        <>
        <h2 className="categorypick">Pick A Category</h2>
        <div>
            {categories.map((item) => (
                <button
                key={item._id}
                onClick={() => {
                    handleClick(item._id);
                }}
                >
                    {item.name}
                </button>
            ))}
            <button
            onClick={() => {
                handleClick('');
            }}
            >
                All
            </button>
        </div>
        </>
    );
}

export default CategoryMenu;