import React, { useState  } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
export const Collection = () => {
    const col=[
        {
            "id":"SHOE001",
            "price":"99.99",
            "name":" Nike SwiftStride",
            "url":"https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg?w=740"
            
        },
        {
            "id":"SHOE002",
            "price":"89.99",
            "name":" Nike AeroFlex",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8lGpbliaFQ-FyfHL15EBCQaHJEuiw2pnoA&usqp=CAU"
    
        },
        {
            "id":"SHOE003",
            "price":"79.99",
            "name":"Nike UltraSprint",
            "url":"https://media.istockphoto.com/id/479382464/vector/blue-sport-shoes-for-running.jpg?s=612x612&w=0&k=20&c=v_fkHkodSuuZnH3dswhtKJz8aZmNgwxjfYOQ0ocvOdA="
    
        },
        {
            "id":"SHOE004",
            "price":"109.99",
            "name":"Nike HorizonRun",
            "url":"https://previews.123rf.com/images/neelsky/neelsky1601/neelsky160100031/51332053-beautiful-and-stylish-men-s-sport-shoes-over-white-background.jpg"
    
        },
        {
                    "id":"SHOE005",
                    "price":"119.99",
            "name":" Nike VelocityBurst",
            "url":"https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=1024x1024&w=is&k=20&c=pvn3pnD5rbSz7LT1zbCkgMd6PyEXeo7QdzjDCRNHunI="
    
        },
        {
            "id":"SHOE006",
            "price":"129.99",
            "name":" Nike NimbusBoost",
            "url":"https://previews.123rf.com/images/kreinick/kreinick1204/kreinick120400009/13107424-pair-of-running-shoes-white-background.jpg"
    
        },
        {
            "id":"SHOE007",
            "price":"115.59",
            "name":" Nike ZenithGlide",
            "url":"https://img.freepik.com/premium-photo/unbranded-purple-running-shoes-white-background_707345-492.jpg?w=740"
    
        },
        {
            "id":"SHOE008",
            "price":"65.29",
            "name":" Nike StellarStrider",
            "url":"https://images.unsplash.com/photo-1637437757614-6491c8e915b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    
        },
        {
            "id":"SHOE009",
            "price":"83.19",
            "name":"Nike EclipseSole",
            "url":"https://previews.123rf.com/images/photog2112/photog21120904/photog2112090400003/4706599-pair-of-running-shoes-on-a-white-background.jpg"
    
        },
        {
            "id":"SHOE010",
            "price":"65.79",
            "name":"Nike InfinityRise",
            "url":"https://www.westend61.de/images/0000078135pw/sports-shoes-on-white-background-MAEF02215.jpg"
    
        },
        {
            "id":"SHOE011",
            "price":"90.19",
            "name":" Nike NovaPulse",
            "url":"https://www.shutterstock.com/image-photo/sport-shoes-on-white-background-260nw-410498749.jpg"
    
        },
        {
            "id":"SHOE012",
            "price":"76.59",
            "name":" Nike CosmicTrail",
            "url":"https://images.pexels.com/photos/5710077/pexels-photo-5710077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
        },
        {
            "id":"SHOE013",
            "price":"82.59",
            "name":"Nike AuroraBounce",
            "url":"https://media.istockphoto.com/id/1308274455/photo/blue-sneakers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mNrdHQkWjTk8xxEn9Dst9C-ouTemFo-8dI5vpa1yfjk="
    
        },
        {
            "id":"SHOE014",
            "price":"89.59",
            "name":"Nike FusionFlow",
            "url":"https://c8.alamy.com/comp/J1J8B2/a-pair-of-childrens-sports-shoes-white-background-J1J8B2.jpg"
    
        },
        {
            "id":"SHOE015",
            "price":"82.99",
            "name":"Nike NebulaDash",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUg6kgc93RmFU53KmiYiwuhfCecjlteWEew&usqp=CAU"
    
        },
        {
            "id":"SHOE016",
            "price":"81.19",
            "name":"Nike QuantumLeap",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0RpHVHOwgYCiSU7SX0s3rK4ccI-8U8wAPQ&usqp=CAU"
    
        },
        {
            "id":"SHOE017",
            "price":"96.29",
            "name":"Nike PinnacleStep",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxC60JxtJBDeGO6b9oo-vfD0PPF8kQ6jHxg&usqp=CAU"
    
        },
        {
            "id":"SHOE018",
            "price":"76.09",
            "name":"Nike GravityGlide",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJOAqXkOrBFUtos2to8AnqkaZFu4vV7-zxg&usqp=CAU"
    
        },
        {
            "id":"SHOE019",
            "price":"81.09",
            "name":"Nike SolsticeSprint",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VIhVjoiCdLGhaNU3jS9Rv4boHiS988nttw&usqp=CAU"
    
        },
        {
            "id":"SHOE020",
            "price":"99.69",
            "name":"Nike TitanTread",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfS_8UPHuphv00L3Ol2YI7u5XMS9RHZyb2HdfxIyxDntdvQYYZjKy4SEItV1_9OxTZxQ8&usqp=CAU"
    
        },
        {
            "id":"SHOE021",
            "price":"63.49",
            "name":"Nike ZenMotion",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9_eWh0c627E5LDfmIbdP0v0kT9G4aYPihQ&usqp=CAU"
    
        },
        {
            "id":"SHOE022",
            "price":"82.59",
            "name":"Nike AeroShift",
            "url":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f35ced3-3e01-403d-b2f3-f3a357ff07a0/waffle-one-vintage-womens-shoes-qk5cz3.png"
    
        },
        {
            "id":"SHOE023",
            "price":"80.39",
            "name":"Nike LunarDash",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77CwgdXd8PEEnhxxo-NGkzh2dmdSB9vqwzw&usqp=CAU"
    
        },
     
        {
            "id":"SHOE024",
            "price":"95.29",
            "name":"Nike ApexPace",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1S33rooEXF74FOcfKLrPLm7aRhUim9f-_MUW0ulqNNbmQucOStAMYNjNIMkbxMsuJzYU&usqp=CAU"
    
        },
        {
            "id":"SHOE025",
            "price":"81.39",
            "name":"Nike SolarSurge",
            "url":"https://thumbs.dreamstime.com/b/runing-sport-shoes-isolated-white-background-149412661.jpg"
    
        },
        {
            "id":"SHOE026",
            "price":"50.09",
            "name":"Nike TerraThrive",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HA-JSAQSG6u-3KlTcgdUF6nbkrCMVTiHJw&usqp=CAU"
    
        },
        {
            "id":"SHOE027",
            "price":"52.19",
            "name":"Nike CelestialStomp",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxhYCRGwbt7FOxqGQLNVjBw-NnMaLu_xgjQ&usqp=CAU"
    
        },
        {
            "id":"SHOE028",
            "price":"69.09",
            "name":"Nike VaporStride",
            "url":"https://backend.orbitvu.com/sites/default/files/image/sport-shoe-white-background.jpeg"
    
        },
        {
            "id":"SHOE029",
            "price":"80.59",
            "name":"Nike AlphaGlide",
            "url":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9ade626a-79c9-4544-8237-907bcc65fdba/air-force-1-low-retro-mens-shoes-53gMmt.png"
    
        },
        {
            "id":"SHOE030",
            "price":"80.09",
            "name":"Nike InfinityElevate",
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvISbUjPPXJYnvTcC7flQZqJ3g1-BExXsIQ&usqp=CAU"
    
        },
    ]

    const [items, setItems] = useState([]);
    const [more, setMore] = useState(true);
    const fetchMoreData = () => {
        setTimeout(() => {
            if (items.length >= col.length) {
                setMore(false); // No more data to load
            } else {
              // Fetch the next batch of data and append it to the existing items
              const nextItems = col.slice(items.length,items.length+6)
              setItems((prevItems) => [...prevItems, ...nextItems]);
              console.log(items)
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
         <div className="grid max-w-4xl mt-10 m-auto grid-cols-3 justify-items-center gap-6">
 {items.map(c=>{
       return <div key={c.id}>
        <div>
            <img className='w-52 h-48' src={c.url}/>
        </div>
        <div className='text-center mt-4'>
            <h1>{c.name}</h1>
            <h5>{c.price}</h5>
        <button type="button" className="mt-5 text-white rounded-md bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">Order Product</button>
        </div>
      </div>
    })
}
</div>
</InfiniteScroll>




</>
  )
}
