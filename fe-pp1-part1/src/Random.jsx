
export default function Random(props){
    const min = props.min;
    const max = props.max;
    const random = Math.floor(Math.random() * max) + min;
    console.log(random)
    return (
        <div className="random">
            <p>Random value between { min } and { max } =&gt; { random }</p>
        </div>
    )
}