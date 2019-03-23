import React, { Component } from 'react';

class Files extends Component {

    constructor(props) {
        super(props);

        this.state = {
            file: null
        }

    }

    handleChange(event) {
        event.preventDefault()
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })

        var img = document.getElementById('img');
        var demoContainer = document.querySelector('.demo-container');
        var tracker = new window.tracking.ColorTracker(['yellow']);
        tracker.on('track', function (event) {
            event.data.forEach(function (rect) {
                window.plot(rect.x, rect.y, rect.width, rect.height, rect.color);
            });
        });
        window.tracking.track(img, tracker);
        window.plot = function (x, y, w, h, color) {
            var rect = document.createElement('div');
            document.querySelector('.demo-container').appendChild(rect);
            rect.classList.add('rect');
            rect.style.border = '2px solid ' + color;
            rect.style.width = w + 'px';
            rect.style.height = h + 'px';
            rect.style.left = (img.offsetLeft + x) + 'px';
            rect.style.top = (img.offsetTop + y) + 'px';
        };
    }

    render() {

        console.log(this)
        return (
            <div className="file-upload">
                <input type="file" required onChange={event => this.handleChange(event)} />
                <div className="demo-frame">
                    <div className="demo-container">
                        <img id="img" src={this.state.file} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Files;