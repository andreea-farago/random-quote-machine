function App(){
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [image, setimage] = React.useState("https://www.gstatic.com/prettyearth/assets/full/5238.jpg");
    React.useEffect(()=>{
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])
    
    const getNewQuote = () => {
        const images = [
            'https://www.gstatic.com/prettyearth/assets/full/14727.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/1037.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/13730.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/2064.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/6566.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/6074.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/6348.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/12883.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/1674.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/2034.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/2371.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/6230.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/1039.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/1720.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/6109.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/13854.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/14164.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/1991.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/5556.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/12937.jpg',
            'https://www.gstatic.com/prettyearth/assets/full/5238.jpg'
          ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randimageIndex = Math.floor(Math.random() * images.length);
            setRandomQuote(quotes[randIndex])
            setimage(images[randimageIndex])
    }
    return (
        <div className="image-div " style={{backgroundImage: `url("${image}")`}}>
            <header>
                <div className="header-container d-flex justify-content-between w-100 p-5">
                    <h1>Inspirational Quotes</h1>
                    <div>
                    <a href="https://github.com/andreea-farago" target="_blank" className="btn btn-light m-1"><i className="fab fa-github"></i></a>
                    <button id="btnn" className="btn btn-info mx-1"><i class="fas fa-info-circle"></i>
                        <div id="info" className="info-wrapper">
                            <div className="info-box">
                                <h4>About Random Quote Machine</h4>
                                <p>This project was created for <a target="_blank" className="text-decoration-none text-primary" href="https://www.freecodecamp.org/">freecodecamp</a> in my journey to obtain the "Front end development libraries" certification. The quotes offered are inspiring and are arranged above some amazing images provided by <a target="_blank" className="text-decoration-none text-primary" href="https://earthview.withgoogle.com/">Earth View</a>. Earth View is a collection of thousands of the planet's most beautiful landscapes, seen from space.</p>
                                <p>Built using: HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT</p>
                            </div>
                        </div>
                    </button>
                    </div>
                </div>
            </header>
            <div className="container">
                <div>
                    <div className="card-body pt-5" id="quote-box">
                    {randomQuote ? (
                            <>
                            <h5 id="text" className="card-text">&quot;{randomQuote.text}&quot;</h5>
                            <h6 id="author" className="card-subtitle text-end pt-3">-{randomQuote.author || "No author"}</h6>
                            </>
                        ) : (
                            <h2>Loading...</h2>
                        )}
                        
                        <div className="d-flex justify-content-between pt-3">
                            <div>
                                <button id="new-quote" className="btn btn-outline-dark" onClick={getNewQuote}>New quote</button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)} target="_blank" className="btn btn-outline-light mx-1">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(randomQuote.author) + '&content=' + encodeURIComponent(randomQuote.text) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} target="_blank" className="btn btn-outline-light">
                                    <i className="fab fa-tumblr"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-container d-flex justify-content-between px-5 py-3 ">
                    <span>Coded by <a target="_blank" className="text-decoration-none text-primary"  href="https://andreea-farago.github.io/">Andreea Farago</a></span>
                    <span>Images from <a target="_blank" className="text-decoration-none text-primary" href="https://earthview.withgoogle.com/">Earth View</a></span>
                </div>
            </footer>
        </div>
        
    );
}


ReactDOM.render(<App/>, document.getElementById("app"));

document.getElementById("btnn").addEventListener("click", function()
    {
        var box1 = document.getElementById("info");
        if(box1.style.display=="none"){
            box1.style.display="block";
        }
        else{
            box1.style.display="none";
        }
    
    });
