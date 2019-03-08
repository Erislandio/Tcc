import React, { Component } from 'react';

class SpotContato extends Component {
    render() {
        return (
            <aside class="profile-card">
                <header>
                    <a target="_blank" href="#">
                        <img src="http://lorempixel.com/150/150/people/" class="hoverZoomLink" />
                    </a>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.email}</h2>
                </header>
                <div class="profile-bio">
                    <p>
                        {this.props.desc}
                    </p>
                </div>
                <ul class="profile-social-links">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/creativedonut">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/dropyourbass">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/vipulsaxena">
                            <i class="fa fa-github"></i>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default SpotContato;