import "./styles/Pricing.css";

const Pricing=()=>{


const plans=[
{
name:"Free",
price:"₹0",
desc:"Basic crypto tracking"
},

{
name:"Pro",
price:"₹499/month",
desc:"Advanced analytics"
},

{
name:"Premium",
price:"₹999/month",
desc:"Complete crypto tools"
}

];


return(

<div className="pricing-page">

<h1>Choose Your Plan</h1>


<div className="pricing-container">

{
plans.map((plan,index)=>(

<div className="price-card" key={index}>

<h2>{plan.name}</h2>

<h1>{plan.price}</h1>

<p>{plan.desc}</p>


<button>
Get Started
</button>


</div>

))
}


</div>


</div>

)

}


export default Pricing;