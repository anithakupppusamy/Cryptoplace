import "./styles/Blog.css";

const Blog=()=>{


const blogs=[
{
icon:"🚀",
title:"Bitcoin Future",
desc:"Learn how Bitcoin is changing the financial world."
},
{
icon:"⛓️",
title:"Blockchain Technology",
desc:"Understand the technology behind crypto."
},
{
icon:"🔥",
title:"Crypto Trends 2026",
desc:"Latest updates and market analysis."
}
];


return(

<div className="blog-page">

<h1>Crypto Insights</h1>


<div className="blog-container">

{
blogs.map((blog,index)=>(

<div className="blog-card" key={index}>

<h2>{blog.icon}</h2>

<h3>{blog.title}</h3>

<p>{blog.desc}</p>

<button>
Read More
</button>

</div>

))
}


</div>

</div>

)

}


export default Blog;