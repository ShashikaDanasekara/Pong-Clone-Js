export default class Ball{
    constructor(ballElement){
        this.ballElement = ballElement;
        this.reset();
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"));
    }
    set x(value){
        this.ballElement.style.setProperty("--x",value);
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"));
    }
    set y(value){
        this.ballElement.style.setProperty("--y",value);
    }

    reset(){
        this.x=50; 
        this.y=50;
        this.direction= { x:0.75, y:0.5}
        while(true){
            const heading = randomNumberBetween(0,2 * Math.PI)
            this.direction= { x: Math.cos(heading), y:Math.sin(heading)}
        }
    }

    // x 2-98
    // y 7-96
    update(delta){
        this.y=7;
    }
}