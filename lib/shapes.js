class shape {
    constructor() {
        this.color=''
    }
    setColor(color) {
        this.color = color;
    }
};

class circle extends shape {
    render() {
        <circle cx="25" cy="75" r="20" fill='$(this.color)' />
    }
};


class square extends shape {
    render() {
        <rect x="10" y="10" width="30" height="30" fill='$(this.color)' />
    }
};

class triangle extends shape {
    render() {
        <polygon points="150, 18 244, 182 56, 182" fill='$(this.color)' />
    }
};


module.exports = {triangle, circle, square};