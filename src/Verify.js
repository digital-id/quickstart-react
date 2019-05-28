import React from 'react';

export default class Verify extends React.Component {

    render() {
        return (
            <div id="digitalid-verify"></div>
        )
    }

    componentDidMount() {

        const script = document.createElement('script');

        script.src = 'https://digitalid-sandbox.com/sdk/app.js';
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {

            /* Verify with Digital iD */
            window.digitalId.init({
                clientId: '[YOUR CLIENT ID]',
                uxMode: 'popup',
                onLoadComplete: function () {
                },
                onComplete: function (msg) {

                },
                onClick: function (opts) {
                },
                onKeepAlive: function () {
                }
            });

        }
    }
}
