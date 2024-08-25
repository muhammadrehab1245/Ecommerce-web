import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

export const Collection = () => {
    const col = [
        // your data array remains the same...
    ];

    const [items, setItems] = useState([]);
    const [more, setMore] = useState(true);
    const fetchMoreData = () => {
        setTimeout(() => {
            if (items.length >= col.length) {
                setMore(false); // No more data to load
            } else {
                // Fetch the next batch of data and append it to the existing items
                const nextItems = col.slice(items.length, items.length + 6);
                setItems((prevItems) => [...prevItems, ...nextItems]);
                console.log(items);
            }
        }, 1500);
    };

    return (
        <>
            <h1 className='text-3xl mt-12 text-center'>Top Collections</h1>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={more}
                loader={
                    <div className='w-full'>
                        <div className='h-0.5 w-full bg-pink-100 overflow-hidden'>
                            <div className='progress w-full h-full bg-[#1e40af] left-right'></div>
                        </div>
                    </div>
                }
            >
                <div className="grid max-w-4xl mt-10 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6 px-4">
                    {items.map(c => (
                        <div key={c.id} className="w-full max-w-xs">
                            <div>
                                <img className='w-full h-48 object-cover' src={c.url} alt={c.name} />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className="text-lg font-semibold">{c.name}</h1>
                                <h5 className="text-sm text-gray-600">${c.price}</h5>
                                <button type="button" className="mt-5 text-white rounded-md bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
                                    Order Product
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </>
    );
}
