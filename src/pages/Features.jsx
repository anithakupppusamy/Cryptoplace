import "./styles/Features.css";

const Features = () => {

const features = [
{
icon:"📊",
title:"Live Market Data",
desc:"Track real-time cryptocurrency prices and market movements."
},
{
icon:"🔐",
title:"Secure Login",
desc:"Your account is protected with secure authentication."
},
{
icon:"📈",
title:"Advanced Analytics",
desc:"Analyze crypto trends with powerful market insights."
},
{
icon:"💼",
title:"Portfolio Tracking",
desc:"Manage all your digital assets in one place."
},
{
icon:"🚨",
title:"Price Alerts",
desc:"Get alerts when your favorite coins change price."
},
{
icon:"🌎",
title:"Global Crypto Market",
desc:"Explore thousands of cryptocurrencies worldwide."
}
];


return(
<div className="features-page">

<h1>Powerful Crypto Features</h1>

<p className="subtitle">
Everything you need for your crypto journey
</p>


<div className="feature-container">

{
features.map((item,index)=>(

<div className="feature-card" key={index}>

<h2>{item.icon}</h2>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))
}

</div>

</div>
)

}

export default Features;