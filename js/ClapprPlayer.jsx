// @flow

import React, { Component } from 'react'
import Clappr from 'clappr'

class ClapprPlayer extends Component {

    componentDidMount() {
        this.change(this.props.source)
    }
    shouldComponentUpdate(nextProps) {
        const changed = (nextProps.source !== this.props.source)
        if (changed) {
            this.change(nextProps.source)
        }
        return false
    }
    componentWillUnmount() {
        this.destroyPlayer()
    }
    props: {
        id: string,
        source: string,
        width: number,
        height: number
    }
    destroyPlayer = () => {
        if (this.player) {
            this.player.destroy()
        }
        this.player = null
    }
    change = source => {
        if (this.player) {
            this.player.load(source)
            return
        }
        const { id, width, height } = this.props
        this.player = new Clappr.Player({
            baseUrl: "/assets/clappr",
            parent: `#${id}`,
            source: source,
            hideMediaControl: false,
            autoPlay: true,
            width: width,
            height: height
        })
    }
    render() {
        const { id } = this.props
        return (
            <div>
                <div id={id} />
            </div>
        )
    }
}

export default ClapprPlayer