import React from 'react';

function Slides({slides}) {
    const [index, setIndex] = React.useState(0);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    disabled={index === 0}
                    onClick={() => setIndex(0)}
                    className="small outlined"
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                    className="small"
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    onClick={() => setIndex(index + 1)}
                    disabled={index === slides.length - 1}
                    className="small"
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index]["title"]}</h1>
                <p data-testid="text">{slides[index]["text"]}</p>
            </div>
        </div>
    );

}

export default Slides;
