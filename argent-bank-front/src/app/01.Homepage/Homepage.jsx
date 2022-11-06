import Chat from './icon-chat.png'
import Money from './icon-money.png'
import Security from './icon-security.png'
import Feature from "../../component/Feature/Feature";
import './homepage.scss'
import Banner from "../../component/Banner/Banner";
const features = [
    {
        id: "tyghr47hg",
        icon: Chat,
        title: "You are our #1 priority",
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
        id: "tyghr48hg",
        icon: Money,
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!",
    },
    {
        id: "tyghr49hg",
        icon: Security,
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe.",
    },
]


export default function Homepage () {


    return(
        <>
            <Banner/>
            <div className="features">
                {features.map((item) => (
                    <Feature
                        key={item.id}
                        image={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </>

)
}
