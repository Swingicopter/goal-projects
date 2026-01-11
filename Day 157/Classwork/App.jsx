// შექმენით კომპონენტი, სადაც გექნებათ სია

// const [list, setList] = useState(['სიის ელემენტები])

// და მასში რამდენიმე ელემენტი, შემდეგ მას უნდა გადაუაროთ .map()-ით და შექმნათ თთოეული ელემენტისთვის li ელემენტი.

let arr = [1, 3, 57, "fkl"]

const [list, setList] = useState([arr]);

function elToLi(el) {
    return <li>[el]</li>
};

