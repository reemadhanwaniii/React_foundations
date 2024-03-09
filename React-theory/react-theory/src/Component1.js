function Component1(){
    //const arr = ["abc","def","ghi","jkl"];

    //return (<div>{arr}</div>);

    const arr = [<li>abc</li>,<li>def</li>,<li>ghi</li>,<li>jkl</li>];
    return <ul>{arr}</ul>
}

export default Component1;