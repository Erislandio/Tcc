import React, { Component } from 'react';
import tracking from 'tracking'
import Webcam from 'react-webcam'
import $ from 'jquery'

class Camera extends Component {


    constructor(props) {
        super(props);

        this.state = {
            img: null
        }

    }



    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({ img: imageSrc })

        const img = document.getElementById('img')
        $(img).on('load', function () {

            if ($("div#plot").length) {
                while ($("div#plot").length > 0) {
                    document.getElementById('plot').remove();
                }
                document.getElementById('resultado').innerHTML = "Não encontramos indícios da cor amarela na imagem.";
            }
            else {
                document.getElementById('resultado').innerHTML = "Não econtramos indícios da cor amarela na imagem.";
            }
            var demoContainer = document.querySelector('.content');
            var tracker = new tracking.ColorTracker(['yellow']);
            tracker.on('track', function (event) {
                event.data.forEach(function (rect) {
                    window.plot(rect.x, rect.y, rect.width, rect.height, rect.color);
                    document.getElementById('resultado').innerHTML =
                        '<h4> A cor amarela foi detectada na imagem, o que caracteriza a presença da icterícia. <br/>Sugerimos que procure um médico o mais rápido possível para obter um melhor diagnóstico. </h4>';
                });
            });
            tracking.track('#img', tracker);
            window.plot = function (x, y, w, h, color) {
                var rect = document.createElement('div');
                document.querySelector('.content').appendChild(rect);
                rect.classList.add('rect');
                rect.style.border = '2px solid ' + color;
                rect.style.width = w + 'px';
                rect.style.height = h + 'px';
                rect.style.left = (img.offsetLeft + x) + 'px';
                rect.style.top = (img.offsetTop + y) + 'px';
            }
        })
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div className="content-camera">
                <div className="capture-image">
                    <Webcam
                        audio={false}
                        height={500}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={500}
                        videoConstraints={videoConstraints}
                    />
                    <div className="imagem content">
                        <img src={this.state.img} id="img" />
                        <duv id="plot"></duv>
                    </div>
                </div>
                <div className="resultado"></div>

                <button onClick={this.capture} id="capture">Capture photo</button>

            </div>
        );
    }
}

export default Camera;